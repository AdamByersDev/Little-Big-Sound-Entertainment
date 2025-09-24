import { auth, signIn, signOut } from "@/auth";
import { getAdminList } from "@/lib/backend/api";
import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import { Button } from "@mui/material";
import NotAdmin from "./sections/NotAdmin";

export const metadata = {
  title: "Admin",
};

export default async function Admin() {
  const session = await auth();

  if (!session?.user) return await signIn({ redirectTo: "/admin" });
  
  const admins = (await getAdminList()).admins;
  const adminList = admins.map((admin) => admin.userId);

  const isAdmin = adminList.includes(session.user.id);

  if (!isAdmin) return (
    <NotAdmin />
  );

  return (
    <>
      <main>
        <UnderConstruction />
        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}
        >
          <Button type="submit">Sign Out {session.user.email}</Button>
        </form>
      </main>
    </>
  );
}
