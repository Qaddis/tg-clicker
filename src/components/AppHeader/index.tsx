import { useAppSelector } from "../../redux/hooks"
import styles from "./header.module.scss"

export default function Header() {
	const data = useAppSelector(state => state.user)

	return (
		<header className={styles.header}>
			<section className={styles.user}>
				<img className={styles.avatar} src={data.avatar} alt="Avatar" />

				<h1 className={styles.username}>{data.name}</h1>
			</section>

			<button className={styles["settings-btn"]}>
				<svg>
					<use xlinkHref="#settingsIcon"></use>
				</svg>
			</button>
		</header>
	)
}
