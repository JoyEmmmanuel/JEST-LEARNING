import { add } from "../src/calculator";

describe("Calculator", () => {
  test("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});