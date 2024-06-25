import styles from "./header.module.scss"

export default function Header() {
	return (
		<header className={styles.header}>
			<section className={styles.user}>
				<img className={styles.avatar} src="./avatar.png" alt="Avatar" />

				<h1 className={styles.username}>Qaddis</h1>
			</section>

			<button className={styles["settings-btn"]}>
				<svg>
					<use xlinkHref="#settingsIcon"></use>
				</svg>
			</button>
		</header>
	)
}
