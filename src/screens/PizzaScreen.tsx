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
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Cheeto Lava
						</p>
						<p className='text-neutral-200 text-6xl'>40 PLN</p>
						<p className='text-neutral-200 text-center'>
							Ostra i chrupiąca, idealna dla miłośników intensywnych smaków i
							pikantnych wrażeń. Pikantny sos pomidorowy, mozzarella, pokruszone
							Hot Cheetos, plastry jalapeño, kawałki pepperoni, posypane
							dodatkową warstwą Cheetos.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Pizza Złoty Midas
						</p>
						<p className='text-neutral-200 text-6xl'>45 PLN</p>
						<p className='text-neutral-200 text-center'>
							Luksusowa kombinacja kremowego sosu Alfredo z dodatkiem
							błyszczącego złota, dającego wyjątkowy efekt wizualny i smakowy.
							Sos Alfredo, mozzarella, kawałki kurczaka, cebula, posypana
							jadalnym złotem i płatkami chili.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Oceaniczny Raj
						</p>
						<p className='text-neutral-200 text-6xl'>50 PLN</p>
						<p className='text-neutral-200 text-center'>
							Niezwykła pizza o głębokim, morskim aromacie z wyraźnym,
							śródziemnomorskim charakterem. Czarny sos na bazie atramentu z
							kałamarnicy, ser feta, krewetki, oliwki, czerwona cebula, posypane
							świeżą rukolą.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Ognista Mango
						</p>
						<p className='text-neutral-200 text-6xl'>38 PLN</p>
						<p className='text-neutral-200 text-center'>
							Słodko-ostra kombinacja, która zaskakuje połączeniem egzotycznego
							mango i ognistego chili. Sos pomidorowy, mozzarella, kawałki
							świeżego mango, chili, czerwona cebula, kawałki boczku.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Sernikoza
						</p>
						<p className='text-neutral-200 text-6xl'>42 PLN</p>
						<p className='text-neutral-200 text-center'>
							Idealna propozycja dla amatorów słodkich i wyrazistych połączeń;
							pizza, która smakuje jak deser. Kremowy sos sernikowy jako baza,
							mozzarella, truskawki, posypka z kruszonych herbatników, polane
							syropem truskawkowym.
						</p>
					</div>
					<div className='flex flex-col items-center flex-grow md:w-1/3 w-full xl:w-1/4 h-[90vh] xl:h-[70vh] bg-red-900 rounded-3xl p-6 gap-4 xl:gap-6'>
						<div className='w-64 h-64 rounded-full bg-pizzaCheese bg-cover bg-center'></div>
						<p className='text-neutral-200 text-3xl tracking-widest mt-2 text-center'>
							Tajemniczy Wschód
						</p>
						<p className='text-neutral-200 text-6xl'>46 PLN</p>
						<p className='text-neutral-200 text-center'>
							Egzotyczna pizza z orientalnym twistem, doskonała dla tych, którzy
							lubią połączenie słodkich i pikantnych nut. Sos curry, mozzarella,
							kawałki pieczonego kurczaka, ananas, czerwona papryka, posypka z
							orzechów nerkowca.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaScreen;
