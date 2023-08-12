import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../models/users";
import { connectDB } from "../../../../../utils/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ profile }: any) {
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
  secret: "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MDg3MTE3MiwiaWF0IjoxNjkwODcxMTcyfQ.jgD2fwQVprv16A1JT-6QXQ5U-8tD9rHvSTl3fCJO3l4",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
