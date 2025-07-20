import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import PackagesSection from "./sections/PackagesSection";

import { getFullPackageData } from "@/lib/backend/api";

export const revalidate = 120;
export const metadata = {
  title: "Packages",
};

export default async function Packages() {
  const data = await getFullPackageData();
  return (
    <>
      <Header active='packages' />
      <main>
        <PackagesSection
          packages={data.packages}
          features={data.features}
        />
      </main>
      <Footer />
    </>
  );
}
