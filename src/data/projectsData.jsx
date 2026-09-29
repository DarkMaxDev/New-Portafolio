import { Icon } from "@iconify/react";
import CloneNetflixImg from "../assets/projects/CloneNetflix.png";
import coffeImg from "../assets/projects/coffe.png";
import skillshareLandingImg from "../assets/projects/WebAnime.png";
import React from "react";

export const PROJECTS_DATA = [
  {
    id: 1,
    category: "Full-Stack AnimeWeb",
    statusKey: "production",
    title: "Plataforma de Anime Web Full-Stack",
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
    labelTranslate: "skillshare_landing",
  },
  {
    id: 2,
    category: "Clone Netflix",
    statusKey: "production",
    title: "Full-Stack Netflix Clone",
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
    category: "Ecommerce-Coffe",
    statusKey: "production",
    title: "Full-Stack Ecommerce-coffe",
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
    live: "https://e-commece-coffe-backend.vercel.app/",
    labelTranslate: "COFFE",
  },
    {
        id: 1,
        category: 'Full-Stack AnimeWeb',
        statusKey: 'production',
        title: 'Plataforma de Anime Web Full-Stack',
        image: skillshareLandingImg,
        technologies: [
            {name: 'HTML5', icon: <Icon icon="simple-icons:html5"/>},
            {name: 'CSS3', icon: <Icon icon="simple-icons:css3"/>},
            {name: 'JavaScript', icon: <Icon icon="simple-icons:javascript"/>},
            {name: 'Git', icon: <Icon icon="simple-icons:git"/>},
            {name: 'Axios', icon: <Icon icon="simple-icons:axios"/>},
            {name: 'React', icon: <Icon icon="simple-icons:React"/>},
            {name: 'MongoDB', icon: <Icon icon="simple-icons:MongoDB"/>},
        ],
        github: 'https://github.com/DarkMaxDev/FrontendAnimeWeb/tree/main',
        live: 'https://frontend-anime-web.vercel.app/',
        labelTranslate: 'skillshare_landing'
    },
    {
        id: 2,
        category: 'Clon de Netflix',
        statusKey: 'production',
        title: 'Clon de Netflix Full-Stack',
        image: CloneNetflixImg,
        technologies: [
            {name: 'Next.js', icon: <Icon icon="simple-icons:nextdotjs"/>},
            {name: 'React', icon: <Icon icon="simple-icons:react"/>},
            {name: 'TypeScript', icon: <Icon icon="simple-icons:typescript"/>},
            {name: 'Tailwind CSS', icon: <Icon icon="simple-icons:tailwindcss"/>},
            {name: 'MongoDB', icon: <Icon icon="simple-icons:MongoDB"/>},
            {name: 'Axios', icon: <Icon icon="simple-icons:axios"/>},
        ],
        github: 'https://github.com/DarkMaxDev/frontend-next-streamapp',
        live: 'https://frontend-next-streamapp-s7dp.vercel.app/',
        labelTranslate: 'STREAMAPP'
    }
];
