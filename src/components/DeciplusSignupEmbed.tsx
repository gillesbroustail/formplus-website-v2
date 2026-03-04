type DeciplusSignupEmbedProps = {
  src: string;
};

export function DeciplusSignupEmbed({ src }: DeciplusSignupEmbedProps) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-3 md:p-5">
      <iframe
        title="Inscription Deciplus FORM+"
        src={src}
        width="100%"
        frameBorder={0}
        className="block w-full rounded-2xl bg-bg h-[1400px] md:h-[1200px]"
      />
      <p className="mt-4 text-sm text-muted">
        Si besoin:&nbsp;
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text underline underline-offset-4 hover:text-primary"
        >
          Ouvrir l&apos;inscription dans un nouvel onglet
        </a>
      </p>
    </div>
  );
}
