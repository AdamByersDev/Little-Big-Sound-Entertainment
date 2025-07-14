import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PackagesSection from "./sections/PackagesSection";

import { getPackages } from "@/lib/backend/api";

export const revalidate = 120;

export default async function Home({ searchParams }) {
  const data = await getPackages();
  return (
    <>
      <Header active='home' home />
      <main>
        <HeroSection />
        <PackagesSection
          packages={data.packages}
        />
        <ContactSection 
          packages={data.packages}
          searchParams={await searchParams}
        />
      </main>
      <Footer />
    </>
  );
}
