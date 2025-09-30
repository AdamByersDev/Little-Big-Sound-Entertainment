import NextAuth from "next-auth";
import authConfig from "./auth.config.js";

export const { auth: middleware } = NextAuth(authConfig);
export default middleware;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|robots.txt|sitemap.xml|gallery).*)",
  ]
}