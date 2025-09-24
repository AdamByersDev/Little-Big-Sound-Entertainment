import NextAuth from "next-auth";
import authConfig from "./auth.config.js";

export const { auth: middleware } = NextAuth(authConfig);
export default middleware;
