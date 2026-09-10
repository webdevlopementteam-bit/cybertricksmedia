import {
  Share2, Search, Megaphone, Clapperboard, Radio, Code2, Users, Sparkles,
} from "lucide-react";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const NAV = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about-us",
    type: "dropdown",
    align: "center",
    links: [
      { label: "Careers", href: "/job-openings" },
      { label: "Awards", href: "/awards-recognition" },
      { label: "Gallery", href: "/gallery" },
    ],
  },

  {
    label: "Services",
    href: "/services",
    type: "mega",
    columns: [
      {
        title: "Social Media Marketing",
        href: "/social-media-marketing",
        icon: Share2,
        links: [
          { label: "Facebook Marketing", href: "/facebook-marketing" },
          { label: "Instagram Marketing", href: "/instagram-marketing" },
          { label: "LinkedIn Marketing", href: "/linkedin-marketing" },
          { label: "Theads Marketing", href: "/threads-marketing" },
          { label: "YouTube Marketing", href: "/youtube-marketing" },
          { label: "Content Marketing", href: "/content-marketing" },
          { label: "Twitter Marketing", href: "/twitter-marketing" },
        ],
      },
      {
        title: "Search Engine Marketing",
        href: "/search-engine-marketing",
        icon: Search,
        links: [
          { label: "SEO (Search Engine Optimization)", href: "/search-engine-optimization" },
          { label: "AEO (Answer Engine Optimization)", href: "/artificial-engine-optimization" },
          { label: "GEO (Generative Engine Optimization)", href: "/geographical-engine-optimization" },
          { label: "Google My Business (GMB)", href: "/google-my-business" },
        ],
      },
      {
        title: "Sponsored Ads",
        href: "/sponsored-ads",
        icon: Megaphone,
        links: [
          { label: "Google Adwords", href: "/google-adwords" },
          { label: "Meta Ads", href: "/meta-ad" },
          { label: "YouTube Ads", href: "/youtube-ad" },
          { label: "OTT Advertising", href: "/ott-advertising-service" },
        ],
      },
      {
        title: "Film Production",
        href: "/film-production",
        icon: Clapperboard,
        links: [
          { label: "TV Ads Film Making Service", href: "/tv-ads-film-making-service" },
          { label: "Corporate Film Making Service", href: "/corporate-film-making-service" },
          { label: "Short Film Making Service", href: "/short-film-making-service" },
          { label: "Radio Jingles Making Service", href: "/radio-jingles-making-service" },
          { label: "Chroma Spots Making Service", href: "/chroma-spots-making-service" },
          { label: "AI Videos", href: "/ai-videos" },
          { label: "Tele Shopping Ads Making Service", href: "/tele-shopping-ads-making-service" },
          { label: "Web Series Making Service", href: "/web-series-making-service" },
          { label: "Hindi Feature Film Making Service", href: "/hindi-feature-film-making-service" },
          { label: "Video Song Making Service", href: "/video-song-making-service" },
          { label: "Product Explainer Video Making Service", href: "/product-explainer-video-making-service-etc" },
        ],
      },
      {
        title: "Advertising",
        href: "/advertising",
        icon: Radio,
        links: [
          { label: "Outdoor Advertising", href: "/outdoor-advertising-service" },
          { label: "Indoor Advertising", href: "/indoor-advertising-service" },
          { label: "Cinema Advertising", href: "/cinema-advertising-service" },
          { label: "TV Advertising", href: "/tv-advertising-service" },
          { label: "Radio Advertising", href: "/radio-advertising-service" },
        ],
      },
      {
        title: "Development",
        href: "/development",
        icon: Code2,
        links: [
          { label: "Web Development", href: "/web-development" },
          { label: "Mobile App Development", href: "/mobile-app-development" },
          { label: "UI/UX Design", href: "/ui-ux-design" },
          { label: "CRM Software", href: "/crm-software" },
        ],
      },
      {
        title: "Brand & Influence",
        href: "/brand-influence",
        icon: Users,
        links: [
          { label: "Brand Management", href: "/brand-management" },
          { label: "Celebrity Endorsement", href: "/celebrity-endorsement" },
          { label: "Influencer Marketing", href: "/influencer-marketing" },
          { label: "Affiliate Marketing", href: "/affiliate-marketing" },
        ],
      },
      {
        title: "AI Services",
        href: "/ai-services",
        icon: Sparkles,
        links: [
          { label: "AI & Automation Services", href: "/ai-and-automation-services" },
        ],
      },
      {
        title: "Event & PR",
        href: "/event-and-pr",
        icon: Sparkles,
        links: [
          { label: "Event Management", href: "/event-management" },
          { label: "PR Management", href: "/pr-management" },
          { label: "Award Shows", href: "/award-shows-exhibitions" },
        ],
      },
    ],
  },

  { label: "Solutions", href: "/solutions" },
  

  {
    label: "Insights",
    href: "/blog",
    type: "dropdown",
    align: "right",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Press Release", href: "/press-release" },
      { label: "Success Stories", href: "/success-stories" },
      
    ],
  },
{ label: "How To Pay", href: "/how-to-pay" },
  // { label: "Packages", href: "/packages" },
  { label: "Contact Us", href: "/contact-us" },
];

export const CONTACT = {
  phone: "011-461-20491",
  phoneHref: "tel:011-461-20491",
  email: "info@cybertricksmedia.com",
  emailHref: "mailto:info@cybertricksmedia.com",
};

export const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/CyberTricksMedia/", icon: faFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/cybertricksmedia", icon: faInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cybertricksmediapvtltd/", icon: faLinkedinIn },
  { name: "YouTube", href: "https://www.youtube.com/@Cybertricksmedia", icon: faYoutube },
];