// import MainButton from "./MainButton";
import { useEffect, useRef, useState } from "react";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import SocialLinks from "./SocialLinks";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const MainComponent = () => {

	const appRef = useRef<HTMLDivElement>(null)
	const [init, setInit] = useState(false);

	useEffect(() => {

		if (appRef.current) {
			initParticlesEngine(async (engine) => {
				await loadFull(engine);
			}).then(() => {
				setInit(true);
			  })
		}

	}, [])

	return (
		<div className={`flex flex-col items-center justify-center gap-y-6`}>
			<MainHeading />
			<Paragraph />
			<SocialLinks />
			{/* <MainButton text="hello" url={`#`} /> */}
		</div>
	)
}

export default MainComponent;