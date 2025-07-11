import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";

export const metadata = {
  title: "Plans",
};

export default function Plans() {
  return (
    <>
      <Header active='plans' />
      <main>
        <UnderConstruction />
      </main>
      <Footer />
    </>
  );
}
