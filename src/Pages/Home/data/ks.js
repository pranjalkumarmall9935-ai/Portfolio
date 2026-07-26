export const personalInfo = {
  name: "Pranjal Mall",
  rollNo: "2023071055",
  degree: "B.Tech IT @ MMMUT, Gorakhpur",
  tagline: "Electronics & Web Enthusiast",
  phone: "+91 8081492432",
  email: "pranjalkumarmall9935@gmail.com",
  city: "Deoria, Uttar Pradesh, India",
  birthday: "02/10/2003",
  age: 21,
  profileImage: "/img/kishanimg.png",
  aboutImage: "/img/image.png",
  description:
    "Frontend developer proficient in React, Next.js, and RESTful API integration, with hands-on experience in Mobile App development using React Native. I’m passionate about combining intuitive UI design with powerful functionality across web and mobile platforms. With a strong background in electronics, I love bridging the gap between hardware and software to craft innovative, scalable, and real-world digital solutions.",
  github: "https://github.com/Kishan89",
  linkedin: "https://www.linkedin.com/in/kishan8957",
  instagram: "https://www.instagram.com/kishan_021003/",
  twitter: "https://twitter.com/Kishan1244",
  status: "Open to opportunities",
  headline: "Frontend & Backend Developer",
  summary: "Frontend developer proficient in React, Next.js, and RESTful API integration, with hands-on experience in Mobile App development using React Native. I’m passionate about combining intuitive UI design with powerful functionality across web and mobile platforms. With a strong background in electronics, I love bridging the gap between hardware and software to craft innovative, scalable, and real-world digital solutions.",
  heroBadges: ["React Native", "React.js", "TypeScript", "Android & iOS"],
  resume: "/Kishan_Resume.pdf",
  profileHighlights: [
    "Cross-platform App Delivery (Android & iOS)",
    "Figma-to-Code UI Precision",
    "Automated OTA & App Store CI/CD Pipelines"
  ],
  aboutHighlights: [
    "Clean Code Architecture",
    "Performance Optimization",
    "RESTful API Integration",
    "State Management",
    "Native Module Bridging"
  ],
  impactMetrics: [
    { value: "10+", label: "Apps Developed", detail: "Contributed to and developed 10+ cross-platform mobile apps" },
    { value: "6+", label: "Store Deployments", detail: "Successfully deployed on Apple App Store & Google Play Store" },
    { value: "400+", label: "LeetCode solved", detail: "Consistent DSA problem solver & competitive programmer" }
  ]
};

export const projectCategories = [
  { id: "react-native", label: "React Native", color: "cyan" },
  { id: "frontend", label: "Frontend", color: "purple" },
  { id: "react", label: "React.js", color: "pink" },
  { id: "nextjs", label: "Next.js", color: "emerald" },
];

