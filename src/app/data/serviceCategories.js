export const CATEGORIES = {
  /* ============================================================ */
  "social-media-marketing": {
    slug: "social-media-marketing",
    eyebrow: "Social Media Marketing",
    title: "Where Your Audience",
    titleAccent: "Already Lives.",
    intro:
      "Seven platforms, one strategy. We handle the calendar, the creatives, the community and the reporting — so your brand shows up consistently instead of whenever someone remembers to post.",
    banner: "/social-banners.png",
    gradient: "from-brand-600 to-plum-600",
    stats: [
      { v: "7", l: "Platforms Managed" },
      { v: "1,200+", l: "Brands Handled" },
      { v: "4.2x", l: "Avg. Engagement Lift" },
    ],
    values: [
      { icon: "PenTool", t: "Content That Fits", d: "Every platform gets its own format, not one post resized five ways." },
      { icon: "BarChart3", t: "Reported Monthly", d: "Reach, engagement, follower quality and what we're changing next month." },
      { icon: "Zap", t: "Always-On Team", d: "Comments, DMs and community handled daily — not once a week." },
    ],
    subs: [
      {
        name: "Facebook Marketing", fa: "facebook", href: "/facebook-marketing",
        desc: "Page management, community building and Facebook-native content designed for the audience that still spends the most time there.",
        tags: ["Page Management", "Community", "Groups"]
      },
      {
        name: "Instagram Marketing", fa: "instagram", href: "/instagram-marketing",
        desc: "Reels, carousels, stories and a grid that actually looks like a brand — plus the community management behind it.",
        tags: ["Reels & Stories", "Grid Design", "Collabs"]
      },
      {
        name: "LinkedIn Marketing", fa: "linkedin", href: "/linkedin-marketing",
        desc: "Company page and founder profile content that builds B2B credibility and starts real conversations with decision-makers.",
        tags: ["Company Page", "Founder Brand", "B2B Reach"]
      },
      {
        name: "Threads Marketing", fa: "threads", href: "/threads-marketing",
        desc: "Early-mover presence on Threads with conversational content built for how the platform actually behaves.",
        tags: ["Text-First", "Conversations", "Early Reach"]
      },
      {
        name: "YouTube Marketing", fa: "youtube", href: "/youtube-marketing",
        desc: "Channel strategy, thumbnails, SEO-optimised titles and shorts that turn viewers into subscribers into customers.",
        tags: ["Channel SEO", "Shorts", "Thumbnails"]
      },
      {
        name: "Content Marketing", icon: "PenTool", href: "/content-marketing",
        desc: "Blogs, scripts, captions and campaign copy written by people who research your industry before writing a word.",
        tags: ["Blogs", "Scripts", "Copywriting"]
      },
      {
        name: "Twitter (X) Marketing", fa: "x", href: "/twitter-marketing",
        desc: "Real-time brand presence, trend participation and the kind of posting cadence X actually rewards.",
        tags: ["Trend Jacking", "Threads", "Engagement"]
      },
    ],
  },

  /* ============================================================ */
  "search-engine-marketing": {
    slug: "search-engine-marketing",
    eyebrow: "Search Engine Marketing",
    title: "Be the Answer,",
    titleAccent: "Not an Option.",
    intro:
      "Traditional SEO plus AEO and GEO — so you rank on Google today and get quoted by AI assistants tomorrow. Built for how people actually search now, not how they searched in 2018.",
    banner: "/seo-banners.png",
    gradient: "from-aqua-500 to-brand-600",
    stats: [
      { v: "16L+", l: "Leads Generated" },
      { v: "Page 1", l: "Avg. Target Rank" },
      { v: "3–6 mo", l: "Typical Results Window" },
    ],
    values: [
      { icon: "Target", t: "Intent First", d: "We chase keywords that buy, not keywords that look impressive in a report." },
      { icon: "ShieldCheck", t: "White-Hat Only", d: "No PBNs, no shortcuts. Rankings that survive the next algorithm update." },
      { icon: "BarChart3", t: "Full Transparency", d: "Live dashboards for rankings, traffic and conversions — always open to you." },
    ],
    subs: [
      {
        name: "Search Engine Optimization (SEO)", icon: "Search", href: "/search-engine-optimization",
        desc: "On-page, off-page and technical SEO that moves you up the results page and keeps you there.",
        tags: ["Technical SEO", "Link Building", "Content"]
      },
      {
        name: "Answer Engine Optimization (AEO)", icon: "Sparkles", href: "/artificial-engine-optimization",
        desc: "Structured content and schema built so ChatGPT, Perplexity and Google AI Overviews cite your brand as the source.",
        tags: ["Schema Markup", "AI Citations", "FAQ Content"]
      },
      {
        name: "Generative Engine Optimization (GEO)", icon: "MapPin", href: "/geographical-engine-optimization",
        desc: "Location-led visibility so the right city, the right neighbourhood and the right buyer finds you first.",
        tags: ["Local Pages", "Geo Targeting", "Citations"]
      },
      {
        name: "Google My Business (GMB)", icon: "Store", href: "/google-my-business",
        desc: "Optimised profile, review management and local pack visibility that drives walk-ins and calls.",
        tags: ["Local Pack", "Reviews", "Posts"]
      },
    ],
  },

  /* ============================================================ */
  "sponsored-ads": {
    slug: "sponsored-ads",
    eyebrow: "Sponsored Ads",
    title: "Instant Traffic,",
    titleAccent: "Tracked to the Rupee.",
    intro:
      "Google, Meta, YouTube and OTT campaigns where every rupee is tied to a click, a lead or a sale. If a campaign isn't returning, we say so and change it — we don't hide it in a report.",
    banner: "/sponsor-banners.png",
    gradient: "from-plum-600 to-accent-500",
    stats: [
      { v: "₹40Cr+", l: "Ad Spend Managed" },
      { v: "4 Platforms", l: "Google, Meta, YT, OTT" },
      { v: "Weekly", l: "Optimisation Cycles" },
    ],
    values: [
      { icon: "Target", t: "ROAS, Not Reach", d: "Success is measured in return on ad spend, not impressions delivered." },
      { icon: "Zap", t: "Fast Iteration", d: "Creatives and audiences tested weekly, winners scaled, losers killed." },
      { icon: "ShieldCheck", t: "Your Ad Account", d: "Campaigns run inside your account. You own the data and the history." },
    ],
    subs: [
      {
        name: "Google Adwords", fa: "google", href: "/google-adwords",
        desc: "Search, display, shopping and performance max campaigns built around buying intent, not just traffic volume.",
        tags: ["Search Ads", "Shopping", "PMax"]
      },
      {
        name: "Meta Ads", fa: "meta", href: "/meta-ad",
        desc: "Facebook and Instagram campaigns with creative testing frameworks and audiences that get sharper every week.",
        tags: ["Lead Gen", "Retargeting", "Catalog Ads"]
      },
      {
        name: "YouTube Ads", fa: "youtube", href: "/youtube-ad",
        desc: "Skippable, bumper and in-feed video ads — scripted, shot and run by the same team, start to finish.",
        tags: ["In-Stream", "Bumper", "In-Feed"]
      },
      {
        name: "OTT Advertising", icon: "MonitorPlay", href: "/ott-advertising-service",
        desc: "Premium placements across streaming platforms where your audience watches without an ad blocker in sight.",
        tags: ["Streaming", "CTV", "Premium Inventory"]
      },
    ],
  },

  /* ============================================================ */
  "film-production": {
    slug: "film-production",
    eyebrow: "Film Production",
    title: "Every Brand",
    titleAccent: "Has a Story.",
    intro:
      "An in-house production house — writers, directors, DOPs, editors and sound engineers under one roof. From a 15-second bumper to a feature film, nothing gets outsourced.",
    banner: "/film-banners.png",
    gradient: "from-accent-500 to-plum-600",
    stats: [
      { v: "11", l: "Production Formats" },
      { v: "In-House", l: "Full Crew & Kit" },
      { v: "Award", l: "Winning Team" },
    ],
    values: [
      { icon: "Clapperboard", t: "One Roof, One Bill", d: "Script to final cut — no coordinating between three vendors." },
      { icon: "Star", t: "Cinema-Grade Craft", d: "Proper lighting, sound design and colour, not a phone on a tripod." },
      { icon: "Zap", t: "On-Time Delivery", d: "Shoot dates and delivery dates are commitments, not estimates." },
    ],
    subs: [
      {
        name: "TV Ads Film Making", icon: "Tv", href: "/tv-ads-film-making-service",
        desc: "Broadcast-ready commercials with the polish national television demands — concept to censor certificate.",
        tags: ["TVC", "Broadcast Ready", "Full Crew"]
      },
      {
        name: "Corporate Film Making", icon: "Building2", href: "/corporate-film-making-service",
        desc: "Company profiles, factory walkthroughs and investor films that make your business look as serious as it is.",
        tags: ["Company Profile", "Factory Tour", "Investor Film"]
      },
      {
        name: "Short Film Making", icon: "Film", href: "/short-film-making-service",
        desc: "Narrative shorts for brand storytelling, festivals or campaigns that need emotion over information.",
        tags: ["Narrative", "Festival", "Brand Story"]
      },
      {
        name: "Radio Jingles Making", icon: "Music", href: "/radio-jingles-making-service",
        desc: "Original jingles written, composed and recorded — the kind people hum after hearing once.",
        tags: ["Composition", "Voice Over", "Mixing"]
      },
      {
        name: "Chroma Spots Making", icon: "Clapperboard", href: "/croma-spots-making-service",
        desc: "Green-screen spots with custom backgrounds and graphics — fast to produce, easy to localise.",
        tags: ["Green Screen", "VFX", "Quick Turnaround"]
      },
      {
        name: "AI Videos", icon: "Sparkles", href: "/ai-videos",
        desc: "AI-generated presenters, voice-overs and visuals for brands that need volume without a full shoot budget.",
        tags: ["AI Avatars", "Voice Clone", "Fast Scale"]
      },
      {
        name: "Tele Shopping Ads", icon: "ShoppingBag", href: "/tele-shopping-ads-making-service",
        desc: "Long-format direct-response films engineered to make the phone ring while the ad is still playing.",
        tags: ["Direct Response", "Long Format", "DRTV"]
      },
      {
        name: "Web Series Making", icon: "MonitorPlay", href: "/web-series-making-service",
        desc: "Episodic content for YouTube and OTT — writing room, production and post handled end to end.",
        tags: ["Episodic", "OTT Ready", "Writing Room"]
      },
      {
        name: "Hindi Feature Film Making", icon: "Projector", href: "/hindi-feature-film-making-service",
        desc: "Full-length feature production with line producing, casting, shoot management and post supervision.",
        tags: ["Feature Length", "Line Production", "Post"]
      },
      {
        name: "Video Song Making", icon: "Music", href: "/video-song-making-service",
        desc: "Music videos with choreography, locations and the production value the track deserves.",
        tags: ["Music Video", "Choreography", "Locations"]
      },
      {
        name: "Product Explainer Videos", icon: "Video", href: "/product-explainer-video-making-service-etc",
        desc: "Short, sharp films that explain what your product does and why it matters — in under ninety seconds.",
        tags: ["Explainer", "Demo", "Animation"]
      },
    ],
  },

  /* ============================================================ */
  advertising: {
    slug: "advertising",
    eyebrow: "Advertising",
    title: "Own Every Screen",
    titleAccent: "and Street.",
    intro:
      "Hoardings, cinema screens, television and radio — offline advertising planned, negotiated and executed across India, with verified reach reports and photographic proof of every site.",
    banner: "/advertising-banners.png",
    gradient: "from-brand-600 to-aqua-500",
    stats: [
      { v: "PAN India", l: "Media Coverage" },
      { v: "5 Channels", l: "Offline Formats" },
      { v: "Verified", l: "Proof of Display" },
    ],
    values: [
      { icon: "Signpost", t: "Direct Rates", d: "We negotiate with media owners directly — no layer of middlemen margins." },
      { icon: "ShieldCheck", t: "Proof of Display", d: "Dated photographs and monitoring reports for every single site." },
      { icon: "Target", t: "Placed, Not Purchased", d: "Sites chosen by footfall and audience match, not by what's available cheap." },
    ],
    subs: [
      {
        name: "Outdoor Advertising", icon: "Signpost", href: "/outdoor-advertising-service",
        desc: "Hoardings, unipoles, bus shelters and transit media placed where your buyers actually travel.",
        tags: ["Hoardings", "Transit", "Unipoles"]
      },
      {
        name: "Indoor Advertising", icon: "Building2", href: "/indoor-advertising-service",
        desc: "Malls, airports, gyms and corporate lobbies — captive audiences with time on their hands.",
        tags: ["Malls", "Airports", "Corporate"]
      },
      {
        name: "Cinema Advertising", icon: "Projector", href: "/cinema-advertising-service",
        desc: "Big-screen spots in single screens and multiplexes, targeted by city, language and film.",
        tags: ["Multiplex", "Single Screen", "City Targeting"]
      },
      {
        name: "TV Advertising", icon: "Tv", href: "/tv-advertising-service",
        desc: "National and regional channel buying with slot planning built around your audience's viewing habits.",
        tags: ["National", "Regional", "Slot Planning"]
      },
      {
        name: "Radio Advertising", icon: "Radio", href: "/radio-advertising-service",
        desc: "FM campaigns with jingle production, RJ mentions and drive-time slots that reach commuters daily.",
        tags: ["FM Spots", "RJ Mentions", "Drive Time"]
      },
    ],
  },

  /* ============================================================ */
  development: {
    slug: "development",
    eyebrow: "Development",
    title: "Designed to Impress,",
    titleAccent: "Built to Convert.",
    intro:
      "Websites, apps, interfaces and custom software built by developers who understand marketing — so what you launch doesn't just work, it sells.",
    banner: "/development-banners.png",
    gradient: "from-aqua-500 to-plum-600",
    stats: [
      { v: "90+", l: "PageSpeed Target" },
      { v: "5 Services", l: "Design to Deploy" },
      { v: "Zero", l: "Outsourced Code" },
    ],
    values: [
      { icon: "Zap", t: "Speed Obsessed", d: "Core Web Vitals in the green, because slow sites lose buyers before they load." },
      { icon: "Palette", t: "Design That Sells", d: "Interfaces built around conversion paths, not just visual trends." },
      { icon: "ShieldCheck", t: "You Own Everything", d: "Full source code, hosting access and admin control handed over at launch." },
    ],
    subs: [
      {
        name: "Web Development", icon: "Code2", href: "/web-development",
        desc: "Fast, responsive, SEO-ready websites — from a five-page brochure site to a full e-commerce build.",
        tags: ["Responsive", "SEO Ready", "CMS"]
      },
      {
        name: "Mobile App Development", icon: "Smartphone", href: "/mobile-app-development",
        desc: "Android and iOS apps built native or cross-platform, with the backend and analytics wired in.",
        tags: ["Android", "iOS", "Cross-Platform"]
      },
      {
        name: "UI/UX Design", icon: "Palette", href: "/ui-ux-design",
        desc: "Wireframes, prototypes and design systems tested with real users before a line of code is written.",
        tags: ["Wireframes", "Prototypes", "Design System"]
      },
      {
        name: "CRM Software", icon: "Database", href: "/crm-software",
        desc: "Custom CRM built around how your sales team actually works — not a licence you'll fight with for years.",
        tags: ["Custom Build", "Sales Pipeline", "Automation"]
      },
      {
        name: "Cyber Security", icon: "ShieldCheck", href: "/cyber-security",
        desc: "Audits, hardening, SSL, backups and monitoring so a breach never becomes your brand's headline.",
        tags: ["Audits", "Hardening", "Monitoring"]
      },
    ],
  },

  /* ============================================================ */
  "brand-influence": {
    slug: "brand-influence",
    eyebrow: "Brand & Influence",
    title: "Get Your Brand",
    titleAccent: "Talked About.",
    intro:
      "Brand strategy, celebrity endorsements, influencer campaigns and affiliate networks — the work that makes people recognise your name before they ever see your ad.",
    banner: "/brand-banners.png",
    gradient: "from-plum-600 to-brand-600",
    stats: [
      { v: "500+", l: "Creators Network" },
      { v: "92%", l: "Client Retention" },
      { v: "Vetted", l: "Every Partner" },
    ],
    values: [
      { icon: "Crown", t: "Strategy First", d: "Positioning and messaging locked before a single creator is contacted." },
      { icon: "Users", t: "Real Audiences", d: "Every influencer is audited for fake followers before we spend your money." },
      { icon: "BarChart3", t: "Attribution Built In", d: "Unique codes and links so you know exactly which partner drove which sale." },
    ],
    subs: [
      {
        name: "Brand Management", icon: "Crown", href: "/brand-management",
        desc: "Positioning, identity, tone of voice and guidelines — the foundation everything else is built on.",
        tags: ["Positioning", "Identity", "Guidelines"]
      },
      {
        name: "Brand Marketing Plan & Execution", icon: "Layers", href: "/brand-marketing-plan-execution",
        desc: "A twelve-month roadmap with budgets, channels and milestones — then the team that actually executes it.",
        tags: ["Roadmap", "Budgeting", "Execution"]
      },
      {
        name: "Celebrity Endorsement", icon: "Star", href: "/celebrity-endorsement",
        desc: "Talent identification, negotiation and shoot management with celebrities who fit your brand, not just your budget.",
        tags: ["Talent Sourcing", "Negotiation", "Shoot"]
      },
      {
        name: "Influencer Marketing", icon: "Users", href: "/influencer-marketing",
        desc: "Nano to macro creator campaigns with vetted audiences, clear briefs and performance tracked per post.",
        tags: ["Creator Vetting", "Campaigns", "Tracking"]
      },
      {
        name: "Affiliate Marketing", icon: "Handshake", href: "/affiliate-marketing",
        desc: "Performance partner networks where you pay commission on results — never on promises.",
        tags: ["Partner Network", "Commission", "Real-Time"]
      },
    ],
  },

  /* ============================================================ */
  "ai-services": {
    slug: "ai-services",
    eyebrow: "AI Services",
    title: "Work Smarter With",
    titleAccent: "AI-Powered Growth.",
    intro:
      "Use AI where it actually makes your business faster, smarter and more effective. From intelligent automation and customer interactions to content, insights and campaign optimisation — we turn AI into practical business solutions.",
    banner: "/ai-service-banners.png",
    gradient: "from-accent-500 to-brand-600",

    stats: [
      { v: "24/7", l: "AI Automation" },
      { v: "Faster", l: "Content & Workflows" },
      { v: "Smarter", l: "Business Decisions" },
    ],

    values: [
      {
        icon: "Sparkles",
        t: "AI That Solves Problems",
        d: "We use AI to remove repetitive work, improve productivity and make everyday business processes easier.",
      },
      {
        icon: "Zap",
        t: "Automate the Routine",
        d: "Turn repetitive tasks, customer queries and workflows into intelligent automated systems.",
      },
      {
        icon: "BarChart3",
        t: "Insights That Matter",
        d: "Use data and AI-driven insights to understand audiences, improve campaigns and make better decisions.",
      },
    ],

    subs: [
      {
        name: "AI & Automation Services",
        icon: "Sparkles",
        href: "/ai-and-automation-services",
        desc:
          "AI-powered solutions for automation, content creation, customer interactions, business workflows and smarter decision-making.",
        tags: ["AI Automation", "AI Solutions", "Productivity"],
      },
    ],
  },

  "event-and-pr": {
    slug: "event-and-pr",
    eyebrow: "Event & PR",
    title: "Create Moments",
    titleAccent: "That Get Noticed.",
    intro:
      "From impactful events to strategic public relations, we plan, execute and amplify experiences that put your brand in front of the right audience.",
    banner: "/event-banner.png",
    gradient: "from-brand-600 to-accent-500",

    stats: [
      { v: "150+", l: "Events Executed" },
      { v: "360°", l: "Event & PR Support" },
      { v: "End-to-End", l: "Execution" },
    ],

    values: [
      {
        icon: "CalendarDays",
        t: "Events From Start to Finish",
        d: "Concept, venue, production, vendors, guests and execution managed under one roof.",
      },
      {
        icon: "Newspaper",
        t: "PR That Builds Visibility",
        d: "Strategic press outreach and media communication designed to get your brand noticed.",
      },
      {
        icon: "Trophy",
        t: "Experiences People Remember",
        d: "Award shows, exhibitions, launches and corporate events built around your brand story.",
      },
    ],

    subs: [
      {
        name: "Event Management",
        icon: "CalendarDays",
        href: "/event-management",
        desc:
          "Complete event planning and execution for product launches, conferences, dealer meets and corporate events.",
        tags: ["Event Planning", "Production", "Execution"],
      },

      {
        name: "PR Management",
        icon: "Newspaper",
        href: "/pr-management",
        desc:
          "Press releases, media outreach and public relations strategies that build credibility and meaningful brand coverage.",
        tags: ["Press Releases", "Media Relations", "Coverage"],
      },

      {
        name: "Award Shows & Exhibitions",
        icon: "Trophy",
        href: "/award-shows-exhibitions",
        desc:
          "End-to-end award shows and exhibition experiences covering planning, branding, design, production and execution.",
        tags: ["Award Shows", "Exhibitions", "Production"],
      },
    ],
  },


};

export const CATEGORY_LIST = Object.values(CATEGORIES);