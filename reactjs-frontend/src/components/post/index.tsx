import CardPost from "../posts/allPosts/cardPost";
import styles from "./index.module.css";

interface Arguments {
	redirectPage: (index: number) => void;
}

export default function Post({ redirectPage }: Arguments) {
	return (
		<div className={`baseDiv ${styles.singlePost}`}>
			<div className={styles.post}>
				<img src="https://picsum.photos/400/200" alt="Placeholder image" />
				<h2>Title of the post</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					ducimus possimus nihil consequatur officia voluptatibus ea laudantium.
					Ut ex laboriosam praesentium consequatur eos itaque expedita. Delectus
					quis laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus
					possimus nihil consequatur officia voluptatibus ea laudantium. Ut ex
					laboriosam praesentium consequatur eos itaque expedita. Delectus quis
					laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					ducimus possimus nihil consequatur officia voluptatibus ea laudantium.
					Ut ex laboriosam praesentium consequatur eos itaque expedita. Delectus
					quis laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus
					possimus nihil consequatur officia voluptatibus ea laudantium. Ut ex
					laboriosam praesentium consequatur eos itaque expedita. Delectus quis
					laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					ducimus possimus nihil consequatur officia voluptatibus ea laudantium.
					Ut ex laboriosam praesentium consequatur eos itaque expedita. Delectus
					quis laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus
					possimus nihil consequatur officia voluptatibus ea laudantium. Ut ex
					laboriosam praesentium consequatur eos itaque expedita. Delectus quis
					laudantium saepe. Ex? Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Ab perspiciatis libero dolores. Temporibus,
					reprehenderit ab. Voluptatibus molestiae minus odio sit, veritatis
					suscipit corporis officiis ab rem perspiciatis ex sunt dolor.
				</p>
			</div>
			<hr />
			<div className={styles.recommendedPostsDiv}>
				<h3>Recommended posts</h3>
				<div className={styles.recommendedPosts}>
					{Array(3)
						.fill(1)
						.map((_, index) => (
							<CardPost key={index} index={index} redirectPage={redirectPage} />
						))}
				</div>
			</div>
		</div>
	);
}
