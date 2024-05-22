import { Link } from "react-router-dom";

const PizzaScreen: React.FC = () => {
	return (
		<div className='relative w-full h-[200vh] bg-orange-100'>
			<Link
				to='/'
				className='absolute top-4 xl:top-0 left-4 xl:left-10 text-7xl xl:text-[16rem] font-bold uppercase tracking-tighter text-rose-500 z-10'
			>
				foodie <span className='text-rose-700 underline'> pizza</span>
			</Link>

			<div className='absolute top-[20%] flex flex-wrap h-[150vh] w-full px-14'>
				<div className='flex flex-col items-center h-1/2 w-1/3 gap-2 p-8'>
					<div className='w-2/3 h-1/2 bg-pizzaCheese bg-center bg-cover rounded-full mb-8'></div>
					<p className='text-5xl uppercase'>Pizza Margharita</p>
					<p className='text-rose-500 text-6xl'>40 PLN</p>
					<p className='text-center'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sint
						ad, sed ipsum consectetur eos sit id aspernatur illo earum magnam
						aperiam tenetur, doloremque alias officia, beatae necessitatibus
						officiis? Delectus?
					</p>
				</div>
			</div>
		</div>
	);
};

export default PizzaScreen;
