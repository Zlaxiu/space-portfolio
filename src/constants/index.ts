import smLogisticImg from "../assets/projects/sm-logistic.png";
import alpin from "../assets/projects/alpin.png";
import realizacje from "../assets/projects/realizacje.png";
import rynny from "../assets/projects/rynny.png";
import pozyczki from "../assets/projects/pozyczki.png";
import dachowki from "../assets/projects/dachowki.png";
import astar from "../assets/projects/astar.png";
import zlobki from "../assets/projects/zlobki.png";
import gops from "../assets/projects/gops.png";

import type { Section } from "../App";

export type NavLink = {
	id: string;
	title: Section;
};
let idProject: number = 0;
export type Project = {
	id: number;
	img: string;
	title: string;
	description: string;
	tech: string[];
	link: string;
};
export const navLinks: NavLink[] = [
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
	},
];

const projects: Project[] = [
	{
		id: idProject++,
		img: smLogisticImg,
		title: "Sm-Logistic",
		description:
			"A modern and responsive website for a logistics company, designed for clear service presentation and smooth navigation.",
		tech: ["cms", "css"],
		link: "https://www.smlogistic.com.pl/",
	},
	{
		id: idProject++,
		img: alpin,
		title: "Alpin wesele w Szczyrku",
		description:
			"A clean and elegant website for a wedding venue, focused on showcasing the location’s charm and offering intuitive user experience.",
		tech: ["cms", "css"],
		link: "https://www.weselewszczyrku.pl/",
	},
	{
		id: idProject++,
		img: realizacje,
		title: "Malé a Velké Rekonstrukce",
		description:
			"A robust and trustworthy website for a renovation company, highlighting craftsmanship, reliability, and a clear service offer through a clean, professional layout.",
		tech: ["wordpress", "css", "php"],
		link: "https://male-a-velke-rekonstrukce.cz/",
	},
	{
		id: idProject++,
		img: rynny,
		title: "Wymiana i naprawa rynien",
		description:
			"A responsive website for a gutter replacement and repair service, designed to clearly present services, build trust with clients, and ensure smooth navigation.",
		tech: ["wordpress", "css", "php"],
		link: "https://wymiana-rynien.pl/",
	},
	{
		id: idProject++,
		img: pozyczki,
		title: "Pożyczka na kształcenie",
		description:
			"A clean and responsive website for an educational loan program, designed to present information clearly and provide an intuitive experience for users.",
		tech: ["wordpress", "css", "php"],
		link: "https://pozyczkanaksztalcenie.pl/",
	},
	{
		id: idProject++,
		img: dachowki,
		title: "Malowanie i oczyszczanie dachówek",
		description:
			"A website for a roofing company specializing in cleaning tiles, designed to showcase services and facilitate user navigation.",
		tech: ["wordpress", "css", "php"],
		link: "https://malowanie-dachowki.pl/",
	},
	{
		id: idProject++,
		img: astar,
		title: "Professional diamond tools",
		description:
			"A modern corporate website for a manufacturer of professional diamond tools, focused on clear product presentation and easy navigation for industry clients.",
		tech: ["wordpress", "css", "php"],
		link: "https://astar-diamond-tools.com/",
	},
	{
		id: idProject++,
		img: zlobki,
		title: "Żłobki w gminie Tomice",
		description:
			"An informative and user-friendly website for public nurseries, designed to help parents quickly access key information and recruitment details.",
		tech: ["wordpress", "css", "php"],
		link: "https://zlobki.tomice.pl/",
	},
	{
		id: idProject++,
		img: gops,
		title: "Gminny Ośrodek Pomocy Społecznej",
		description:
			"A clear and accessible website for a public social welfare institution, providing residents with easy access to support programs and essential services.",
		tech: ["wordpress", "css", "php"],
		link: "https://gops.tomice.pl/",
	},
];
const about: string =
	"Hey! I'm Bartek, a front-end developer focused on building modern, intuitive, and responsive user interfaces. I specialize in crafting clean and performant websites using technologies like React, Tailwind CSS, and modern JavaScript. Whether it's turning a static design into a dynamic experience or experimenting with smooth animations and interactions — I’m all about delivering thoughtful and polished solutions. I’m constantly learning, always curious, and genuinely enjoy solving problems through code. My approach combines a strong visual sense with a deep respect for usability and performance. Outside of coding, I love exploring new ideas, tinkering with visuals, and pushing my skills with each new project.";
export { projects, about };
