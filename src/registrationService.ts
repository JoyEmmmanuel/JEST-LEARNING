export async function registerUser(email: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const normalizedEmail = email.trim().toLowerCase();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
      if (!emailPattern.test(normalizedEmail)) {
        reject(new Error("Invalid email"));
        return;
      }


      resolve(`User ${normalizedEmail} registered successfully`);

    }, 100);
  });
}