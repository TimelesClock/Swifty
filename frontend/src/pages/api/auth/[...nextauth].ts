import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//Prisma is acting as a middleman between nextJS app and the mongoDB
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        //Note: using "as" keyword to type cast is not recommended
        //as it is overwriting the TS compiler which defeats the purpose of TS
        //but it is used in this case as we know the env is a string
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET
});