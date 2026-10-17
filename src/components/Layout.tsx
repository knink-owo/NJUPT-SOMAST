import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BrandMark } from "./ui";
import { footer, join, joinStrip, nav, site } from "../content";

/** 换页时回到顶部（带锚点的页内跳转不打断） */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}

function scrollToJoin() {
  document.getElementById("join")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="brand" to="/" aria-label={`${site.brandCn} 首页`}>
          <BrandMark />
          <span className="brand-text">
            <span className="brand-cn">{site.brandCn}</span>
            <span className="brand-en">{site.brandEn}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="页面导航">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <button type="button" className="nav-cta" onClick={scrollToJoin}>
            加入我们
          </button>
        </nav>
      </div>
    </header>
  );
}

/** 每个页面底部共用的加入条 */
export function JoinStrip() {
  return (
    <section className="section join-strip" id="join">
      <div className="wrap">
        <div className="join-strip-head">
          <p className="eyebrow mono">{joinStrip.kicker}</p>
          <h2 className="title">{joinStrip.title}</h2>
        </div>

        <div className="join-3">
          <div>
            <p className="join-copy">{join.copy}</p>
            <div className="join-num">{site.qqGroup}</div>
          </div>

          <div className="join-block">
            <span className="mono">{join.accountLabel}</span>
            <h3>{site.officialAccount}</h3>
            <p>{join.accountNote}</p>
          </div>

          <div className="join-block">
            <span className="mono">{join.addressLabel}</span>
            <address>
              {join.address}
              <br />
              {join.zip}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" to="/">
              <BrandMark />
              <span className="brand-text">
                <span className="brand-cn">{site.brandCn}</span>
                <span className="brand-en">{site.brandEn}</span>
              </span>
            </Link>
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
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
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
