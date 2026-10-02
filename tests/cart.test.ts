import { addToCart, Product, CartItem } from "../src/cart";

describe("Shopping Cart", () => {

  test("customer can add a product to an empty cart", () => {

    // Arrange
 const cart: CartItem[] = [];

    const product: Product = {
      id: 1,
      name: "Laptop",
      price: 500000
    };

    // Act
    const updatedCart = addToCart(cart, product);

    // Assert
    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0]).toMatchObject({
      id: 1,
      name: "Laptop",
      price: 500000,
      quantity: 1
    });

  });

});