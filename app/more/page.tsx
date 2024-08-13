import { Metadata } from "next";
import StayTuned from "@components/ui/StayTuned";
import Footer from "@components/footer/Footer";


export const metadata: Metadata = {
  title: "More",
};

export default function MorePage() {
  return (
    <>
      <StayTuned src="/stay-tuned.gif" />
      <Footer />
    </>
  );
}
