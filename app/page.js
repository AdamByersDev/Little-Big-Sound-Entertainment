import Footer from "./components/sharedSections/footer";
import Header from "./components/sharedSections/header";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PlansSection from "./sections/PlansSection";

export const revalidate = 120;

export default function Home() {
  return (
    <>
      <Header active='home' home />
      <main>
        <HeroSection />
        <PlansSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
