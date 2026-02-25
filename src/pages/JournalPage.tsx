import { Link } from "react-router-dom";
import { journalEntries } from "../data/storefront";

function JournalPage() {
  const [leadStory, ...stories] = journalEntries;

  if (!leadStory) {
    return (
      <main className="page-main">
        <section className="page-header content-wrap">
          <p className="kicker">Journal</p>
          <h1>Notes from the Maison</h1>
          <p>Editorial stories are being prepared for release.</p>
          <Link className="button button-primary" to="/shop">
            Return to collection
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-main">
      <section className="page-header content-wrap">
        <p className="kicker">Journal</p>
        <h1>Notes from the Maison</h1>
        <p>Craft, materials, and process documentation from our teams in studio and atelier.</p>
      </section>

      <section className="content-wrap journal-lead">
        <article>
          <img alt={leadStory.title} src={leadStory.image} />
          <div>
            <p className="kicker">
              {leadStory.topic} | {leadStory.published}
            </p>
            <h2>{leadStory.title}</h2>
            <p>{leadStory.body}</p>
            <div className="hero-actions">
              <Link className="button button-line" to={`/journal/${leadStory.slug}`}>
                Read article
              </Link>
              <Link className="button button-ghost" to="/shop">
                Shop related pieces
              </Link>
            </div>
            <p className="journal-meta">{leadStory.readTime}</p>
          </div>
        </article>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Recent Stories</h2>
          <p>Editorial cadence: bi-weekly</p>
        </div>
        <div className="journal-grid">
          {stories.map((entry) => (
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

      <section className="newsletter content-wrap">
        <p className="kicker">Journal Dispatch</p>
        <h2>Receive atelier notes and release commentary every Friday.</h2>
        <form onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="email-input-journal">
            Email
          </label>
          <input id="email-input-journal" placeholder="Email address" type="email" />
          <button className="button button-primary" type="submit">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}

export default JournalPage;
