import { Link } from "react-router-dom";
import {
  categories,
  currency,
  faqs,
  journalEntries,
  products,
  services,
  testimonials,
} from "../data/storefront";

type HomePageProps = {
  onAddToCart: (id: string) => void;
};

function HomePage({ onAddToCart }: HomePageProps) {
  const featuredProducts = products.slice(0, 4);
  const latestStories = journalEntries.slice(0, 3);

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-content content-wrap">
          <p className="kicker fade-in-up">Spring Summer 2026</p>
          <h1 className="fade-in-up-delay-1">Elegance, refined in shadow.</h1>
          <p className="lead fade-in-up-delay-2">
            A modern maison for tailored essentials, rare fragrances, and restrained design.
          </p>
          <div className="hero-actions fade-in-up-delay-3">
            <Link className="button button-primary" to="/shop">
              Discover Collection
            </Link>
            <Link className="button button-ghost" to="/journal">
              Read the Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>The Selection.</h2>
          <Link to="/shop">View all pieces</Link>
        </div>

        <ul className="showcase-row">
          {featuredProducts.map((item) => (
            <li className="showcase-card" key={item.id}>
              <Link className="image-shell" to={`/product/${item.id}`}>
                <img alt={item.name} loading="lazy" src={item.image} />
              </Link>
              <h3>{item.name}</h3>
              <p>{currency.format(item.price)} USD</p>
              <button
                className="button button-line"
                onClick={() => onAddToCart(item.id)}
                type="button"
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>House Categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <img alt={category.name} loading="lazy" src={category.image} />
              <div>
                <h3>{category.name}</h3>
                <Link to="/shop">Explore</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature">
        <div className="feature-media" aria-hidden="true" />
        <div className="feature-copy">
          <p className="kicker">Exclusivity</p>
          <h2>Tailored for the few.</h2>
          <p>
            Every material is selected for touch, drape, and longevity. We design quietly and
            release intentionally, in small numbered runs.
          </p>
          <div className="hero-actions">
            <Link className="button button-line" to="/journal">
              Enter the journal
            </Link>
            <Link className="button button-ghost" to="/about">
              Discover the maison
            </Link>
          </div>
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Maison Services</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Client Notes</h2>
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

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Latest Journal</h2>
          <Link to="/journal">See all entries</Link>
        </div>
        <div className="journal-grid">
          {latestStories.map((entry) => (
            <article key={entry.slug}>
              <Link to={`/journal/${entry.slug}`}>
                <img alt={entry.title} src={entry.image} />
              </Link>
              <div className="journal-card-body">
                <small>
                  {entry.topic} | {entry.published}
                </small>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <p className="journal-meta">{entry.readTime}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>FAQ</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="newsletter content-wrap">
        <p className="kicker">Private Releases</p>
        <h2>Receive collection previews before public launch.</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="email-input-home">
            Email
          </label>
          <input id="email-input-home" placeholder="Email address" type="email" />
          <button className="button button-primary" type="submit">
            Join list
          </button>
        </form>
      </section>
    </main>
  );
}

export default HomePage;
