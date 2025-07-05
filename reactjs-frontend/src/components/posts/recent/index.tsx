import styles from "./index.module.css";

interface Arguments {
	redirectPage: (index: number) => void;
}

export default function Recents({ redirectPage }: Arguments) {
	return (
		<div className={styles.recent}>
			<div className={styles.title}>
				<h2>
					<img src="recent-pixel.png" alt="Recent img" />
					Recent posts
				</h2>
			</div>
			{Array(5)
				.fill(1)
				.map((_, index) => (
					<div
						className={styles.recentPost}
						key={index}
						onClick={() => redirectPage(1)}
					>
						<div className={styles.post}>
							<img
								src="https://picsum.photos/200/200"
								alt="Image placeholder"
								className={styles.img}
							/>
							<div className={styles.aboutPost}>
								<h3>Post title</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
									in? Laborum nostrum hic aspernatur, accusantium earum labore
									illo deserunt voluptates quod illum libero magnam, sunt odio
									placeat non itaque corrupti.
								</p>
								<p className={styles.date}>12/05/2002 | 17:36</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
