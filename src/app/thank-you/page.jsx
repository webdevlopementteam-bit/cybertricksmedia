import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent"; // ya jo bhi path hai

export const metadata = {
  title: "ThankYou | Cybertricks Media Pvt Ltd",
  alternates: { canonical: "https://www.cybertricksmedia.com/thank-you" },
  robots: { index: true, follow: true },
 
};

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}