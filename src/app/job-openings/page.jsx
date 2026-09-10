import JobsBanner from "@/app/components/careers/JobsBanner";
import PerksSection from "@/app/components/careers/PerksSection";
import OpeningsSection from "@/app/components/careers/OpeningsSection";
import ApplyForm from "@/app/components/careers/ApplyForm";

export const metadata = {
  title: "Careers | Cybertricks Media Pvt Ltd",
  description:
    "Join a 50-member team building brands across advertising, film production and AI-powered digital marketing. View open roles in Delhi.",
    alternates: {
    canonical: "https://www.cybertricksmedia.com/job-openings",
  },
};

export default function JobOpeningsPage() {
  return (
    <>
      <JobsBanner />
      <PerksSection />
      <OpeningsSection />
      <ApplyForm />
    </>
  );
}