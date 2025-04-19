import smLogisticImg from "../assets/projects/sm-logistic.png"
import alpin from "../assets/projects/alpin.png"
import knapik from "../assets/projects/knapik.png"

export const navLinks = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];

const projects = [
  {
    id:1,
    img:smLogisticImg,
    title:"Sm-Logistic",
    description:"A modern and responsive website for a logistics company, designed for clear service presentation and smooth navigation.",
    tech:["cms","css"],
    link:"https://www.smlogistic.com.pl/"
  },
  {
    id:2,
    img:alpin,
    title:"Alpin wesele w Szczyrku",
    description:"A clean and elegant website for a wedding venue, focused on showcasing the location’s charm and offering intuitive user experience.",
    tech:["cms","css"],
    link:"https://www.weselewszczyrku.pl/"
  },
  {
    id:3,
    img:knapik,
    title:"Kancelaria Adwokacka",
    description:"A professional website for a law office, emphasizing trust and credibility through minimalist design and clear content structure.",
    tech:["cms","css"],
    link:"https://www.skgkancelarie.pl/"
  }
];
const about = "Hey! I'm Bartek, a front-end developer focused on building modern, intuitive, and responsive user interfaces. I specialize in crafting clean and performant websites using technologies like React, Tailwind CSS, and modern JavaScript. Whether it's turning a static design into a dynamic experience or experimenting with smooth animations and interactions — I’m all about delivering thoughtful and polished solutions. I’m constantly learning, always curious, and genuinely enjoy solving problems through code. My approach combines a strong visual sense with a deep respect for usability and performance. Outside of coding, I love exploring new ideas, tinkering with visuals, and pushing my skills with each new project."
export {projects ,about}