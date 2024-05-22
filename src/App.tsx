import BurgerScreen from "./screens/BurgerScreen";
import PizzaScreen from "./screens/PizzaScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrinkScreen from "./screens/DrinkScreen";
import TacoScreen from "./screens/TacoScreen";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/burgers' element={<BurgerScreen />} />
				<Route path='/pizza' element={<PizzaScreen />} />
				<Route path='/drinks' element={<DrinkScreen />} />
				<Route path='/tacos' element={<TacoScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
