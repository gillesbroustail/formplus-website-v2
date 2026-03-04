import Image from 'next/image';

type HeroVideoBackdropProps = {
  posterSrc: string;
  videoSrc: string;
  alt: string;
  className?: string;
};

export function HeroVideoBackdrop({ posterSrc, videoSrc, alt, className }: HeroVideoBackdropProps) {
  return (
    <div className={className}>
      <Image src={posterSrc} alt={alt} fill className="object-cover opacity-70" priority />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55 motion-safe:animate-media-pan"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
