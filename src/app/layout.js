import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SmoothScroll from "@/app/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata = {
  title: "Cybertricks Media | Best Digital Marketing Company in India",
  description:
    "Award-winning advertising, film production and AI-powered digital marketing company in India. Trusted by 3800+ brands.",
    icons:{
      icon:"/fav.png"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body style={{ fontFamily: "var(--font-inter)" }}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}