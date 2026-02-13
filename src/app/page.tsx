"use client";

import React from "react";

export default function HomePage() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <nav className="nav">
          <div className="brand">FORM+</div>
          <div className="navLinks">
            <button className="navBtn" onClick={() => scrollToId("espaces")}>
              Espaces
            </button>
            <button className="navBtn" onClick={() => scrollToId("experience")}>
              Expérience
            </button>
            <button className="navBtn" onClick={() => scrollToId("membre")}>
              Devenir membre
            </button>
          </div>
        </nav>

        <div className="heroInner">
          <p className="eyebrow">FORM+</p>
          <h1 className="heroTitle">
            L’excellence du fitness en Nouvelle-Calédonie
          </h1>
          <p className="heroSubtitle">
            Un environnement pensé pour celles et ceux qui recherchent performance,
            précision et exigence.
          </p>

          <div className="heroCtas">
            <button className="btnPrimary" onClick={() => scrollToId("espaces")}>
              Découvrir nos espaces
            </button>
            <button className="btnSecondary" onClick={() => scrollToId("membre")}>
              Devenir membre
            </button>
          </div>

          <div className="heroMeta">
            <div className="pill">Premium</div>
            <div className="pill">Performance</div>
            <div className="pill">Expérience</div>
          </div>
        </div>
      </header>

      {/* SECTION: POSITIONNEMENT */}
      <section className="section">
        <div className="container">
          <h2 className="h2">Plus qu’un club. Une expérience.</h2>
          <p className="lead">
            FORM+ est une signature. Un lieu où l’entraînement devient structuré,
            mesuré, maîtrisé.
          </p>
          <p className="text">
            Chaque détail — lumière, circulation, matériel, programmation — est conçu
            pour offrir une expérience d’entraînement fluide, efficace et premium.
          </p>
        </div>
      </section>

      {/* SECTION: ESPACES */}
      <section className="section sectionAlt" id="espaces">
        <div className="container">
          <div className="grid2">
            <div>
              <h2 className="h2">Nos espaces d’entraînement à Nouméa</h2>
              <p className="lead">Des environnements distincts, une même exigence.</p>
              <ul className="list">
                <li>Plateaux de musculation dernière génération</li>
                <li>Zones fonctionnelles & performance</li>
                <li>Studios de cours collectifs immersifs</li>
                <li>Espaces récupération & mobilité</li>
              </ul>
              <p className="text">
                Tout est pensé pour l’efficacité. Rien n’est laissé au hasard.
              </p>
              <button className="btnPrimary" onClick={() => scrollToId("membre")}>
                Explorer nos espaces
              </button>
            </div>

            {/* “Carte visuelle” sans image (tu pourras remplacer plus tard) */}
            <div className="cardVisual">
              <div className="cardVisualInner">
                <div className="metric">
                  <span className="metricLabel">Standard</span>
                  <span className="metricValue">Premium</span>
                </div>
                <div className="divider" />
                <div className="metric">
                  <span className="metricLabel">Approche</span>
                  <span className="metricValue">Structurée</span>
                </div>
                <div className="divider" />
                <div className="metric">
                  <span className="metricLabel">Focus</span>
                  <span className="metricValue">Résultats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EXPERIENCE */}
      <section className="section" id="experience">
        <div className="container">
          <h2 className="h2">Une approche structurée</h2>
          <p className="lead">
            Chez FORM+, l’adhésion n’est pas un simple accès. C’est une entrée dans un cadre.
          </p>

          <div className="features">
            <div className="feature">
              <h3 className="h3">Encadrement professionnel</h3>
              <p className="text">
                Une équipe présente, exigeante, tournée vers la progression.
              </p>
            </div>
            <div className="feature">
              <h3 className="h3">Programmes structurés</h3>
              <p className="text">
                Une programmation claire, pensée pour avancer et performer.
              </p>
            </div>
            <div className="feature">
              <h3 className="h3">Équipements premium</h3>
              <p className="text">
                Matériel sélectionné pour sa fiabilité, son confort et son efficacité.
              </p>
            </div>
            <div className="feature">
              <h3 className="h3">Standards élevés</h3>
              <p className="text">
                Hygiène, fluidité, confort : une expérience sans friction.
              </p>
            </div>
          </div>

          <p className="text subtle">
            Nous privilégions la qualité à la quantité.
          </p>
        </div>
      </section>

      {/* SECTION: COMMUNAUTE */}
      <section className="section sectionAlt">
        <div className="container">
          <h2 className="h2">Une communauté exigeante</h2>
          <p className="lead">FORM+ rassemble celles et ceux qui prennent leur entraînement au sérieux.</p>

          <div className="pillRow">
            <span className="pill">Performance</span>
            <span className="pill">Discipline</span>
            <span className="pill">Résultats</span>
            <span className="pill">Environnement qualitatif</span>
          </div>
        </div>
      </section>

      {/* SECTION: EVOLUTION */}
      <section className="section">
        <div className="container">
          <h2 className="h2">En constante optimisation</h2>
          <p className="text">
            FORM+ poursuit son développement et concentre actuellement son énergie sur
            l’optimisation de ses espaces existants afin d’offrir une expérience toujours
            plus qualitative à ses membres.
          </p>
          <p className="text subtle">Notre priorité : améliorer, affiner, perfectionner.</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta" id="membre">
        <div className="container ctaInner">
          <div>
            <h2 className="h2">Rejoindre FORM+</h2>
            <p className="lead">
              L’excellence n’est pas un hasard. Elle se construit.
            </p>
          </div>

          <div className="ctaBtns">
            <a className="btnPrimary" href="/contact">
              Devenir membre
            </a>
            <a className="btnSecondary" href="/contact">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerInner">
          <div className="brandSmall">FORM+</div>
          <div className="footerLinks">
            <a href="#espaces">Espaces</a>
            <a href="#experience">Expérience</a>
            <a href="/memberships">Adhésions</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}export default function ContactPage() {
  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <h1 className="h2">Contact</h1>
        <p className="lead">Dis-moi ce que tu veux ici (formulaire, WhatsApp, téléphone, email).</p>
      </div>
    </main>
  );
}export default function MembershipsPage() {
  return (
    <main style={{ padding: "72px 0" }}>
      <div className="container">
        <h1 className="h2">Adhésions</h1>
        <p className="lead">On peut structurer 3 offres premium (ou moins) avec bénéfices clairs.</p>
      </div>
    </main>
  );
}