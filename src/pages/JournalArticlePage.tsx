import { Link, useParams } from "react-router-dom";
import { findJournalBySlug, journalEntries } from "../data/storefront";

function JournalArticlePage() {
  const { slug } = useParams();
  const article = slug ? findJournalBySlug(slug) : null;

  if (!article) {
    return (
      <main className="page-main">
        <section className="page-header content-wrap">
          <p className="kicker">Journal</p>
          <h1>Article unavailable</h1>
          <p>The selected story could not be found.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/journal">
              Return to journal
            </Link>
            <Link className="button button-ghost" to="/shop">
              Browse collection
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const relatedArticles = journalEntries.filter((entry) => entry.slug !== article.slug).slice(0, 3);

  return (
    <main className="page-main">
      <section className="content-wrap article-header">
        <div className="product-crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/journal">Journal</Link>
          <span>/</span>
          <strong>{article.title}</strong>
        </div>
        <p className="kicker">
          {article.topic} | {article.published}
        </p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
      </section>

      <section className="content-wrap article-layout">
        <article className="article-copy">
          <img alt={article.title} src={article.image} />
          <p>{article.body}</p>
          <p>
            We document each release through a strict review cycle: materials audit, wear testing,
            and post-delivery feedback. This operating rhythm keeps the collection coherent while
            improving fit, performance, and durability over time.
          </p>
          <p>
            If you would like product recommendations related to this article, our concierge team
            can assemble a shortlist tailored to your wardrobe, travel profile, and seasonal use.
          </p>
          <p className="journal-meta">{article.readTime}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/shop">
              Shop related pieces
            </Link>
            <Link className="button button-ghost" to="/journal">
              Back to journal
            </Link>
          </div>
        </article>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>More from the Journal</h2>
          <Link to="/journal">All stories</Link>
        </div>

        <div className="journal-grid">
          {relatedArticles.map((entry) => (
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
                <Link className="button button-line" to={`/journal/${entry.slug}`}>
                  Continue reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default JournalArticlePage;
