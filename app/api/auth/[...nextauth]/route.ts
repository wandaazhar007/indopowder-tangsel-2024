import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        console.log('Sign in:', { user, account, profile, email, credentials });
        return true;
      } catch (error) {
        console.error('Sign in error:', error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect:', { url, baseUrl });
      return baseUrl;
    },
    async session({ session, token, user }) {
      try {
        console.log('Session:', { session, token, user });
        return session;
      } catch (error) {
        console.error('Session error:', error);
        return session;
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      try {
        console.log('JWT:', { token, user, account, profile, isNewUser });
        return token;
      } catch (error) {
        console.error('JWT error:', error);
        return token;
      }
    }
  }
});

export { handler as GET, handler as POST };
