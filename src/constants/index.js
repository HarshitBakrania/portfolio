export const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 2, name: "Contact", type: "contact" },
  { id: 3, name: "Resume", type: "resume" },
];

export const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

export const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Projects", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

export const techStack = [
  {
    category: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Next.js",
      "Express.js",
      "Hono",
      "REST APIs",
      "WebSocket",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    category: "DevOps/Infra",
    items: ["Docker", "AWS", "CI/CD", "Cloudflare", "Redis"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C++", "C#", "Python"],
  },
];

const PROJECTS_LOCATION = {
  id: 1,
  type: "projects",
  name: "Projects",
  icon: "/icons/projects.svg",
  kind: "folder",
  children: [
    //Project 1
    {
      id: 5,
      name: "HB Realty",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "HB Realty.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a full-stack real estate platform using React, Node.js, Express, MongoDB, Prisma, TailwindCSS, and Socket.io.",
            "Implemented secure authentication with JWT and HTTP-only cookies.",
            "Built user profile management with avatar upload functionality.",
            "Created property listings with 6 advanced search filters, scalable to 1,000+ properties.",
            "Integrated interactive maps for enhanced property discovery.",
            "Enabled real-time user messaging using Socket.io.",
          ],
        },
        {
          id: 2,
          name: "hb-realty.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://real-estate-app-harshitbakranias-projects.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "HB Realty.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },
    //Project 2
    {
      id: 4,
      name: "AI-SEO Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI-SEO Landing Page.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Built a modern, responsive landing page using React, Next.js, TailwindCSS, and Framer Motion.",
            "Optimized the UI for 17+ screen resolutions to ensure consistent cross-device experience.",
            "Implemented smooth animations with Framer Motion, improving user engagement and time on page.",
          ],
        },
        {
          id: 2,
          name: "ai-seo-landing-page.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-seo-landing-page-five.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "ai-seo-landing-page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
    //Project 3
    {
      id: 6,
      name: "Yurei Run",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Yurei Run.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed Yurei Run, a Japanese-themed endless runner game using Unity and C#.",
            "Implemented core gameplay mechanics including player movement, obstacle spawning, and collision handling.",
            "Integrated immersive visual and audio elements to enhance player experience.",
          ],
        },
        {
          id: 2,
          name: "yurei-run.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://h-bakrania.itch.io/yurei-run",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "yurei-run.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
    //Project 4
    {
      id: 7,
      name: "Ping-Pong",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-80",
      windowPosition: "top-[45vh] left-7",
      children: [
        {
          id: 1,
          name: "Ping-Pong.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed a Ping Pong game in C++ using the Raylib graphics library.",
            "Implemented custom collision detection and physics for realistic ball movement.",
            "Built player vs computer gameplay with adaptive difficulty scaling.",
            "Focused on low-level game logic, performance, and real-time input handling.",
          ],
        },
        {
          id: 2,
          name: "ping-pong.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://h-bakrania.itch.io/ping-pong",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "ping-pong.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About Me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Semi-professional esports athlete transitioning into software development, bringing a competitive and problem-solving mindset.",
        "Passionate about building practical, user-focused products and turning ideas into working solutions.",
        "Actively explores new technologies and frameworks to stay adaptable and industry-ready.",
        "Strong belief in continuous learning, skill improvement, and hands-on experience through projects.",
        "Enjoys game development as a creative outlet, combining technical skills with design and gameplay mechanics.",
      ],
    },
    // TODO: Esports Achievements
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      resumeUrl: "/files/resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      //TODO: Add a few random images
    },
  ],
};

export const locations = {
  projects: PROJECTS_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