export const projects = {
  "react-native": [
    {
      title: "PeerPrep App",
      role: "Mobile App Developer",
      image: "https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png",
      description: "A real-time peer-to-peer interview prep app with skill-based matching, shared whiteboard, Community features, quizzes, chat, and audio/video calling.",
      outcome: "Enabled real-time connection between preparation partners, increasing interview practice frequency.",
      tech: ["React Native", "JavaScript", "Firebase", "Expo", "Firestore"],
      github: "https://github.com/Kishan89/PeerPrep",
      live: "https://drive.google.com/file/d/1hqm3KP0StLWB5inx4gL4DVu4i1GW5sWH/view?usp=drive_link"
    },
    {
      title: "Expense Tracker App",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Track daily expenses with pie charts and local storage.",
      outcome: "Designed intuitive visualization of user expenditures utilizing SVG chart libraries.",
      tech: ["React Native", "JavaScript", "Firebase", "AsyncStorage"],
      github: "https://github.com/Kishan89/ExpenseTrackerApp",
      live: "https://drive.google.com/file/d/1Ulnw-GK83UutYOPCzniRF89nUEbp_mHP/view?usp=sharing"
    },
    {
      title: "Meals App",
      role: "Mobile App Developer",
      image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Browse, filter, and favorite meals based on dietary preferences.",
      outcome: "Built complex navigation structures using React Navigation.",
      tech: ["React Native", "Expo", "JavaScript", "API Integration"],
      github: "https://github.com/Kishan89/MealsApp",
      live: "https://drive.google.com/file/d/1gwQJ4_evl1drOCviO7V36hbG4KRI_AfJ/view?usp=sharing"
    },
    {
      title: "Guess Game",
      role: "Mobile App Developer",
      image: "https://plus.unsplash.com/premium_photo-1679957333039-285fb913aa2b?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Number guessing game with animations and real-time feedback.",
      outcome: "Achieved responsive UI scaling across diverse screen dimensions using StyleSheet APIs.",
      tech: ["React Native", "JavaScript", "Stylesheet CSS"],
      github: "https://github.com/Kishan89/GuessGame",
      live: "https://drive.google.com/file/d/1eT_2VzGe4HIbgc62vxp0NTACTpkJYMr2/view?usp=sharing"
    },
    {
      title: "Auth Flow App",
      role: "Mobile App Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNH-aw_-5xRjM19tmbBcMU1obRwfOnmLCZ9g&s",
      description: "Login, sign‑up, and secure token storage using Firebase.",
      outcome: "Secured user credentials locally leveraging Expo's SecureStore.",
      tech: ["React Native", "Firebase", "SecureStore", "Expo"],
      github: "https://github.com/Kishan89/User_Authentication",
      live: "https://drive.google.com/file/d/1mvsa4QMrEFv2nzR_GBnqOTf7XbIkc2l0/view?usp=sharing"
    }
  ],
  frontend: [
    {
      title: "Portfolio Website",
      role: "Frontend Developer",
      image: "/img/portfolio.png",
      description: "Responsive developer portfolio site.",
      outcome: "Created high-quality showcases for professional engineering experience.",
      tech: ["React js", "Tailwind CSS", "Javascript", "ShadCN"],
      github: "https://github.com/Kishan89/Kishan_Portfolio",
      live: "https://kishan-portfolio-tan.vercel.app/"
    },
    {
      title: "PopX SignUp UI",
      role: "Frontend Developer",
      image: "/img/popx.png",
      description: "Signup page design with modern UI/UX and validation.",
      outcome: "Delivered standard-compliant form validation with responsive styling.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/kishan895737/popx-signup-app",
      live: "https://pop-x-signup-app.vercel.app/"
    },
    {
      title: "Weather App",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Live weather updates using OpenWeatherMap API.",
      outcome: "Fetched and formatted global environmental data asynchronously.",
      tech: ["React", "JavaScript", "Axios", "CSS"],
      github: "https://github.com/Kishan89/WeatherAppReact",
      live: null
    }
  ],
  react: [
    {
      title: "Globesense",
      role: "Full Stack Developer",
      image: "/img/Globesense.png",
      description: "Track your travels and mark cities on a world map.",
      outcome: "Integrated Leaflet maps within a modular CSS layout to record geographical nodes.",
      tech: ["React", "Leaflet", "CSS Modules"],
      github: "https://github.com/kishan895737/worldwise",
      live: "https://worldwise-map.netlify.app"
    },
    {
      title: "React Quiz App",
      role: "Frontend Developer",
      image: "https://i.ytimg.com/vi/VMZ7lcSdVnY/maxresdefault.jpg",
      description: "Quiz app using useReducer and custom logic.",
      outcome: "Managed complex interactive game states via React's useReducer hook.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/Kishan89/React-Quiz",
      live: "https://react-quiz-phi-umber.vercel.app/"
    },
    {
      title: "Solar System 3D App",
      role: "Creative Developer",
      image: "/img/solar3d.png",
      description: "Interactive 3D model of the solar system.",
      outcome: "Engineered three-dimensional astronomical models on the web canvas.",
      tech: ["Vanilla JS", "Three.js", "React Three Fiber"],
      github: "https://github.com/Kishan89/Solar_system_3D",
      live: "https://kishan89.github.io/Solar_system_3D/"
    },
    {
      title: "Eat and Split App",
      role: "React Developer",
      image: "/img/eatandsplit.png",
      description: "Split bills and share expenses for pizza nights.",
      outcome: "Built shared expense calculation algorithms with state synchronisation.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Kishan89/eatandsplit",
      live: null
    }
  ],
  nextjs: [
    {
      title: "Artistly",
      role: "Frontend Developer",
      image: "/img/Artistly.png",
      description: "Modern art portfolio platform with dynamic form validation.",
      outcome: "Implemented schema-driven input validation using React Hook Form.",
      tech: ["Next.js", "Tailwind CSS", "ShadCN", "React Hook Form"],
      github: "https://github.com/Kishan89/ArtistlyApp",
      live: "https://artistly-app-three.vercel.app/"
    },
    {
      title: "Grow My Therapy",
      role: "Frontend Developer",
      image: "/img/drsarena.png",
      description: "Modern SaaS‑style landing and services site.",
      outcome: "Built responsive landing structures and SEO-optimized structures.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/Kishan89/GrowMyTherapyAssignment",
      live: "https://drserenablake-omega.vercel.app/"
    },
    {
      title: "Showcase App",
      role: "UI Developer",
      image: "/img/showcase.png",
      description: "Modern and responsive React application for managing and showcasing a collection of items.",
      outcome: "Delivered interactive elements utilizing Framer Motion.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Kishan89/ItemShowcaseApp",
      live: "https://item-showcase-app-five.vercel.app/"
    }
  ]
};

export const skills = {
  "Programming Languages": ["C", "C++", "JavaScript", "HTML", "CSS"],
  "Frameworks & Libraries": [
    "ReactJS",
    "Next.js",
    "React Native",
    "Bootstrap",
    "Tailwind CSS",
  ],
  "Tools & Technologies": ["Git", "GitHub", "Firebase", "Excel", "MATLAB", "VS Code"],
  "Soft Skills": [
    "Problem Solving",
    "Adaptability",
    "Team Collaboration",
    "Presentation",
  ],
  Interests: ["Web Development", "UI/UX Design", "Mobile Development"],
};

