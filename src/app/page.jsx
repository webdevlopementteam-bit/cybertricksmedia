import HeroBanner from "@/app/components/sections/HeroBanner";
import AboutSection from "@/app/components/sections/AboutSection";
import ScorecardSection from "@/app/components/sections/ScorecardSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import OfferGameSection from "@/app/components/sections/OfferGameSection";
import WhyChooseSection from "@/app/components/sections/WhyChooseSection";
import BrandsSection from "@/app/components/sections/BrandsSection";
import PortfolioSection from "@/app/components/sections/PortfolioSection";
import AwardsSection from "@/app/components/sections/AwardsSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import RecognitionSection from "./components/sections/RecognitionSection";
import TechStackSection from "./components/sections/TechStackSection";
import AwardPopup from "./components/AwardPopup";

export default function Home() {
  return (
    <>
    <AwardPopup/>
      <HeroBanner />
      <AboutSection />
      <ScorecardSection />
      <ServicesSection />
      <WhyChooseSection />
      <TechStackSection/>
      <OfferGameSection />
      <RecognitionSection/>
      <BrandsSection />
      <PortfolioSection />
      <AwardsSection />
      <TestimonialsSection />

    </>
  );
}