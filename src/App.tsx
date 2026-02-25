import { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import { type Product, products } from "./data/storefront";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import JournalArticlePage from "./pages/JournalArticlePage";
import JournalPage from "./pages/JournalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShopPage from "./pages/ShopPage";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: pathname === "/" ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cartLines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const product = products.find((item) => item.id === id);
          if (!product || quantity <= 0) {
            return null;
          }

          return { product, quantity };
        })
        .filter((line): line is { product: Product; quantity: number } => Boolean(line)),
    [cart],
  );

  const cartCount = useMemo(
    () => cartLines.reduce((total, line) => total + line.quantity, 0),
    [cartLines],
  );

  const subtotal = useMemo(
    () => cartLines.reduce((total, line) => total + line.product.price * line.quantity, 0),
    [cartLines],
  );

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (pathname) {
      setDrawerOpen(false);
    }
  }, [pathname]);

  const addToCart = (id: string) => {
    setCart((previous) => ({
      ...previous,
      [id]: (previous[id] ?? 0) + 1,
    }));
    setDrawerOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((previous) => {
      const next = { ...previous };

      if (quantity <= 0) {
        delete next[id];
      } else {
        next[id] = quantity;
      }

      return next;
    });
  };

  return (
    <>
      <ScrollToTopOnRouteChange />
      <SiteLayout
        cartCount={cartCount}
        cartLines={cartLines}
        drawerOpen={drawerOpen}
        onCloseCart={() => setDrawerOpen(false)}
        onOpenCart={() => setDrawerOpen(true)}
        onUpdateQuantity={updateQuantity}
        subtotal={subtotal}
      >
        <Routes>
          <Route element={<HomePage onAddToCart={addToCart} />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ShopPage onAddToCart={addToCart} />} path="/shop" />
          <Route
            element={<ProductDetailPage onAddToCart={addToCart} />}
            path="/product/:productId"
          />
          <Route element={<JournalPage />} path="/journal" />
          <Route element={<JournalArticlePage />} path="/journal/:slug" />
          <Route element={<NotFoundPage />} path="*" />
        </Routes>
      </SiteLayout>
    </>
  );
}

export default App;
