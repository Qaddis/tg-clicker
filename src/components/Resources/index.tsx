import type { PropsWithChildren } from "react"
import { useConvertValue } from "../../hooks/useConvertValue"
import { useAppSelector } from "../../redux/hooks"
import styles from "./resources.module.scss"

interface ICard extends PropsWithChildren {
	icon: string
	html?: string
	alt?: string
}

export default function Resources() {
	const data = useAppSelector(state => state.user)

	return (
		<section className={styles.resources}>
			<div className={styles.row}>
				<Card icon="./Eraser.png" alt="Gen. Level">
					Lvl <span>{data.genLevel}</span>
				</Card>
				<Card
					icon="./Weapon.png"
					alt="Force"
					html={useConvertValue(data.force)}
				/>
			</div>
			<div className={styles.row}>
				<Card
					icon="./Enervite.png"
					alt="Enervite"
					html={useConvertValue(data.enervite)}
				/>
				<Card
					icon="./Scrap.png"
					html={useConvertValue(data.scrap)}
					alt="Scrap"
				/>
			</div>
		</section>
	)
}

function Card({ children, icon, alt, html }: ICard) {
	return (
		<article className={styles.card}>
			{html ? (
				<span
					dangerouslySetInnerHTML={{ __html: html }}
					className={styles.value}
				/>
			) : (
				<span className={styles.value}>{children}</span>
			)}
			<img className={styles.icon} src={icon} alt={alt} />
		</article>
	)
}
