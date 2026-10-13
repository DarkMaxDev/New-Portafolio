import { Icon } from "@iconify/react";
import CloneNetflixImg from "../assets/projects/CloneNetflix.png";
import coffeImg from "../assets/projects/coffe.png";
import skillshareLandingImg from "../assets/projects/WebAnime.png";
import wuwaImg from "../assets/projects/Community_wuwa.png"
import Electroimg from "../assets/projects/Electronic.png"
import React from "react";

export const PROJECTS_DATA = [
  {
    id: 1,
    category: "Streaming",
    statusKey: "production",
    title: "Plataforma de Anime Web Full-Stack AnimeWeb",
    image: skillshareLandingImg,
    technologies: [
      { name: "HTML5", icon: <Icon icon="simple-icons:html5" /> },
      { name: "CSS3", icon: <Icon icon="simple-icons:css3" /> },
      { name: "JavaScript", icon: <Icon icon="simple-icons:javascript" /> },
      { name: "Git", icon: <Icon icon="simple-icons:git" /> },
      { name: "Axios", icon: <Icon icon="simple-icons:axios" /> },
      { name: "React", icon: <Icon icon="simple-icons:React" /> },
      { name: "MongoDB", icon: <Icon icon="simple-icons:MongoDB" /> },
    ],
    github: "https://github.com/DarkMaxDev/FrontendAnimeWeb/tree/main",
    live: "https://frontend-anime-web.vercel.app/",
    labelTranslate: "AnimeWeb",
  },
  {
    id: 2,
    category: "Streaming",
    statusKey: "production",
    title: "Full-Stack Netflix Clone STREAMAPP",
    image: CloneNetflixImg,
    technologies: [
      { name: "Next.js", icon: <Icon icon="simple-icons:nextdotjs" /> },
      { name: "React", icon: <Icon icon="simple-icons:react" /> },
      { name: "TypeScript", icon: <Icon icon="simple-icons:typescript" /> },
      { name: "Tailwind CSS", icon: <Icon icon="simple-icons:tailwindcss" /> },
      { name: "MongoDB", icon: <Icon icon="simple-icons:MongoDB" /> },
      { name: "Axios", icon: <Icon icon="simple-icons:axios" /> },
    ],
    github: "https://github.com/DarkMaxDev/frontend-next-streamapp",
    live: "https://frontend-next-streamapp-s7dp.vercel.app/",
    labelTranslate: "STREAMAPP",
  },
  {
    id: 3,
    category: "E-commerce",
    statusKey: "production",
    title: "Full-Stack Ecommerce-coffe COFFE-VOLCANES",
    image: coffeImg,
    technologies: [
      { name: "vite", icon: <Icon icon="simple-icons:vite" /> },
      { name: "React", icon: <Icon icon="simple-icons:react" /> },
      { name: "javascript", icon: <Icon icon="simple-icons:javascript" /> },
      { name: "Tailwind CSS", icon: <Icon icon="simple-icons:tailwindcss" /> },
      { name: "MongoDB", icon: <Icon icon="simple-icons:MongoDB" /> },
      { name: "Axios", icon: <Icon icon="simple-icons:axios" /> },
      { name: "Stripe", icon: <Icon icon="simple-icons:stripe" /> },
      { name: "redis", icon: <Icon icon="simple-icons:redis" /> },
    ],
    github: "https://github.com/DarkMaxDev/E-commece-Coffe-Backend",
    live: "https://e-commece-coffe-backend-1.onrender.com/",
    labelTranslate: "COFFE",
  },
  {
    id: 4,
    category: "Community",
    statusKey: "production",
    title: "Full-Stack Community Wuthering Waves",
    image: wuwaImg,
    technologies: [
      { name: "vite", icon: <Icon icon="simple-icons:vite" /> },
      { name: "Next.js", icon: <Icon icon="simple-icons:Next.js" /> },
      { name: "TypeScript", icon: <Icon icon="simple-icons:TypeScript" /> },
      { name: "Tailwind", icon: <Icon icon="simple-icons:tailwindcss" /> },
      { name: "MongoDB", icon: <Icon icon="simple-icons:MongoDB" /> },
      { name: "Bcrypt", icon: <Icon icon="simple-icons:bcrypt" /> },
    ],
    github: "https://github.com/DarkMaxDev/Wuthering_Waves_Community/tree/main",
    live: "https://wuthering-waves-community.onrender.com/",
    labelTranslate: "COMWUWA",
  },
  {
    id: 5,
    category: "E-commerce",
    statusKey: "production",
    title: "Full-Stack Electronic-Store",
    image: ElectroimgImg,
    technologies: [
      { name: "vite", icon: <Icon icon="simple-icons:vite" /> },
      { name: "React", icon: <Icon icon="simple-icons:React" /> },
      { name: "Node", icon: <Icon icon="simple-icons:Node" /> },
      { name: "Express", icon: <Icon icon="simple-icons:Express" /> },
      { name: "TypeScript", icon: <Icon icon="simple-icons:TypeScript" /> },
      { name: "Tailwind", icon: <Icon icon="simple-icons:tailwindcss" /> },
      { name: "MongoDB", icon: <Icon icon="simple-icons:MongoDB" /> },
      { name: "Bcrypt", icon: <Icon icon="simple-icons:bcrypt" /> },
      { name: "Framer-Motion", icon: <Icon icon="simple-icons:Framer-Motion" /> },
    ],
    github: "https://github.com/DarkMaxDev/Electronic-Store",
    live: "https://electronic-store-hx9q.onrender.com/",
    labelTranslate: "EleStore",
  },
];








