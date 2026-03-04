import { atom, computed } from 'nanostores';
import { products, type Product } from '../data/storefront';

export type CartItem = {
  product: Product;
  quantity: number;
};

export const cart = atom<Record<string, number>>({});
export const drawerOpen = atom(false);

export const cartLines = computed(cart, (currentCart) => {
  return Object.entries(currentCart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      if (!product || quantity <= 0) {
        return null;
      }
      return { product, quantity } as CartItem;
    })
    .filter((line): line is CartItem => line !== null);
});

export const cartCount = computed(cartLines, (lines) => {
  return lines.reduce((total, line) => total + line.quantity, 0);
});

export const subtotal = computed(cartLines, (lines) => {
  return lines.reduce((total, line) => total + line.product.price * line.quantity, 0);
});

export function addToCart(id: string) {
  const current = cart.get();
  cart.set({
    ...current,
    [id]: (current[id] ?? 0) + 1,
  });
  drawerOpen.set(true);
}

export function updateQuantity(id: string, quantity: number) {
  const current = { ...cart.get() };
  if (quantity <= 0) {
    delete current[id];
  } else {
    current[id] = quantity;
  }
  cart.set(current);
}

export function toggleDrawer(open?: boolean) {
  if (typeof open === 'boolean') {
    drawerOpen.set(open);
  } else {
    drawerOpen.set(!drawerOpen.get());
  }
}
