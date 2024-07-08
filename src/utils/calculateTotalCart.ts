import { MenuItem } from "../Models/Menu/MenuItem";

export function calculateTotalCart(cart: MenuItem[]): number {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}
