import bcrypt from "bcryptjs";

export interface User {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  plan: "free" | "preview" | "pro" | "premium" | "domeniu-pass" | "domeniu-pro";
}

// In-memory store — resets on server restart. Replace with a real DB for production.
const users: User[] = [];

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const existing = users.find((u) => u.email === email);
  if (existing) throw new Error("Email deja înregistrat.");
  const passwordHash = await bcrypt.hash(password, 10);
  const user: User = { id: Date.now().toString(), email, name, passwordHash, plan: "free" };
  users.push(user);
  return user;
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  return users.find((u) => u.email === email);
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
  return bcrypt.compare(password, user.passwordHash);
}
