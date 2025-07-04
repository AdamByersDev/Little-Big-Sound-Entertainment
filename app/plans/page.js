import UnderConstruction from "../components/pages/UnderConstruction";
import Header from "../components/sharedSections/header";

export const metadata = {
  title: "Plans",
};

export default function Plans() {
  return (
    <>
      <Header active='plans' home />
      <main>
        <UnderConstruction />
      </main>
    </>
  );
}