export const education = [
  {
    title: "Bachelor of Technology",
    subtitle: "Information Technology",
    institution: "MMMUT, Gorakhpur",
    gradeLabel: "CGPA",
    grade: "7.77",
    period: "2023 - 2027",
    color: "cyan",
    extra: [
      
     "Data Structures & Algorithms, Object-Oriented Programming, Database Management System",
"Operating System, Computer Networks, MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    ],
  },
  {
    title: "Intermediate (Class 12)",
    subtitle: "Science Stream",
    institution: "PD Academy, Deoria",
    gradeLabel: "Percentage",
    grade: "83%",
    period: "CBSE Board",
    color: "purple",
    extra: ["Subjects: Physics, Chemistry, Mathematics, Physical Education"],
  },
  {
    title: "Secondary (Class 10)",
    subtitle: "Science Stream",
    institution: "PD Academy, Deoria",
    gradeLabel: "Percentage",
    grade: "85%",
    period: "CBSE Board",
    color: "pink",
    extra: ["Focus on Science and Mathematics"],
  },
];

export const experience = [
  {
    id: 1,
    title: "Associate Mobile Developer",
    company: "Spectent",
    location: "Gurugram, Haryana",
    type: "Hybrid",
    dates: "Jun 2026 – Present",
    icon: "💻",
    color: "emerald",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Develop and maintain <strong>3 production mobile applications</strong> (FSCM, Spectent, DMS) using <strong>React Native</strong> for iOS/Android to ensure premium, high-performance cross-platform scalability.</li>
        <li>Build pixel-perfect UI components from Figma and integrated <strong>REST APIs</strong> via Axios, TanStack Query, and Zod validator libraries to streamline client-side data state flows.</li>
        <li>Manage automated <strong>push notifications, OTA updates</strong>, resolve bugs, and execute native workflows for end-to-end continuous <strong>Play Store and App Store deployments</strong>.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "React Native Developer Intern",
    company: "Spectent",
    location: "Remote",
    dates: "Jan 2026 – May 2026",
    icon: "📱",
    color: "cyan",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Contributed to modular architecture components for cross-platform mobile application engineering using <strong>React Native</strong>.</li>
        <li>Owned UI feature delivery frameworks, backend REST API integrations, debugging, and cross-device manual testing matrix.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "React Native Developer (Part-time)",
    company: "ATIR PoliTech",
    location: "Hybrid",
    dates: "Dec 2025 – May 2026",
    icon: "⚙️",
    color: "purple",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Converted complex Figma blueprints into fluid, responsive mobile layouts utilizing optimized native styling abstractions.</li>
        <li>Interfaced REST endpoints to manage active state transitions, loading graphics, and robust error management flows.</li>
        <li>Collaborated with design and backend teams to improve interface render speeds and user interaction workflows.</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "React Native Developer Intern",
    company: "Nexeed",
    location: "Remote",
    dates: "Sep 2025 – Dec 2025",
    icon: "🚀",
    color: "blue",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Developed full mobile frontend client architecture for the <strong>Nexeed platform</strong>, handling feeds, user profiles, and layout states.</li>
        <li>Integrated complex asynchronous layers including <strong>REST APIs, real-time chat, push notifications (FCM, OneSignal)</strong>, and OAuth.</li>
        <li>Optimized rendering speeds via offline-first caching and deployed builds built with <strong>TypeScript, Expo, and Supabase</strong>.</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "React Native App Developer Intern",
    company: "Wecofy",
    location: "Remote",
    dates: "Jul 2025 – Aug 2025",
    icon: "🔌",
    color: "amber",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Developed frontend, API integration, and AI chatbot for <strong>Juristo Legal AI App</strong>.</li>
        <li>Integrated REST APIs and firebase services (Authentication, Firestore, and cloud storage).</li>
        <li>Integrated printer support in General Store App.</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Internship Trainee",
    company: "North Eastern Railway",
    location: "Gorakhpur",
    dates: "May 2025 – Jul 2025",
    icon: "🚉",
    color: "rose",
    description: `
      <ul class="list-disc pl-5 space-y-1">
        <li>Learned signaling & telecom systems in live railway setup.</li>
        <li>Understood interlocking, point machines & infrastructure.</li>
        <li>Gained practical knowledge of railway operations.</li>
      </ul>
    `
  }
];

export const achievements = [
  {
    title: "LeetCode Consistency",
    metric: "400+ Solved",
    description: "Solved over 500 questions covering complex data structures, search, sorting, dynamic programming, and graphs."
  },
  {
    title: "Competitive Programming",
    metric: "Active Competitor",
    description: "Regularly participating in contests on platforms like LeetCode and Codeforces, focusing on algorithmic speed and precision."
  },
  {
    title: "Embedded & IoT Spec",
    metric: "Specialization",
    description: "Academic specialization in Microcontrollers, Digital Signal Processing, and Communication Systems."
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Kishan89" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kishan8957" },
  { label: "Instagram", href: "https://www.instagram.com/kishan_021003/" },
  { label: "Twitter", href: "https://twitter.com/Kishan1244" }
];
