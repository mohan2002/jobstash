import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../models/users";
import secrets from "../../../../../secrets.json";
import { connectDB } from "../../../../../utils/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: secrets.web.client_id,
      clientSecret: secrets.web.client_secret,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      return session;
    },
    async signIn({ profile }: any) {
      console.log(profile);
      try {
        await connectDB();
        const UserExist = await User.findOne({ email: profile.email });
        if (!UserExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.given_name,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  secret:
    "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MDg3MTE3MiwiaWF0IjoxNjkwODcxMTcyfQ.jgD2fwQVprv16A1JT-6QXQ5U-8tD9rHvSTl3fCJO3l4",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
