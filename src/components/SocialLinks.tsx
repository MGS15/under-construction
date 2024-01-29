import { ReactNode } from "react";
import { GitHub, Instagram, LinkedIn, TwitterX } from "./Socials";

const socials = {
	LinkedIn: {
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/elkhamlichi/",
		color: "[#0077B5]",
		SVG: <LinkedIn />
	},
	GitHub: {
		name: "GitHub",
		link: "https://github.com/MGS15",
		color: "[#1C2128]",
		SVG: <GitHub />
	},
	Twitter: {
		name: "Twitter / X",
		link: "https://x.com/05soufiane",
		color: "[#000000]",
		SVG: <TwitterX />
	},
	Instagram: {
		name: "Instagram",
		link: "https://instagram.com/soufiane.mgs",
		color: "[#E1306C]",
		SVG: <Instagram />
	}
}

const SocialLink = ({text, url, textColor, SocialSVG}:{text: string, url: string, textColor: string, SocialSVG: ReactNode}) => {
	return (
		<a href={url} target="_blank" className={`relative inline-flex items-center justify-center w-32 h-12 p-4 px-6 py-3 overflow-hidden font-medium text-${textColor}
			transition duration-300 ease-out border-2 border-${textColor}  rounded-none shadow-md group`}>
			<span className={`absolute inset-0 flex items-center justify-center w-full h-full text-gray-50 duration-300 -translate-x-full bg-${textColor}
				group-hover:translate-x-0 ease`}>
				{SocialSVG}
			</span>
			<span className={`absolute flex items-center justify-center w-full h-full text-${textColor} transition-all duration-300 transform group-hover:translate-x-full ease`}>
				{text}
			</span>
			<span className={`relative invisible`}>{text}</span>
		</a>
	)
}

const SocialLinks = () => {
	return (
		<div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-4">
			<SocialLink text={socials["LinkedIn"]["name"]} url={socials["LinkedIn"]["link"]} textColor={socials["LinkedIn"]["color"]} SocialSVG={socials["LinkedIn"]["SVG"]} />
			<SocialLink text={socials["GitHub"]["name"]} url={socials["GitHub"]["link"]} textColor={socials["GitHub"]["color"]} SocialSVG={socials["GitHub"]["SVG"]} />
			<SocialLink text={socials["Instagram"]["name"]} url={socials["Instagram"]["link"]} textColor={socials["Instagram"]["color"]} SocialSVG={socials["Instagram"]["SVG"]} />
			<SocialLink text={socials["Twitter"]["name"]} url={socials["Twitter"]["link"]} textColor={socials["Twitter"]["color"]} SocialSVG={socials["Twitter"]["SVG"]} />
		</div>
	)
}

export default SocialLinks;
