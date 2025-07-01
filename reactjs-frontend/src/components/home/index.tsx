import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<i className="fa-regular fa-lightbulb"></i>
				<h1>Welcome to my blog</h1>
				<i className="fa-regular fa-lightbulb"></i>
			</div>
			<div className={styles.text}>
				<p className={styles.warning}>Under development!</p>
				<p>
					I'm building this project to level up my web dev skills and have some
					fun while I'm at it. When I'm not coding this, you'll find me
					exploring game development, tinkering with AI, playing with cloud
					stuff, and learning Python. Honestly, I just love diving into all
					kinds of tech!
				</p>
			</div>
			<Link to="/posts">
				<p>See all posts</p>
			</Link>
		</main>
	);
}
