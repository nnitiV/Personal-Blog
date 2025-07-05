import AllPosts from "./allPosts";
import styles from "./index.module.css";
import Recents from "./recent";

interface Arguments {
	redirectPage: (index: number) => void;
}

export default function Posts({ redirectPage }: Arguments) {
	return (
		<main className={styles.posts}>
			<div className={styles.main}>
				<h1 className={styles.title}>Our blogs</h1>
				<AllPosts redirectPage={redirectPage} />
			</div>
			<Recents redirectPage={redirectPage} />
		</main>
	);
}
