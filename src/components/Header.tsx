import { useStore } from '@nanostores/react';
import { cartCount, toggleDrawer } from '../stores/cartStore';
import { useState, useEffect } from 'react';

export default function Header() {
  const $cartCount = useStore(cartCount);
  const [mobileOpen, setMobileOpen] = useState(false);

  // In Astro, we can use standard <a> tags or Astro's prefetch.
  // For the active state, we can either pass the current path or check window.location.

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Maison' },
    { href: '/shop', label: 'Shop' },
    { href: '/journal', label: 'Journal' },
  ];

  return (
    <header className="top-nav">
      <a className="brand" href="/">
        DARK LUXURY.
      </a>

      <nav className={mobileOpen ? "is-mobile-open" : ""}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={`nav-link${currentPath === link.href ? " is-active" : ""}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <button className="cart-trigger" onClick={() => toggleDrawer(true)} type="button">
          Cart ({$cartCount})
        </button>
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="mobile-nav-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
