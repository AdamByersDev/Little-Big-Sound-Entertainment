import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PlansSection from "./sections/PlansSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PlansSection />
        <ContactSection />
      </main>
    </>
  );
}
