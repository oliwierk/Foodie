import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
	return (
		<div className='relative flex flex-wrap h-screen w-full'>
			<Link
				to='/'
				className='absolute top-4 xl:top-0 left-4 xl:left-10 text-8xl xl:text-[24rem] font-bold uppercase tracking-tighter text-rose-500 z-10'
			>
				foodie
			</Link>
			<div className='relative flex flex-row w-full h-1/2 xl:w-1/2 xl:h-full bg-orange-100'>
				<p className='absolute bottom-1/3 xl:bottom-40 left-4 xl:left-1/2 text-base xl:text-md text-rose-400 mr-4 lg:mr-0'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi
					quod at dignissimos explicabo quam veniam nostrum deleniti, delectus
					modi!
				</p>
				<a
					href='#menu'
					className='text-4xl xl:text-7xl absolute bottom-10 xl:bottom-14 left-1/2 uppercase underline hover:blur-sm transition-all duration-300 text-rose-500'
				>
					See menu
				</a>
			</div>
			<div className='w-full h-1/2 xl:w-1/2 xl:h-full bg-herobg bg-cover transition-all duration-200'></div>
		</div>
	);
};

export default HeroSection;
