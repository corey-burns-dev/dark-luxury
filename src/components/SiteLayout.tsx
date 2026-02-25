import { type ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import type { Product } from "../data/storefront";
import { currency } from "../data/storefront";

export type CartLine = {
  product: Product;
  quantity: number;
};

type SiteLayoutProps = {
  children: ReactNode;
  cartCount: number;
  drawerOpen: boolean;
  cartLines: CartLine[];
  subtotal: number;
  onOpenCart: () => void;
  onCloseCart: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

function SiteLayout({
  children,
  cartCount,
  drawerOpen,
  cartLines,
  subtotal,
  onOpenCart,
  onCloseCart,
  onUpdateQuantity,
}: SiteLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile nav when the route changes
    void location.pathname;
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="site-shell">
      <header className="top-nav">
        <Link className="brand" to="/">
          DARK LUXURY.
        </Link>

        <nav className={mobileOpen ? "is-mobile-open" : ""}>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            to="/about"
          >
            Maison
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            to="/journal"
          >
            Journal
          </NavLink>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <button className="cart-trigger" onClick={onOpenCart} type="button">
            Cart ({cartCount})
          </button>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            type="button"
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>Dark Luxury.</h4>
            <p>
              A modern maison for tailored essentials, rare fragrances, and restrained design.
              Founded in 2021.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Collection</Link>
              </li>
              <li>
                <Link to="/journal">Journal</Link>
              </li>
              <li>
                <Link to="/about">Maison</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/about">Private Appointments</Link>
              </li>
              <li>
                <Link to="/about">Tailoring Studio</Link>
              </li>
              <li>
                <Link to="/about">White-Glove Delivery</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Studios</h4>
            <ul>
              <li>
                <Link to="/about">New York, SoHo</Link>
              </li>
              <li>
                <Link to="/about">Paris, Rive Gauche</Link>
              </li>
              <li>
                <Link to="/about">Milan, Brera</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Dark Luxury Holdings. All rights reserved.</span>
          <span>New York &middot; Paris &middot; Milan</span>
        </div>
      </footer>

      <button
        aria-label="Close cart"
        className={`drawer-overlay${drawerOpen ? " is-open" : ""}`}
        onClick={onCloseCart}
        type="button"
      />
      <aside aria-hidden={!drawerOpen} className={`cart-drawer${drawerOpen ? " is-open" : ""}`}>
        <div className="drawer-head">
          <h3>Cart</h3>
          <button onClick={onCloseCart} type="button">
            Close
          </button>
        </div>

        <div className="drawer-body">
          {cartLines.length === 0 ? (
            <p className="empty-state">Your cart is empty.</p>
          ) : (
            cartLines.map((line) => (
              <article key={line.product.id}>
                <div>
                  <h4>{line.product.name}</h4>
                  <p>{currency.format(line.product.price)}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => onUpdateQuantity(line.product.id, line.quantity - 1)}
                    type="button"
                  >
                    &minus;
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(line.product.id, line.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="drawer-foot">
          <div>
            <span>Subtotal</span>
            <strong>{currency.format(subtotal)}</strong>
          </div>
          <button className="button button-primary" type="button">
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default SiteLayout;
