import type { Project } from "./types";

function imagePath(filename: string): string {
  return `/projects/${filename}`;
}

const raw: Project[] = [
  {
    title: "Honda Atlas Cars Pakistan Ltd",
    description:
      "Consumer mobile app for Honda owners to manage services and stay connected to the brand.",
    role: "Full stack · Flutter",
    problem:
      "Owners needed a dependable digital channel for Honda services instead of scattered phone calls, paper forms, and inconsistent information.",
    approach:
      "Delivered a cross-platform Flutter app backed by Firebase, prioritizing stable navigation, store-ready release pipelines, and integrations that mirror real ownership workflows.",
    outcome:
      "Live product on Play Store and App Store, aligned with the public Honda Pakistan web presence—focused on everyday owner tasks, not a marketing splash page.",
    image: imagePath("honda.png"),
    demoLink: "https://www.honda.com.pk/",
    technologies: ["Flutter", "Firebase", "Dart"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.honda.atlas.carspakistan&hl=en",
    appStoreLink:
      "https://apps.apple.com/pk/app/honda-atlas-cars-pakistan-ltd/id1257197882",
    featured: true,
  },
  {
    title: "OptionsDepth",
    description:
      "Options analytics platform for SPX/VIX positioning, dealer exposure, and intraday market depth for traders.",
    role: "Backend, cloud & AI engineer",
    problem:
      "Traders needed exchange-grounded positioning and exposure analytics—not inferred tape heuristics—with reliable intraday refresh at production scale.",
    approach:
      "Built and supported backend services, cloud infrastructure, and AI-powered pipelines behind dashboards, data products, and API offerings on the platform.",
    outcome:
      "Live product at optionsdepth.com serving pro traders with depth views, market-maker exposure, positional insights, and premium data packages.",
    demoLink: "https://optionsdepth.com/",
    image: imagePath("optionsdepth.png"),
    technologies: ["Python", "AWS", "APIs", "AI/ML", "Data pipelines"],
    featured: true,
  },
  {
    title: "Onthago",
    description:
      "Product spanning web, mobile, and backend services for the Onthago platform.",
    role: "Full-stack engineer · Web, mobile, backend",
    problem:
      "The product needed cohesive experiences across clients and server-side workflows without siloed feature delivery.",
    approach:
      "Worked full stack across web and mobile surfaces and backend APIs—shipping end-to-end features, integrations, and release-ready builds aligned with production needs.",
    outcome:
      "Live platform at onthago.app with integrated web, mobile, and backend capabilities supporting real users.",
    demoLink: "https://onthago.app/",
    image: imagePath("onthago.png"),
    technologies: ["Web", "Mobile", "Backend"],
    featured: true,
  },
  {
    title: "MyClone Technologies",
    description:
      "3D modeling and scanning platform with real-time services and geometry pipelines.",
    role: "Backend & support engineer · APIs, sockets, 3D",
    problem:
      "Accurate 3D capture and modeling required dependable APIs, low-latency real-time channels, and geometry processing that holds up in production.",
    approach:
      "Developed and supported backend APIs, socket programming, and Apple geometry / photogrammetry pipelines for 3D modeling and scanning.",
    outcome:
      "Production-facing capabilities behind myclonetechnologies.com—APIs, socket programming, and 3D geometry support for modeling and scanning.",
    demoLink: "https://myclonetechnologies.com/",
    image: imagePath("myclone.png"),
    technologies: ["APIs", "WebSockets", "Apple Geometry", "3D scanning"],
    featured: true,
  },
  {
    title: "Needle Music",
    description:
      "iOS app for discovering music and saving tracks into Spotify or Apple Music libraries.",
    role: "Full stack · iOS",
    problem:
      "Listeners discover songs in many places but saving them to their library is friction-heavy and platform-specific.",
    approach:
      "Built a native Swift/UIKit experience around fast discovery flows and tight integration with streaming APIs, keeping interactions responsive on device.",
    outcome:
      "Shipped a focused iOS product on the App Store centered on the save-to-library job—not a full social network.",
    image: imagePath("needle.png"),
    demoLink: "https://www.needlemusic.co/",
    technologies: ["Swift", "UIKit"],
    appStoreLink: "https://apps.apple.com/us/app/needle-music/id1539883285",
    featured: true,
  },
  {
    title: "Rockerbox News",
    description:
      "Literacy platform helping learners build reading comprehension through structured content.",
    role: "Full stack · Flutter",
    problem:
      "Young learners needed engaging reading practice with measurable progress—not passive content consumption.",
    approach:
      "Implemented Flutter client patterns with Firebase-backed content and state, optimizing for consistent UX across devices used in classrooms and at home.",
    outcome:
      "Production apps on major stores supporting the myrockerbox.com learning experience.",
    image: imagePath("rockerbox.jpg"),
    demoLink: "https://myrockerbox.com/",
    technologies: ["Flutter", "Firebase", "Dart"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.rockerbox.myrockerbox&hl=en_GB&gl=US&pli=1",
    appStoreLink: "https://apps.apple.com/gb/app/rockerbox-news/id1571487045",
    featured: true,
  },
  {
    title: "My AAA",
    description:
      "Subscription platform connecting creators with paying audiences.",
    role: "Full stack · Flutter",
    problem:
      "Creators needed recurring revenue without building bespoke payment and content stacks from scratch.",
    approach:
      "Used Flutter and Firebase to ship subscription flows, content gating, and release management with store distribution in mind from day one.",
    outcome:
      "Published cross-store mobile clients supporting the myaaapass.com offering.",
    image: imagePath("aaa.jpg"),
    demoLink: "https://www.myaaapass.com/",
    technologies: ["Flutter", "Firebase", "Dart"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.aaa.myaaapass&gl=GB",
    featured: true,
  },
  {
    title: "Clip Fusion",
    description: "Server-side video processing tool for batch media workflows.",
    role: "Full stack · Python",
    problem:
      "Manual video processing steps were slow and error-prone for repeatable editing tasks.",
    approach:
      "Built a Flask service to orchestrate processing pipelines, keeping the interface small and the processing logic explicit and testable.",
    outcome:
      "Open-source on GitHub peers can review—shows how I structure Python services, not just UI screenshots.",
    image: imagePath("ClipFusion.png"),
    githubLink: "https://github.com/omerxhafique/clip-fusion",
    technologies: ["Python", "Flask"],
    featured: true,
  },
  {
    title: "ToDo App (MERN)",
    description:
      "Full-stack task manager demonstrating API design and a React client.",
    role: "Full-stack · personal project",
    problem:
      "I needed a concise end-to-end sample showing CRUD APIs, auth boundaries, and a usable client—including theme and state choices.",
    approach:
      "Split responsibilities across Express/MongoDB and a React front end, deployed the client for easy review, and kept the repo focused on clarity over feature sprawl.",
    outcome:
      "Public GitHub repo plus a hosted demo—useful for conversations about how I structure JavaScript services and UI state.",
    image: imagePath("todo-app.png"),
    githubLink: "https://github.com/omerxhafique/todo-app",
    demoLink: "https://todo-app-mern-97b8f.web.app/",
    technologies: ["React", "Node", "MongoDB"],
    featured: true,
  },
  {
    title: "Calendar Airplane",
    description:
      "macOS menu bar app that flies a click-through banner with your next Google Calendar meeting.",
    role: "macOS · personal project",
    problem:
      "Back-to-back remote meetings make it easy to lose track of what is starting next without alt-tabbing into Calendar.",
    approach:
      "Built a SwiftUI app with Google Calendar OAuth, polling, and an NSPanel overlay animation—secrets kept out of the repo for safe open source.",
    outcome:
      "Open-source macOS utility on GitHub with a demo flight mode—shows native macOS integration and API auth patterns.",
    image: imagePath("CalendarAirplane.gif"),
    githubLink: "https://github.com/omerxhafique/CalendarAirplane",
    technologies: ["Swift", "SwiftUI", "Google Calendar API"],
    featured: true,
  },
  {
    title: "Momentful",
    description: "Digital cards for timely, personal messages.",
    image: imagePath("momentful.png"),
    demoLink: "https://bemomentful.com/",
    technologies: ["Swift", "UIKit"],
    appStoreLink:
      "https://apps.apple.com/us/app/momentful-not-just-a-card-app/id1437656485",
  },
  {
    title: "Antique Collector",
    description:
      "Marketplace connecting buyers with antique and jewellery dealers worldwide.",
    image: imagePath("antique.jpg"),
    demoLink: "https://www.the-antiquecollector.com/",
    technologies: ["Flutter", "Firebase", "Dart"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.antiquecollector.app",
    appStoreLink:
      "https://apps.apple.com/us/app/antique-collector/id1573041516",
  },
  {
    title: "Love At First Swipe",
    description:
      "Dating product with privacy-oriented messaging constraints.",
    image: imagePath("lfs.jpg"),
    demoLink: "https://loveatfirstswipe.com/",
    technologies: ["Swift", "Objective-C", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.loveatfirstswipe.lfs",
    appStoreLink:
      "https://apps.apple.com/us/app/love-at-first-swipe/id1475112780?ls=1",
  },
  {
    title: "Snore Doctor",
    description: "Overnight snore recording and decibel-based insights.",
    image: imagePath("snore.png"),
    demoLink: "https://www.snorelab.com/",
    technologies: ["Swift", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.snorelab.app&hl=en",
    appStoreLink:
      "https://apps.apple.com/us/app/snorelab-record-your-snoring/id529443604",
  },
  {
    title: "The FOR Project",
    description: "Shop-to-give commerce tied to nonprofit partners.",
    image: imagePath("FOR.png"),
    demoLink: "https://www.facebook.com/TheFORProject/",
    technologies: ["Swift", "SwiftUI", "Objective-C"],
  },
  {
    title: "Auto Photo Compress",
    description: "Scheduled, offline-friendly photo compression on device.",
    image: imagePath("APC.png"),
    technologies: ["Swift", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ab.autoresizer&hl=en",
    appStoreLink:
      "https://apps.apple.com/us/app/auto-photo-compress/id1537117640",
  },
  {
    title: "WifiLink",
    description: "Share Wi‑Fi access via encrypted QR and shake-to-connect.",
    technologies: ["Swift", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.wifilink.android&hl=en",
    appStoreLink:
      "https://apps.apple.com/us/app/wifilink-share-wifi/id1512596298",
  },
  {
    title: "Copy Paste",
    description: "Cross-platform clipboard sync between mobile and desktop.",
    technologies: ["Swift", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.devspiral.clipboardmanager&hl=en",
    appStoreLink:
      "https://apps.apple.com/us/app/clippaste-universal-clipboard/id1521211189",
  },
  {
    title: "Teek-It",
    description: "Customer and driver apps for logistics operations.",
    demoLink: "https://teekit.co.uk/",
    technologies: ["Swift", "UIKit"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=teekit.app.customer",
    appStoreLink: "https://apps.apple.com/app/id1523482356",
  },
  {
    title: "Faslearn",
    description: "E-learning marketplace for professional upskilling.",
    demoLink: "https://faslearn.com/",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
];

export const projects = raw;
export const caseStudies = raw.filter((p) => p.featured);
export const moreProjects = raw.filter((p) => !p.featured);
