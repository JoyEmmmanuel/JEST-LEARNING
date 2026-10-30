
import { sendVerificationEmail } from "../src/emailService";

describe("Email Service", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should return true when processing a verification email", () => {
    const result = sendVerificationEmail("chidera@example.com");

    expect(result).toBe(true);
  });

  test("should log the intended recipient", () => {
    const consoleSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    sendVerificationEmail("chidera@example.com");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Sending verification email to chidera@example.com"
    );
  });
});
