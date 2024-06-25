import { AnimatePresence, motion } from "framer-motion"
import { upgrades as upg } from "../../data"
import { useActions, useAppSelector } from "../../redux/hooks"
import Card from "../UpgradeCard"
import styles from "./modal.module.scss"

export default function UpgradesModal() {
	const isShow = useAppSelector(state => state.modal.isShow)
	const { toggleModal } = useActions()

	return (
		<AnimatePresence>
			{isShow && (
				<motion.div
					className={styles.overlay}
					variants={{
						show: { opacity: 1 },
						hide: { opacity: 0 }
					}}
					transition={{ duration: 0.35 }}
					initial="hide"
					animate="show"
					exit="hide"
					onClick={() => toggleModal()}
				>
					<motion.section
						className={styles.modal}
						variants={{
							show: { y: 0 },
							hide: { y: "100%" }
						}}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						onClick={e => e.stopPropagation()}
					>
						<h2 className={styles.heading}>Upgrades</h2>

						<button
							onClick={() => toggleModal()}
							className={styles["close-btn"]}
						>
							×
						</button>

						<ul className={styles.upgrades}>
							{upg.map(item => (
								<Card level={item.level} title={item.title} key={item.title} />
							))}
						</ul>
					</motion.section>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
