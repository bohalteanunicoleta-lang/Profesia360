import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserByEmail, verifyPassword } from "./users";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Parolă", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await findUserByEmail(credentials.email);
        if (!user) return null;
        const valid = await verifyPassword(user, credentials.password);
        if (!valid) return null;
        return { id: user.id, email: user.email, name: user.name, plan: user.plan };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.plan = (user as { plan?: string }).plan;
      return token;
    },
    async session({ session, token }) {
      if (session.user) (session.user as { plan?: string }).plan = token.plan as string;
      return session;
    },
  },
  pages: { signIn: "/autentificare" },
};
