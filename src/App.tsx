import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  about,
  departments,
  events,
  footer,
  gallery,
  hero,
  join,
  nav,
  site,
} from "./content";

/* ------------------------------------------------------------------ */
/* 小工具                                                              */
/* ------------------------------------------------------------------ */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** 进入视口时轻微上浮淡入；系统开了「减少动态效果」就不动。 */
function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 25 25"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="0.75"
        y1="12.5"
        x2="24.25"
        y2="12.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="12.5" y="0.75" width="11.75" height="11.75" className="mark-accent" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 顶部导航                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${site.brandCn} 首页`}>
          <BrandMark />
          <span className="brand-text">
            <span className="brand-cn">{site.brandCn}</span>
            <span className="brand-en">{site.brandEn}</span>
          </span>
        </a>

        <nav className="nav" aria-label="页面导航">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#join">
            加入我们
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* 首屏                                                                */
/* ------------------------------------------------------------------ */

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
            <a className="btn" href={hero.cta.href}>
              {hero.cta.label}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
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

/* ------------------------------------------------------------------ */
/* 关于 + 组织架构                                                     */
/* ------------------------------------------------------------------ */

function OrgChart() {
  return (
    <div className="org">
      <div className="org-cap">
        <span className="mono">{about.org.caption}</span>
        <span className="mono">{about.org.captionRight}</span>
      </div>

      <div className="org-root">{about.org.root}</div>
      <div className="org-trunk" />
      <div className="org-bar" />

      <div className="org-cols">
        {about.org.centers.map((center) => (
          <div className="org-col" key={center.name}>
            <div className="org-center">{center.name}</div>
            <div className="org-depts">
              {center.depts.map((dept) => (
                <div className="org-dept" key={dept}>
                  {dept}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
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

        <Reveal delay={0.05}>
          <OrgChart />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 部门                                                                */
/* ------------------------------------------------------------------ */

function Departments() {
  return (
    <section className="section" id="departments">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{departments.eyebrow}</p>
          <h2 className="title">{departments.title}</h2>
          <p className="lede">{departments.lede}</p>
        </Reveal>

        {departments.centers.map((center, centerIndex) => (
          <Reveal key={center.name} className="ledger-group" delay={0.04 * centerIndex}>
            <div className="ledger-head">
              <h3>{center.name}</h3>
              <span className="mono">{center.en}</span>
            </div>

            {center.depts.map((dept) => (
              <article className="ledger-row" key={dept.idx}>
                <div className="row-idx">{dept.idx}</div>
                <div className="row-name">
                  <h4>{dept.name}</h4>
                  <div className="row-en">{dept.en}</div>
                </div>
                <div className="row-body">
                  <p className="row-slogan">{dept.slogan}</p>
                  <p>{dept.body}</p>
                </div>
                <div className="row-tags">
                  {dept.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 赛事                                                                */
/* ------------------------------------------------------------------ */

function Events() {
  return (
    <section className="section" id="events">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{events.eyebrow}</p>
          <h2 className="title">{events.title}</h2>
          <p className="lede">{events.lede}</p>
        </Reveal>

        <Reveal className="etable" delay={0.05}>
          <div className="etable-head">
            {events.head.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>

          {events.items.map((item, index) => (
            <div className="etable-row" key={item.name}>
              <span className="no">{String(index + 1).padStart(2, "0")}</span>
              <h3>
                {item.name}
                {item.link ? (
                  <>
                    {" "}
                    <a
                      className="row-link"
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.link.label}
                    </a>
                  </>
                ) : null}
              </h3>
              <span className="host">{item.host}</span>
              <span className="desc">{item.desc}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="extra">
          <span className="mono">{events.brandsTitle}</span>
          {events.brands.map((brand) => (
            <span className="chip" key={brand}>
              {brand}
            </span>
          ))}
        </Reveal>

        <p className="events-note">{events.note}</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 现场                                                                */
/* ------------------------------------------------------------------ */

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="gallery-head">
          <h2 className="title">{gallery.title}</h2>
          <p className="mono">{gallery.note}</p>
        </div>

        <div className="shots-2">
          {gallery.items.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={0.03 * (index % 2)}>
              <figure className="shot" style={{ margin: 0 }}>
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.caption}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption>{item.caption}</figcaption>
                <span className="shot-tag">{item.tag}</span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 加入我们                                                            */
/* ------------------------------------------------------------------ */

function Join() {
  return (
    <section className="section" id="join">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow mono">{join.eyebrow}</p>
          <h2 className="title">{join.title}</h2>
        </Reveal>

        <div className="join-3">
          <Reveal>
            <p className="join-statement">{join.statement}</p>
            <p className="join-copy">{join.copy}</p>
            <div className="join-num">{site.qqGroup}</div>
          </Reveal>

          <Reveal className="join-block" delay={0.06}>
            <span className="mono">{join.accountLabel}</span>
            <h3>{site.officialAccount}</h3>
            <p>{join.accountNote}</p>
          </Reveal>

          <Reveal className="join-block" delay={0.12}>
            <span className="mono">{join.addressLabel}</span>
            <address>
              {join.address}
              <br />
              {join.zip}
            </address>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 页脚                                                                */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#top">
              <BrandMark />
              <span className="brand-text">
                <span className="brand-cn">{site.brandCn}</span>
                <span className="brand-en">{site.brandEn}</span>
              </span>
            </a>
            <p
              style={{
                marginTop: 16,
                fontSize: 13,
                lineHeight: 1.85,
                color: "var(--muted)",
                maxWidth: "30ch",
              }}
            >
              {footer.brief}
            </p>
          </div>

          <div>
            <h4>{footer.pagesTitle}</h4>
            <div className="foot-links">
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="#join">加入我们</a>
              <a href={site.officialUrl} target="_blank" rel="noreferrer">
                学院官网介绍 ↗
              </a>
            </div>
          </div>

          <div>
            <h4>{footer.contactTitle}</h4>
            <div className="foot-links">
              <span>招新 QQ 群：{site.qqGroup}</span>
              <span>公众号：{site.officialAccount}</span>
              <span>{join.address}</span>
              <span>{join.zip}</span>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>{footer.copyright}</span>
          <span className="mono">{footer.code}</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <>
      <a className="skip" href="#about">
        跳到主要内容
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Departments />
        <Events />
        <Gallery />
        <Join />
      </main>
      <Footer />
    </>
  );
}
