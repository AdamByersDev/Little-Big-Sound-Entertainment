import UnderConstruction from "@/lib/components/pages/UnderConstruction";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import PlansSection from "./sections/PlansSection";

import { getFullPackageData } from "@/lib/backend/api";

export const revalidate = 120;
export const metadata = {
  title: "Packages",
};

export default async function Plans() {
  const data = await getFullPackageData();
  return (
    <>
      <Header active='plans' />
      <main>
        <PlansSection plans={data.plans} features={data.features}/>
      </main>
      <Footer />
    </>
  );
}
