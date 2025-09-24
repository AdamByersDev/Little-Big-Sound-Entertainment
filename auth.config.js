/** @type {import("next-auth").NextAuthConfig} */
const authConfig = {
  // IMPORTANT: empty array so middleware doesn't crash
  providers: [],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  trustHost: true,
  // callbacks/pages/etc. that are Edge-safe can go here
};

export default authConfig;
