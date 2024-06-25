import { useActions } from "../../redux/hooks"
import styles from "./upgrades.module.scss"

export default function Upgrades() {
	const { toggleModal } = useActions()

	return (
		<section className={styles.upgrades}>
			<button onClick={() => toggleModal()} className={styles.button}>
				Upgrades
			</button>
		</section>
	)
}
