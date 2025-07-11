import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PlansSection from "./sections/PlansSection";

import { getPackages } from "@/lib/backend/api";

export const revalidate = 120;

export default async function Home() {
  const data = await getPackages();
  return (
    <>
      <Header active='home' home />
      <main>
        <HeroSection />
        <PlansSection plans={data.plans}/>
        <ContactSection plans={data.plans}/>
      </main>
      <Footer />
    </>
  );
}
