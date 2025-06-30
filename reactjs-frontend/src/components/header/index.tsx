import styles from "./index.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Personal Blog</h1>
			<nav>
				<ul>
					<li>Home</li>
					<li>Categories</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
