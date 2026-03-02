type GoogleRating = {
  ratingText: string;
  reviewCountText: string;
};

const FALLBACK_RATING: GoogleRating = {
  ratingText: '4,8 / 5',
  reviewCountText: ''
};

type PlacesDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
};

function formatRating(value: number) {
  return `${value.toFixed(1).replace('.', ',')} / 5`;
}

function formatReviewCount(value: number) {
  return `${new Intl.NumberFormat('fr-FR').format(value)} avis`;
}

export async function getGoogleRating(): Promise<GoogleRating> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return FALLBACK_RATING;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount'
      },
      next: { revalidate: 60 * 60 * 24 }
    });

    if (!response.ok) {
      return FALLBACK_RATING;
    }

    const data = (await response.json()) as PlacesDetailsResponse;

    if (typeof data.rating !== 'number') {
      return FALLBACK_RATING;
    }

    return {
      ratingText: formatRating(data.rating),
      reviewCountText:
        typeof data.userRatingCount === 'number'
          ? formatReviewCount(data.userRatingCount)
          : ''
    };
  } catch {
    return FALLBACK_RATING;
  }
}
