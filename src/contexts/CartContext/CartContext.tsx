import { createContext, useState, ReactNode, useEffect } from "react";
import { MenuItem } from "../../Models/Menu/MenuItem";

type CartContextType = {
  cart: MenuItem[];
  addToCart: (product: MenuItem) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<MenuItem[]>(() => {
    const storedCart = localStorage.getItem("SHOP-CART:cart-1.0.0");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("SHOP-CART:cart-1.0.0", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: MenuItem) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: product?.quantity } : item));
      } else {
        return [...prevCart, product];
      }
    });
  }

  function removeFromCart(productId: number) {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}
