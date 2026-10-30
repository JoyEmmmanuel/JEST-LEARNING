
export type RegistrationApi = {
  createUser: (
    email: string
  ) => Promise<{ id: string; email: string }>;
};

export async function registerWithApi(
  email: string,
  api: RegistrationApi
): Promise<string> {
  const normalizedEmail = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    throw new Error("Invalid email");
  }

  const user = await api.createUser(normalizedEmail);

  return `Registered user ${user.id}: ${user.email}`;
}
