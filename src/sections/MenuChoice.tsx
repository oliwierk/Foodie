const MenuChoice: React.FC = () => {
	return (
		<div className='relative flex flex-wrap h-[150vh] w-full'>
			<div className='relative flex items-center justify-center w-full xl:w-1/2 h-1/2 bg-pizza bg-cover bg-top'>
				<div className='absolute inset-0 bg-yellow-300 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
				<p className='text-7xl xl:text-9xl uppercase z-10'>Pizza's</p>
			</div>
			<div className='relative flex items-center justify-center w-full xl:w-1/2 h-1/2 bg-burger bg-cover bg-center'>
				<div className='absolute inset-0 bg-pink-300 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
				<p className='text-7xl xl:text-9xl uppercase z-10'>Burgers</p>
			</div>
			<div className='relative flex items-center justify-center w-full xl:w-1/2 h-1/2 bg-drink bg-cover bg-center'>
				<div className='absolute inset-0 bg-indigo-300 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
				<p className='text-7xl xl:text-9xl uppercase z-10'>Drinks</p>
			</div>
			<div className='relative flex items-center justify-center w-full xl:w-1/2 h-1/2 bg-taco bg-cover bg-center'>
				<div className='absolute inset-0 bg-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
				<p className='text-7xl xl:text-9xl uppercase z-10'>Tacos</p>
			</div>
		</div>
	);
};

export default MenuChoice;
