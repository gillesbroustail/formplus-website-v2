const benefits = [
  'Planning en temps reel pour anticiper chaque seance.',
  'Filtres par club pour comparer Vata et Almatrium.',
  'Selection par coach pour trouver le bon accompagnement.',
  'Types de cours: yoga, renforcement, cycling, RPM et plus.',
  'Niveaux d’intensite pour adapter chaque entrainement.'
];

export function PlanningValueProps() {
  return (
    <section className="section-pad">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Planning cours collectifs</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tightest md:text-5xl">
            Redefinir votre routine.
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted md:text-base">
            Chaque seance devient un choix intentionnel, avec une interface claire pour avancer vite, sans friction.
          </p>
        </div>
        <ul className="grid gap-3">
          {benefits.map((item) => (
            <li key={item} className="rounded-2xl border border-border bg-[#0a0a0a] px-5 py-4 text-sm text-text md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
