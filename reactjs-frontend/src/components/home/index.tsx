import styles from "./index.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Welcome to my blog!</h1>
			<div className={styles.text}>
				<p>
					This is a project I'm creating right now to test my dev skills in web
					project.
				</p>
				<p>
					Also I'm learning other stuff like game dev, ai, cloud, python, etc...
				</p>
				<p>I'm kind of a fan of learning stuff, not going to lie.</p>
			</div>
		</main>
	);
}
