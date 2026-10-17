import { about, departments, departmentsPage } from "../content";
import { PageHead, Reveal } from "../components/ui";

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

function Governance() {
  return (
    <Reveal className="gov">
      {departmentsPage.gov.map((row) => (
        <div className="gov-row" key={row.role}>
          <span className="gov-num mono">{row.num}</span>
          <h3>{row.role}</h3>
          <p>{row.note}</p>
        </div>
      ))}
    </Reveal>
  );
}

function Ledger() {
  return (
    <>
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
    </>
  );
}

export default function DepartmentsPage() {
  return (
    <>
      <section className="page-intro wrap">
        <PageHead
          kicker={departmentsPage.kicker}
          title={departmentsPage.title}
          lede={departmentsPage.lede}
        />
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono section-label">{departmentsPage.govTitle}</p>
          <Governance />
          <Reveal delay={0.06}>
            <OrgChart />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Ledger />
        </div>
      </section>
    </>
  );
}
