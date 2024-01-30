import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import SocialLinks from "./SocialLinks";

const MainComponent = () => {

	return (
		<div className={`flex flex-col items-center justify-center gap-y-6`}>
			<MainHeading />
			<Paragraph />
			<SocialLinks />
		</div>
	)
}

export default MainComponent;