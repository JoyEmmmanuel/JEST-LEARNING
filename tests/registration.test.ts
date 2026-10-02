import { canRegister } from "../src/registration";

describe('canRegister', () => {
  
  test('allows a 25-year-old', () => {
    expect(canRegister(25)).toBe(true);
  });

 
  test('allows an 18-year-old', () => {
    expect(canRegister(18)).toBe(true);
  });

 
  test('rejects a 17-year-old', () => {
    expect(canRegister(17)).toBe(false);
  });


  test('rejects a 0-year-old', () => {
    expect(canRegister(0)).toBe(false);
  });


  test('rejects a negative age', () => {
    expect(canRegister(-1)).toBe(false);
  });

  test("should not allow a 17-year-old to register", () => {
    // Arrange
    const age = 17;

    // Act
    const result = canRegister(age);

    // Assert
    expect(result).toBe(false);
  });
});