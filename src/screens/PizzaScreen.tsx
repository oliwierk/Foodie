import { Link } from "react-router-dom";

const PizzaScreen: React.FC = () => {
	return (
		<div className='relative flex justify-center w-full h-full bg-orange-100 '>
			<div className='flex flex-col w-[90%]'>
				<Link
					to='/'
					className='flex items-center justify-center gap-2 xl:block text-5xl sm:text-6xl md:text-8xl xl:text-[10rem] font-bold uppercase tracking-tighter text-rose-500 z-10'
				>
					foodie <span className='text-rose-700 underline'> pizza</span>
				</Link>
				<div className='flex flex-wrap w-full h-full gap-4 mt-[10%] xl:mt-[5%]'>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[80vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Pikantny sos pomidorowy, mozzarella, pokruszone Hot Cheetos,
							plastry jalapeño, kawałki pepperoni, posypane dodatkową warstwą
							Cheetos.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaScreen;
