import { registerUser } from "../src/registrationService";

describe("User Registration", () => {

  test("should register a user with a valid email", async () => {

    // Arrange
    const email = "chidera@example.com";

    // Act
    const result = await registerUser(email);

    // Assert
    expect(result).toBe(
      "User chidera@example.com registered successfully"
    );

  });

});

test("should reject registration when email is invalid", async () => {

  // Arrange
  const email = "bad-email";

  // Act + Assert
  await expect(registerUser(email))
    .rejects
    .toThrow("Invalid email");

});
test.each([
  "",
  "bad-email",
  "chidera",
  "chidera@",
  "@example.com"
])("should reject invalid email: %s", async (email) => {

  await expect(registerUser(email))
    .rejects
    .toThrow("Invalid email");

});

test("should remove leading and trailing spaces from email", async () => {

  // Arrange
  const email = "  chidera@example.com  ";

  // Act
  const result = await registerUser(email);

  // Assert
  expect(result).toBe(
    "User chidera@example.com registered successfully"
  );

});

test("should treat email addresses as case-insensitive", async () => {

  // Arrange
  const email = "CHIDERA@EXAMPLE.COM";

  // Act
  const result = await registerUser(email);

  // Assert
  expect(result).toBe(
    "User chidera@example.com registered successfully"
  );

});

