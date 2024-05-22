import HeroSection from "../sections/HeroSection";
import MenuChoice from "../sections/MenuChoice";

const HomeScreen: React.FC = () => {
	return (
		<div className='h-full'>
			<HeroSection></HeroSection>
			<MenuChoice></MenuChoice>
		</div>
	);
};

export default HomeScreen;
