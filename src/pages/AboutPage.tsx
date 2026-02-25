import { Link } from "react-router-dom";
import {
  houseMilestones,
  housePrinciples,
  services,
  studioLocations,
  testimonials,
} from "../data/storefront";

function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-header content-wrap">
        <p className="kicker">The Maison</p>
        <h1>Built for clients who value discretion and craft.</h1>
        <p>
          Dark Luxury is a modern house focused on precise tailoring, material integrity, and a
          service model that treats every order as a private commission.
        </p>
      </section>

      <section className="section content-wrap about-grid">
        <article className="about-panel">
          <h2>House Principles</h2>
          <div className="about-stack">
            {housePrinciples.map((principle) => (
              <div key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="about-panel">
          <h2>Service Program</h2>
          <div className="about-stack">
            {services.map((service) => (
              <div key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>House Timeline</h2>
          <p>2021 - 2026</p>
        </div>
        <div className="milestone-grid">
          {houseMilestones.map((item) => (
            <article key={item.year}>
              <small>{item.year}</small>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Studio Locations</h2>
          <p>Appointments recommended</p>
        </div>
        <div className="location-grid">
          {studioLocations.map((location) => (
            <article key={location.city}>
              <h3>{location.city}</h3>
              <p>{location.address}</p>
              <p>{location.hours}</p>
              <p>{location.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Client Perspective</h2>
          <Link to="/journal">Read the journal</Link>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.name}>
              <p>"{item.quote}"</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="newsletter content-wrap">
        <p className="kicker">Appointments</p>
        <h2>Request a private consultation with our studio team.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" to="/shop">
            Shop collection
          </Link>
          <Link className="button button-ghost" to="/journal">
            Explore journal
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
