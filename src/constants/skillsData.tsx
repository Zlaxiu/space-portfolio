import {SiFramer, SiAdobephotoshop, SiFigma, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiHtml5, SiCss3, SiVite, SiTypescript} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import type {JSX} from 'react'

export interface Skill{
    icon:JSX.Element
    label: string
    description: string
}
export const skills:Skill[] = [
  {
    icon: <SiHtml5 className="text-orange-500" />,
    label: "HTML5",
    description: "Semantic structure and web accessibility",
  },
  {
    icon: <SiCss3 className="text-blue-600" />,
    label: "CSS3",
    description: "Responsive layouts, Flexbox, Grid",
  },
  {
    icon: <SiJavascript className="text-yellow-400" />,
    label: "JavaScript",
    description: "DOM manipulation, ES6+, async programming",
  },
  {
    icon: <SiReact className="text-cyan-400" />,
    label: "React",
    description: "Components, hooks, and state management",
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    label: "Tailwind CSS",
    description: "Utility-first CSS for fast UI development",
  },
  {
    icon: <SiGithub className="text-white" />,
    label: "GitHub",
    description: "Version control and collaboration with Git",
  },
  {
    icon: <FaGitAlt className="text-orange-600" />,
    label: "Git",
    description: "Version control, and managing code history effectively",
  },
  {
    icon: <SiFramer className="text-white" />,
    label: "Framer Motion",
    description: "Smooth animations and transitions in React",
  },
  {
    icon: <SiFigma className="text-pink-500" />,
    label: "Figma",
    description: "UI/UX design, prototyping, and collaboration",
  },
  {
    icon: <BiLogoVisualStudio className="text-sky-400" />,
    label: "VSC",
    description: "Efficient code editing with extensions and debugging tools",
  },
  {
    icon: <SiAdobephotoshop className="text-blue-800" />,
    label: "Photoshop",
    description: "Designing sleek UI visuals, image editing",
  },
  {
    icon: <SiVite className="text-purple-400" />,
    label: "Vite",
    description: "Lightning-fast build tool and dev server",
  },
  {
    icon: <SiTypescript className="text-blue-500" />,
    label: "TypeScript",
    description: "Strongly typed JavaScript for safer and scalable React development",
  },
];
