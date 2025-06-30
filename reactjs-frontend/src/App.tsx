import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
