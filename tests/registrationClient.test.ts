import {
  registerWithApi,
  RegistrationApi,
} from "../src/registrationClient";

describe("registerWithApi", () => {
  test("registers a valid email using the API", async () => {
    const api: RegistrationApi = {
      createUser: jest.fn().mockResolvedValue({
        id: "user-123",
        email: "chidera@example.com",
      }),
    };

    const result = await registerWithApi(
      "chidera@example.com",
      api
    );

    expect(result).toBe(
      "Registered user user-123: chidera@example.com"
    );
    expect(api.createUser).toHaveBeenCalledWith(
      "chidera@example.com"
    );
    expect(api.createUser).toHaveBeenCalledTimes(1);
  });

  test("trims whitespace and normalizes email casing", async () => {
    const api: RegistrationApi = {
      createUser: jest.fn().mockResolvedValue({
        id: "user-123",
        email: "chidera@example.com",
      }),
    };

    const result = await registerWithApi(
      " Chidera@Example.com ",
      api
    );

    expect(result).toBe(
      "Registered user user-123: chidera@example.com"
    );
    expect(api.createUser).toHaveBeenCalledWith(
      "chidera@example.com"
    );
  });

  test.each([
    "",
    "   ",
    "invalid-email",
    "chidera",
    "chidera@",
    "@example.com",
    "chidera@example",
  ])("rejects invalid email input: %s", async (email) => {
    const api: RegistrationApi = {
      createUser: jest.fn().mockResolvedValue({
        id: "user-123",
        email: "chidera@example.com",
      }),
    };

    await expect(
      registerWithApi(email, api)
    ).rejects.toThrow("Invalid email");

    expect(api.createUser).not.toHaveBeenCalled();
  });

  test("propagates an API error when the email already exists", async () => {
    const api: RegistrationApi = {
      createUser: jest
        .fn()
        .mockRejectedValue(new Error("Email already exists")),
    };

    await expect(
      registerWithApi("chidera@example.com", api)
    ).rejects.toThrow("Email already exists");

    expect(api.createUser).toHaveBeenCalledWith(
      "chidera@example.com"
    );
    expect(api.createUser).toHaveBeenCalledTimes(1);
  });

  test("propagates a network error", async () => {
    const api: RegistrationApi = {
      createUser: jest
        .fn()
        .mockRejectedValue(new Error("Network error")),
    };

    await expect(
      registerWithApi("chidera@example.com", api)
    ).rejects.toThrow("Network error");

    expect(api.createUser).toHaveBeenCalledTimes(1);
  });
});