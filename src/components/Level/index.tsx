import styles from "./level.module.scss"

export default function Level() {
	return (
		<section>
			<div className={styles["exp-bar"]}>
				<div style={{ width: "65%" }} className={styles["exp-thumb"]}></div>
			</div>

			<div className={styles.wrapper}>
				<h2 className={styles.level}>
					Level <span>5</span>
				</h2>

				<h2 className={styles.progress}>
					20<span>k</span> <i>/</i> 30<span>k</span>
					<img src="./Soldier.png" alt="Power" />
				</h2>
			</div>
		</section>
	)
}
