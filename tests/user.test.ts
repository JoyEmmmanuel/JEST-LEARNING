import { getUser,  getRoles } from "../src/user";
// Test 1 — Object
test('getUser returns correct user object', () => {
  expect(getUser()).toEqual({
    name: 'Chidera',
    role: 'QA Engineer',
    active: true
  });
});

// Test 2 — Boolean
test('user is active', () => {
  expect(getUser().active).toBe(true);
});


test("user role is QA Engineer", () => {
  // Arrange
  const expectedRole = "QA Engineer";

  // Act
  const user = getUser();

  // Assert
  expect(user).toMatchObject({
    role: expectedRole
  });
});

test("QA Engineer is included in roles", () => {
  // Arrange
  const expectedRole = "QA Engineer";

  // Act
  const roles = getRoles();

  // Assert
  expect(roles).toContain(expectedRole);
});

test("user role contains QA", () => {
  // Arrange
  const expectedText = "QA";

  // Act
  const user = getUser();

  // Assert
  expect(user.role).toContain(expectedText);
});