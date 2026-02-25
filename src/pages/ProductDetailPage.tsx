import { Link, useParams } from "react-router-dom";
import { currency, findProductById, products } from "../data/storefront";

type ProductDetailPageProps = {
  onAddToCart: (id: string) => void;
};

function ProductDetailPage({ onAddToCart }: ProductDetailPageProps) {
  const { productId } = useParams();
  const product = productId ? findProductById(productId) : null;

  if (!product) {
    return (
      <main className="page-main">
        <section className="page-header content-wrap">
          <p className="kicker">Not Found</p>
          <h1>Product unavailable</h1>
          <p>The selected item could not be found.</p>
          <Link className="button button-primary" to="/shop">
            Return to shop
          </Link>
        </section>
      </main>
    );
  }

  const recommendations = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="page-main">
      <section className="content-wrap product-detail">
        <div className="product-crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <strong>{product.name}</strong>
        </div>

        <div className="product-layout">
          <div className="product-gallery">
            <div className="image-shell">
              {product.badge ? <span className="product-badge">{product.badge}</span> : null}
              <img alt={product.name} src={product.image} />
            </div>
          </div>

          <div className="product-copy">
            <p className="kicker">{product.category}</p>
            <h1>{product.name}</h1>
            <strong>{currency.format(product.price)}</strong>
            <p>{product.description}</p>
            <ul>
              <li>Complimentary tailoring consultation included</li>
              <li>Insured delivery with signature required</li>
              <li>14-day returns on unworn items</li>
            </ul>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => onAddToCart(product.id)}
                type="button"
              >
                Add to cart
              </button>
              <Link className="button button-ghost" to="/shop">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section content-wrap">
        <div className="section-head">
          <h2>Recommended</h2>
          <Link to="/shop">View collection</Link>
        </div>

        <div className="product-grid grid-3">
          {recommendations.map((item) => (
            <article className="product-card" key={item.id}>
              <Link className="image-shell" to={`/product/${item.id}`}>
                {item.badge ? <span className="product-badge">{item.badge}</span> : null}
                <img alt={item.name} loading="lazy" src={item.image} />
              </Link>
              <div className="product-meta">
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.category} | {item.note}
                  </p>
                </div>
                <div className="price-row">
                  <strong>{currency.format(item.price)}</strong>
                  <button
                    className="button button-line"
                    onClick={() => onAddToCart(item.id)}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
