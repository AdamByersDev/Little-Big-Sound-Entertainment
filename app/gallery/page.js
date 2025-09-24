import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import { getImageList } from "@/lib/backend/api";

export const metadata = {
  title: "Gallery",
};

export const revalidate = 120;

export default async function Gallery() {
  const images = (await getImageList()).images;
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
