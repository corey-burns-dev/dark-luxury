import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="page-main">
      <section className="page-header content-wrap">
        <p className="kicker">404</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link className="button button-primary" to="/">
          Go to homepage
        </Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
