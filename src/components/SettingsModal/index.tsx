import { AnimatePresence, motion } from "framer-motion"
import { useActions } from "../../hooks/useActions"
import { useAppSelector } from "../../redux/hooks"
import styles from "./settings.module.scss"

export default function Settings() {
	const isShow = useAppSelector(state => state.modal.settings)

	const settings = useAppSelector(state => state.settings)
	const { toggleModal, toggleSetting } = useActions()

	return (
		<AnimatePresence>
			{isShow && (
				<motion.div
					initial="hide"
					animate="show"
					exit="hide"
					variants={{
						hide: { opacity: 0 },
						show: { opacity: 1 }
					}}
					transition={{ duration: 0.25 }}
					onClick={() => {
						toggleModal("settings")
					}}
					className={styles.overlay}
				>
					<motion.section
						variants={{
							hide: { scale: 0.35 },
							show: { scale: 1 }
						}}
						transition={{ duration: 0.25 }}
						onClick={e => e.stopPropagation()}
						className={styles.settings}
					>
						<h2 className={styles.heading}>Settings</h2>
						<ul className={styles.list}>
							<li>
								<input
									type="checkbox"
									id="settings-box"
									className={styles.checkbox}
									checked={settings.hpInNumbers}
									onChange={() => toggleSetting("hpInNumbers")}
								/>
								<label htmlFor="settings-box">Show enemy HP in numbers</label>
							</li>
						</ul>
					</motion.section>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
