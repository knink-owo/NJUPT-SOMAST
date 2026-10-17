import { activitiesPage, events, gallery } from "../content";
import { PageHead, Reveal } from "../components/ui";

function EventTable() {
  return (
    <Reveal className="etable" delay={0.04}>
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
  );
}

function Brands() {
  return (
    <Reveal className="extra">
      <span className="mono">{events.brandsTitle}</span>
      {events.brands.map((brand) => (
        <span className="chip" key={brand}>
          {brand}
        </span>
      ))}
    </Reveal>
  );
}

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="wrap">
        <div className="gallery-head">
          <h2 className="title">{activitiesPage.galleryTitle}</h2>
          <p className="mono">{gallery.note}</p>
        </div>

        <div className="shots">
          {gallery.items.map((item, index) => (
            <Reveal key={`${item.src}-${index}`} delay={0.03 * (index % 3)}>
              <figure className="shot" style={{ margin: 0 }}>
                <img
                  src={`${import.meta.env.BASE_URL}${item.src}`}
                  alt={item.caption}
                  loading={index < 3 ? "eager" : "lazy"}
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

export default function ActivitiesPage() {
  return (
    <>
      <section className="page-intro wrap">
        <PageHead
          kicker={activitiesPage.kicker}
          title={activitiesPage.title}
          lede={activitiesPage.lede}
        />
      </section>

      <section className="section">
        <div className="wrap">
          <EventTable />
          <Brands />
          <p className="events-note">{events.note}</p>
        </div>
      </section>

      <Gallery />
    </>
  );
}
