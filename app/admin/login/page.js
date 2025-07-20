import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";

export const metadata = {
  title: "Admin Login",
};

export default function Admin() {
  return (
    <>
      <Header active='admin login' />
      <main>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
}
