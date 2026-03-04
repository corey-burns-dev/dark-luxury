import { useStore } from '@nanostores/react';
import { cartLines, subtotal, drawerOpen, toggleDrawer, updateQuantity } from '../stores/cartStore';
import { currency } from '../data/storefront';
import { useEffect } from 'react';

export default function CartDrawer() {
  const $cartLines = useStore(cartLines);
  const $subtotal = useStore(subtotal);
  const $drawerOpen = useStore(drawerOpen);

  useEffect(() => {
    document.body.style.overflow = $drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [$drawerOpen]);

  return (
    <>
      <button
        aria-label="Close cart"
        className={`drawer-overlay${$drawerOpen ? " is-open" : ""}`}
        onClick={() => toggleDrawer(false)}
        type="button"
      />
      <aside aria-hidden={!$drawerOpen} className={`cart-drawer${$drawerOpen ? " is-open" : ""}`}>
        <div className="drawer-head">
          <h3>Cart</h3>
          <button onClick={() => toggleDrawer(false)} type="button">
            Close
          </button>
        </div>

        <div className="drawer-body">
          {$cartLines.length === 0 ? (
            <p className="empty-state">Your cart is empty.</p>
          ) : (
            $cartLines.map((line) => (
              <article key={line.product.id}>
                <div>
                  <h4>{line.product.name}</h4>
                  <p>{currency.format(line.product.price)}</p>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                    type="button"
                  >
                    −
                  </button>
                  <span>{line.quantity}</span>
                  <button
                    onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
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
            <strong>{currency.format($subtotal)}</strong>
          </div>
          <button className="button button-primary" type="button">
            Continue to checkout
          </button>
        </div>
      </aside>
    </>
  );
}
