import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Posts from "./components/posts";
import About from "./components/about";
import Post from "./components/post";
import "./base.css";

function App() {
	const redirectPage = (id: number) => {
		window.location.href = "/post/" + id;
	};

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts" element={<Posts redirectPage={redirectPage} />} />
				<Route
					path="/post/:id"
					element={<Post redirectPage={redirectPage} />}
				/>
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
