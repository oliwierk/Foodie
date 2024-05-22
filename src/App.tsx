import BurgerScreen from "./screens/BurgerScreen";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/burgers' element={<BurgerScreen />} />
			</Routes>
		</Router>
	);
}

export default App;
