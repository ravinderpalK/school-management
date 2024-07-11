import { isUserLoggedIn } from "@/db/queries/users";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export type User =  {
  id: string,
  name: string,
  username: string,
  email_verified_at?: string,
  deleted_at?: string, 
  created_at: string,
  updated_at: string,
}

export type Session =  {
  user : User
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing credentials');
        }
        try {
          const response = await isUserLoggedIn(credentials);
          if (response) {
            return response;
          }
          return null;
        } catch (error: any) {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token } : { session: any, token : any}) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user } : {token: any, user: any} ) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
}