const HeroSection: React.FC = () => {
	return (
		<div className='relative flex flex-col xl:flex-row h-[100vh] w-full'>
			<h1 className='absolute top-4 xl:top-0 left-4 xl:left-10 text-8xl xl:text-[24rem] font-bold uppercase tracking-tighter text-rose-500 z-10'>
				foodie
			</h1>
			<div className='relative flex flex-row w-full h-1/2 xl:w-1/2 xl:h-full bg-orange-100'>
				<div className='w-1/2'></div>
				<div className='relative w-1/2'>
					<p className='absolute bottom-40 right-8'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
						nisi quod at dignissimos explicabo quam veniam nostrum deleniti,
						delectus modi!
					</p>
					<a
						href=''
						className='text-7xl absolute bottom-14 left-0 uppercase underline text-black hover:blur-sm transition-all duration-300'
					>
						See menu
					</a>
				</div>
			</div>
			<div className='w-full h-1/2 xl:w-1/2 xl:h-full bg-herobg bg-cover blur-sm hover:blur-0 transition-all duration-200'></div>
		</div>
	);
};

export default HeroSection;
