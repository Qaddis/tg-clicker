import styles from "./footer.module.scss"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h2 className={styles.label}>New cycle in:</h2>
			<h3 className={styles.timer}>
				<span>5</span> days <span>9</span> hours
			</h3>
		</footer>
	)
}
