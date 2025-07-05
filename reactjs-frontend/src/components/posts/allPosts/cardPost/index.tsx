import styles from "./index.module.css";

interface Arguments {
	index: number;
	redirectPage: (index: number) => void;
}

export default function CardPost({ index, redirectPage }: Arguments) {
	return (
		<div className={styles.post} key={index}>
			<img src="https://picsum.photos/200/200" alt="Image placeholder" />
			<div className={styles.textPost}>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
					magni nesciunt quae temporibus sequi nihil fugit ex quia debitis error
					minus porro suscipit velit assumenda obcaecati nam quasi. Fuga, quod.
				</p>
				<button onClick={() => redirectPage(index)}>Read more -&gt;</button>
			</div>
		</div>
	);
}
