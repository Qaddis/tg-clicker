import { motion } from "framer-motion"
import { useConvertValue } from "../../hooks/useConvertValue"
import { useAppSelector } from "../../redux/hooks"
import styles from "./level.module.scss"

export default function Level() {
	const data = useAppSelector(state => state.user)

	const reqPower = 30000
	const reqPowerS = useConvertValue(reqPower)
	const userPower = useConvertValue(data.power)

	const getProgress = (): string => {
		return `${userPower} <i>/</i> ${reqPowerS}`
	}

	const getWidth = (): string => {
		return `${100 * (data.power / reqPower)}%`
	}

	return (
		<section>
			<div className={styles["exp-bar"]}>
				<motion.div
					initial={false}
					animate={{ width: getWidth() }}
					className={styles["exp-thumb"]}
				></motion.div>
			</div>

			<div className={styles.wrapper}>
				<h2 className={styles.level}>
					Level <span>{data.armyLevel}</span>
				</h2>

				<h2 className={styles.progress}>
					<p dangerouslySetInnerHTML={{ __html: getProgress() }} />
					<img src="./Soldier.png" alt="Power" />
				</h2>
			</div>
		</section>
	)
}
