import { addToCart } from '../stores/cartStore';

interface Props {
  productId: string;
  className?: string;
  children?: React.ReactNode;
}

export default function AddToCartButton({ productId, className, children }: Props) {
  return (
    <button
      className={className || "button button-line"}
      onClick={() => addToCart(productId)}
      type="button"
    >
      {children || "Add to cart"}
    </button>
  );
}
