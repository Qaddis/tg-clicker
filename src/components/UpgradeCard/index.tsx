import styles from "./card.module.scss"

interface ICard {
	level: number
	title: string
}

export default function Card({ level, title }: ICard) {
	return (
		<article className={styles.card}>
			<div className={styles["title-sect"]}>
				<h2 className={styles.title}>{title}</h2>
			</div>
			<div className={styles.wrapper}>
				<div className={styles["level-sect"]}>
					<h3 className={styles.level}>
						Lvl <span>{level}</span>
					</h3>
				</div>
				<button className={styles.button}>+</button>
			</div>
		</article>
	)
}
