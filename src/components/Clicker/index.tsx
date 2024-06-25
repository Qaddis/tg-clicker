"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import styles from "./clicker.module.scss"

interface IProps {
	target: string
	image: string
	health: number
}

export default function Clicker({ target, health, image }: IProps) {
	const fullHP: number = health
	const [realHP, setRealHP] = useState<number>(fullHP)
	const [isLight, setIsLight] = useState<boolean>(false)

	const setShoot = (): void => {
		setIsLight(true)
		setTimeout(() => {
			setIsLight(false)
		}, 200)
	}

	const handleClick = (): void => {
		setRealHP(realHP - 235)
		setShoot()
	}

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
					Target <span>Health</span>:
				</h2>

				<div className={styles["health-bar"]}>
					<motion.div
						initial={false}
						animate={{
							width: realHP <= 0 ? "0%" : `${100 * (realHP / fullHP)}%`
						}}
						transition={{ duration: 0.15 }}
						className={styles["health-thumb"]}
					></motion.div>
				</div>
			</div>
		</section>
	)
}
