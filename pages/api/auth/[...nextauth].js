import NextAuth from 'next-auth';
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      })
    // Add other providers as needed
  ],
  // Add other configuration options as needed
});
