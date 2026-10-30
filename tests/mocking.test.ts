
describe("Jest mock functions", () => {
  test("records the arguments passed to a function", () => {
    const sendEmail = jest.fn();

    sendEmail("chidera@example.com");

    expect(sendEmail).toHaveBeenCalledWith(
      "chidera@example.com"
    );
  });

  test("records how many times a function was called", () => {
    const sendEmail = jest.fn();

    sendEmail("first@example.com");
    sendEmail("second@example.com");

    expect(sendEmail).toHaveBeenCalledTimes(2);
  });

  test("can return a controlled value", () => {
    const checkEmail = jest.fn().mockReturnValue(true);

    const result = checkEmail("chidera@example.com");

    expect(result).toBe(true);
    expect(checkEmail).toHaveBeenCalledWith(
      "chidera@example.com"
    );
  });
});
