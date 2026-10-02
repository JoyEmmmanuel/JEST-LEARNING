import { multiply, divide } from "../src/math";

describe("Calculation", () => {
  test("should multiply two numbers correctly", () => {
    // Arrange
    const num1 = 8;
    const num2 = 3;

    // Act
    const result = multiply(num1, num2);

    // Assert
    expect(result).toBe(24);
  });

  test("should divide two numbers correctly", () => {
    // Arrange
    const num1 = 8;
    const num2 = 2;

    // Act
    const result = divide(num1, num2);

    // Assert
    expect(result).toBe(4);
  });
});