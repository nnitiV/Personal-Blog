import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Personal Blog</h1>
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
