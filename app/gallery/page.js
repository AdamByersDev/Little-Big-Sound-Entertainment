import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";

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
