import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export default function Header() {
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsFixed(window.scrollY > 50); // Activate when scrolled 50px
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header className={`${styles.header} ${isFixed ? styles.fixed : ""}`}>
			<h1>
				<Link to="/">Personal Blog</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Welcome!</Link>
					</li>
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
