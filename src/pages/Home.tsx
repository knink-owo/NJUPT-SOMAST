import { Link } from "react-router-dom";
import { about, hero, home, site } from "../content";
import { Arrow, Reveal } from "../components/ui";

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <Reveal className="hero-main">
          <p className="kicker">{hero.kicker}</p>
          <h1>
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="sub">{hero.sub}</p>
          <div className="cta-row">
            <Link className="btn" to={hero.cta.to}>
              {hero.cta.label}
              <Arrow />
            </Link>
            <Link className="btn-ghost" to={hero.ctaSecondary.to}>
              {hero.ctaSecondary.label}
              <Arrow />
            </Link>
          </div>
        </Reveal>

        <Reveal className="hero-side" delay={0.12}>
          <div className="dossier">
            <div className="dossier-head">
              <span className="mono">{hero.dossier.title}</span>
              <span className="mono">{hero.dossier.code}</span>
            </div>
            {hero.dossier.rows.map((row) => (
              <div className="dossier-row" key={row.label}>
                <span className="dossier-label">{row.label}</span>
                <span className="dossier-num">{row.num}</span>
                <span className="dossier-note">{row.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{about.eyebrow}</p>
          <h2 className="title">{about.title}</h2>
        </Reveal>

        <div className="about-2">
          <Reveal className="about-copy">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              <a
                className="spec-link"
                href={site.officialUrl}
                target="_blank"
                rel="noreferrer"
              >
                学院官网上的科协介绍 ↗
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="spec">
              {about.spec.map((row) => (
                <div className="spec-row" key={row.key}>
                  <div className="spec-key">{row.key}</div>
                  <div className="spec-val">{row.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Entries() {
  return (
    <section className="section entries-section">
      <div className="wrap">
        <div className="entries">
          {home.entries.map((entry, index) => (
            <Reveal key={entry.to} delay={index * 0.06}>
              <Link className="entry" to={entry.to}>
                <span className="mono">{entry.no}</span>
                <h3>{entry.title}</h3>
                <p>{entry.desc}</p>
                <span className="entry-action">
                  {entry.action}
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Entries />
    </>
  );
}
