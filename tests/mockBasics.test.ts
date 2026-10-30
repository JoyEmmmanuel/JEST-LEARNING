
describe("Understanding mock functions", () => {
  test("records when a mock function is called", () => {
    const greet = jest.fn();

    greet();

    expect(greet).toHaveBeenCalled();
  });

  test("counts how many times a mock function is called", () => {
    const greet = jest.fn();

    greet();
    greet();
    greet();

    expect(greet).toHaveBeenCalledTimes(3);
  });

  test("returns a value controlled by the test", () => {
    const isEmailVerified = jest.fn().mockReturnValue(true);

    const result = isEmailVerified();

    expect(result).toBe(true);
    expect(isEmailVerified).toHaveBeenCalledTimes(1);
  });

  test("checks a verification email request", () => {
    const sendEmail = jest.fn().mockReturnValue(true);

    const result = sendEmail("chidera@example.com");

    expect(result).toBe(true);
    expect(sendEmail).toHaveBeenCalledTimes(1);
    expect(sendEmail).toHaveBeenCalledWith(
      "chidera@example.com"
    );
  });

  
test("simulates a successful asynchronous response", async () => {
  const getUser = jest.fn().mockResolvedValue({
    id: "user-123",
    email: "chidera@example.com",
  });

  const user = await getUser();

  expect(user.id).toBe("user-123");
  expect(user.email).toBe("chidera@example.com");
  expect(getUser).toHaveBeenCalledTimes(1);
});


test("simulates an asynchronous API failure", async () => {
  const getUser = jest
    .fn()
    .mockRejectedValue(new Error("User not found"));

  await expect(getUser()).rejects.toThrow("User not found");

  expect(getUser).toHaveBeenCalledTimes(1);
});


});
