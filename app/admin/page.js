import UnderConstruction from "../components/pages/UnderConstruction";
import Footer from "../components/sharedSections/footer";
import Header from "../components/sharedSections/header";

export const metadata = {
  title: "Admin",
};

export default function Admin() {
  return (
    <>
      <Header active='admin' />
      <main>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
}
