import UnderConstruction from "../components/pages/UnderConstruction";
import Footer from "../components/sharedSections/footer";
import Header from "../components/sharedSections/header";

export const metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <>
      <Header active='gallery' />
      <main>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
}
