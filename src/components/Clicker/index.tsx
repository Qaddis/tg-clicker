import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import styles from "./clicker.module.scss"

interface IProps {
	target: string
	image: string
	health: number
	enemyKilled: () => void
}

export default function Clicker({
	target,
	health,
	image,
	enemyKilled
}: IProps) {
	const user = useAppSelector(state => state.user)

	const [realHP, setRealHP] = useState<number>(health)
	const [isLight, setIsLight] = useState<boolean>(false)

	const setShoot = (): void => {
		setIsLight(true)
		setTimeout(() => {
			setIsLight(false)
		}, 200)
	}

	const handleClick = (): void => {
		setRealHP(prevHP => prevHP - user.force)
		setShoot()
	}

	useEffect(() => {
		if (realHP <= 0) {
			setRealHP(prevHP => prevHP - user.force)
			enemyKilled()
		}
	}, [realHP, enemyKilled, user.force])

	useEffect(() => {
		setRealHP(health)
	}, [health])

	return (
		<section className={styles.clicker}>
			<div className={styles.name}>
				<h2 className={styles.label}>
					<span>Target</span>:
				</h2>
				<h3 className={styles["target-name"]}>{target}</h3>
			</div>

			<motion.div
				initial={false}
				animate={{
					boxShadow: isLight
						? "0 0 25px 3px var(--accent)"
						: "0 0 10px 1px var(--accent)"
				}}
				className={styles.image}
			>
				<img onClick={handleClick} src={image} alt="Static load error" />
			</motion.div>

			<div className={styles.health}>
				<h2 className={styles.label}>
					Target <span>Health</span>: {realHP <= 0 ? <i>0</i> : realHP}
				</h2>

				<div className={styles["health-bar"]}>
					<motion.div
						initial={false}
						animate={{
							width: realHP <= 0 ? "0%" : `${100 * (realHP / health)}%`
						}}
						transition={{ duration: 0.15 }}
						className={styles["health-thumb"]}
					></motion.div>
				</div>
			</div>
		</section>
	)
}
