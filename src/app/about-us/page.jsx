import AboutBanner from "@/app/components/about/AboutBanner";
import AboutStory from "@/app/components/about/AboutStory";
import VisionMission from "@/app/components/about/VisionMission";
import ManagementSection from "@/app/components/about/ManagementSection";
import TeamSection from "@/app/components/about/TeamSection";

export const metadata = {
  title: "About Us | Cybertricks Media Pvt Ltd",
  description:
    "A creative powerhouse in advertising, film production, branding and AI-powered digital marketing. Trusted by 3800+ brands across India.",
     alternates: {
    canonical: "https://www.cybertricksmedia.com/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutStory />
      <VisionMission />
      <ManagementSection />
      <TeamSection />
    </>
  );
}