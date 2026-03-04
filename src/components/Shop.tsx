import { useMemo, useState } from "react";
import { currency, type Product } from "../data/storefront";
import { addToCart } from "../stores/cartStore";

type SortMode = "featured" | "price-asc" | "price-desc" | "name-asc";

interface Props {
  initialProducts: Product[];
}

export default function Shop({ initialProducts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const filterCategories = useMemo(
    () => ["All", ...new Set(initialProducts.map((product) => product.category))],
    [initialProducts],
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const visibleProducts = initialProducts.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        `${product.name} ${product.category} ${product.note}`
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    if (sortMode === "price-asc") {
      return [...visibleProducts].sort((a, b) => a.price - b.price);
    }

    if (sortMode === "price-desc") {
      return [...visibleProducts].sort((a, b) => b.price - a.price);
    }

    if (sortMode === "name-asc") {
      return [...visibleProducts].sort((a, b) => a.name.localeCompare(b.name));
    }

    return visibleProducts;
  }, [activeCategory, searchTerm, sortMode, initialProducts]);

  return (
    <>
      <section className="content-wrap shop-tools">
        <div className="filter-row">
          {filterCategories.map((category) => (
            <button
              className={`filter-pill${activeCategory === category ? " is-active" : ""}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-controls">
          <label className="sr-only" htmlFor="shop-search-input">
            Search pieces
          </label>
          <input
            id="shop-search-input"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search pieces"
            type="search"
            value={searchTerm}
          />

          <label className="sr-only" htmlFor="shop-sort-select">
            Sort products
          </label>
          <select
            id="shop-sort-select"
            onChange={(event) => setSortMode(event.target.value as SortMode)}
            value={sortMode}
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to high</option>
            <option value="price-desc">Price: High to low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </div>

        <p>{filteredProducts.length} pieces in stock</p>
      </section>

      <section className="section content-wrap shop-section">
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <article className="product-card" key={item.id}>
              <a className="image-shell" href={`/product/${item.id}`}>
                {item.badge ? <span className="product-badge">{item.badge}</span> : null}
                <img alt={item.name} loading="lazy" src={item.image} />
              </a>
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
                    onClick={() => addToCart(item.id)}
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
    </>
  );
}
