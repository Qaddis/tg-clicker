import { useActions } from "../../hooks/useActions"
import styles from "./upgrades.module.scss"

export default function Upgrades() {
	const { toggleModal } = useActions()

	return (
		<section className={styles.upgrades}>
			<button onClick={() => toggleModal("upgrades")} className={styles.button}>
				Upgrades
			</button>
		</section>
	)
}
