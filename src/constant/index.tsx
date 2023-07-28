import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiDiscord,
  SiWhatsapp,
  SiVsco,
  SiVisualstudiocode,
  SiJetbrains,
  SiPython,
  SiGeneralelectric,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
  FaFigma,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "Github", route: "/github" },
  // { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} maxtrueby.com. All Rights Reserved.`,
  author: {
    name: "maxtrueby",
    accounts: [
      {
        url: "https://github.com/Max-Trueby",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://stats.fm/maxtrueby",
        icon: <FaSpotify />,
        name: "Instagram",
        type: "green",
      },
      {
        url: "mailto:admin@maxtrueby.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1KKVBejHxAr2PKhSCFufgnvdQTMUWt-u7/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};


const mobileTechStacks = [
  {
    name: "generic",
    icon: <SiGeneralelectric fontSize="20px" />,
    url: "https://example.com/",
    color: "#fff",
  },
];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
    color: "#61DBFB",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
    color: "#fff",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
    color: "#007ACC",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
    color: "#F7DF1E",
  },
  {
    name: "Html5",
    icon: <SiHtml5 fontSize="20px" />,
    url: "https://html.com/",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: <SiCss3 fontSize="20px" />,
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
    color: "#1572B6",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
    color: "#38B2AC",
  },
  {
    name: "Python",
    icon: <SiPython fontSize="20px" />,
    url: "https://python.org/",
    color: "#3776AB",
  },
  {
    name: "Discord",
    icon: <SiDiscord fontSize="20px" />,
    url: "https://discord.com/",
    color: "#7289DA",
  },
  {
    name: "Figma",
    icon: <SiFigma fontSize="20px" />,
    url: "https://figma.com/",
    color: "#F24E1E",
  },
  {
    name: "VSCode",
    icon: <SiVisualstudiocode fontSize="20px" />,
    url: "https://vscode.dev/",
    color: "#007ACC",
  },
  {
    name: "JetBrains",
    icon: <SiJetbrains fontSize="20px" />,
    url: "https://jetbrains.com/",
    color: "#fff",
  },
];

const otherTechStacks = [
  {
    name: "generic",
    icon: <SiGeneralelectric fontSize="20px" />,
    url: "https://example.com/",
    color: "#fff",
  },

];

const companies = [
  {
    title: "maxtrueby",
    alt: "maxtrueby image",
    url: "https://maxtrueby.com/",
    role: "Chief Executive Officer & Founder",
    skills: ["Next.js", "Html", "Css", "JS/TS", "Python"],
    period: "Sep 2019 - Present",
    logo: "/profile_picture.png",
  },/*
  {
    title: "Qumon Intelligence",
    alt: "qumon image",
    url: "https://www.qumonintelligence.com/",
    role: "Software Engineer",
    skills: [
      "Kotlin",
      "Java",
      "Android",
      "Javascript",
      "React",
      "React Native",
    ],
    period: "Aug 2020 - Sept 2022",
    logo: "/qumon.png",
  },
  {
    title: "TimeTec Cloud Sdn Bhd",
    alt: "timetec image",
    url: "https://www.timeteccloud.com/",
    role: "Mobile Application Developer Intern",
    skills: ["Java", "Android", "C#", "Appium Automation Testing", "AWS"],
    period: "Jul 2019 - Jan 2020",
    logo: "/timetec.png",
  },*/
];

const educations = [
  {
    title: "High School",
    alt: "image",
    role: "Student & Tech (Light & Audio) Club Member",
    skills: ["think properly", "read properly", "write properly", "calculate properly"],
    period: "2018 - Pressent",
    url: "https://list-gymnasium.de/",
    logo: "/flg.jpg",
  },
  {
    title: "Elementary School",
    alt: "image",
    role: "Student",
    skills: ["talk", "read", "write", "maths"],
    period: "2014 - 2018",
    url: "https://sws-rt.de/",
    logo: "/sws.gif",
  },
];

const sideProjects = [
  {
    name: "Porject Name",
    imageUrl: "/3commas.png",
    alt: "example",
    summary:
      "example placeholder",
    link: "https://example.com/",
    tech: [
      'example',
      'example',
    ]
  },
  /*{
    name: "KlusterX Player Portal",
    imageUrl: "/klusterx_player.png",
    alt: "klusterx",
    summary: "Online Casino Player Portal, built with NextJS, TailwindCSS and MantineUI",
    tech: [
      'NextJS',
      "TailwindCSS",
      "MantineUI",
      "Zustand"
    ]
  },
  {
    name: "KlusterX Tenant Portal",
    imageUrl: "/klusterx_tenant.png",
    alt: "klusterx",
    summary: "Online Casino Tenant Portal, built with Ant Design Pro",
    tech: [
      "UmiJS",
      "Ant Design",
      "Ant Design Pro"
    ]
  },
  {
    name: "Chativo",
    imageUrl: "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary: "Enterprise ready live-chat base customer support & engagement software",
    tech: [
      "Android",
      "Kotlin",
      "Android Jetpack",
      "Coroutine Flow",
    ],
    link: "https://play.google.com/store/apps/details?id=io.chativo.chat"
  },
  {
    name: "ChativoV",
    imageUrl: "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary: "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    tech: [
      "React Native",
      "Javascript",
      "Redux",
      "Redux Saga",
      "RealmJS"
    ],
    link: "https://play.google.com/store/apps/details?id=io.chativo.visitor"
  },*/
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
