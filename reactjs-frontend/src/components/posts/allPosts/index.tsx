import CardPost from "./cardPost";
import styles from "./index.module.css";

interface Arguments {
	redirectPage: (index: number) => void;
}

export default function AllPosts({ redirectPage }: Arguments) {
	return (
		<div className={styles.allPosts}>
			{Array(5)
				.fill(1)
				.map((_, index) => (
					<CardPost index={index} redirectPage={redirectPage} />
				))}
		</div>
	);
}
