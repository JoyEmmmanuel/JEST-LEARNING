export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export function addToCart(
  cart: CartItem[],
  product: Product
): CartItem[] {
  return [...cart, { ...product, quantity: 1 }];
}