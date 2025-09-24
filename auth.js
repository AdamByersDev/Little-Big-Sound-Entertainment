export const runtime = 'nodejs';

import NextAuth from "next-auth";
import authConfig from "./auth.config.js";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import Nodemailer from "next-auth/providers/nodemailer";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: {
        host: 'smtp.purelymail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      },
      from: process.env.EMAIL_USER
    }),
  ],
})
