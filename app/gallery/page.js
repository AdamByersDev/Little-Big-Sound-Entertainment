import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import { getImageList } from "@/lib/backend/api";
import GallerySection from "./sections/GallerySection";

export const revalidate = 120;
export const metadata = {
  title: "Gallery",
};

export default async function Gallery() {
  const images = (await getImageList()).images;
  return (
    <>
      <Header active='gallery' />
      <main>
        <GallerySection images={images} />
      </main>
      <Footer />
    </>
  );
}
