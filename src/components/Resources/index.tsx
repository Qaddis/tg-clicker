import type { PropsWithChildren } from "react"
import styles from "./resources.module.scss"

interface ICard extends PropsWithChildren {
	icon: string
	alt?: string
}

export default function Resources() {
	return (
		<section className={styles.resources}>
			<div className={styles.row}>
				<Card icon="./Eraser.png" alt="Gen. Level">
					Lvl <span>2</span>
				</Card>
				<Card icon="./Weapon.png" alt="Power">
					235
				</Card>
			</div>
			<div className={styles.row}>
				<Card icon="./Enervite.png" alt="Enervite">
					117
				</Card>
				<Card icon="./Scrap.png" alt="Scrap">
					2.2<span>k</span>
				</Card>
			</div>
		</section>
	)
}

function Card({ children, icon, alt }: ICard) {
	return (
		<article className={styles.card}>
			<span className={styles.value}>{children}</span>
			<img className={styles.icon} src={icon} alt={alt} />
		</article>
	)
}
