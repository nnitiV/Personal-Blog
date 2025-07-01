import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Posts from "./components/posts";
import About from "./components/contact";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
