import styles from "./index.module.css";

export default function Posts() {
	return (
		<main className={styles.posts}>
			<div className={styles.main}>
				<h1 className={styles.title}>Posts</h1>
			</div>
			<div className={styles.recent}>
				<div className={styles.title}>
					<h2>
						<i className="fa-solid fa-clock-rotate-left"></i>
						Recent posts
					</h2>
				</div>
			</div>
		</main>
	);
}
