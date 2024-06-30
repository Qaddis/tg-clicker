import Footer from "./components/AppFooter"
import Header from "./components/AppHeader"
import Clicker from "./components/Clicker"
import Level from "./components/Level"
import Resources from "./components/Resources"
import Upgrades from "./components/Upgrades"
import UpgradesModal from "./components/UpgradesModal"

import { useEffect, useState } from "react"
import { enemies, type IEnemies } from "./data"

function App() {
	const [enemy, setEnemy] = useState<IEnemies>()

	const enemyKilled = (): void => {
		const newEnemy: IEnemies =
			enemies[Math.floor(Math.random() * enemies.length)]

		setEnemy(newEnemy)
	}

	useEffect(() => {
		enemyKilled()
	})

	return (
		<>
			<Header />

			<main className="main">
				<div>
					<Level />
					<hr />
					<Resources />

					<Clicker
						target={enemy ? enemy.name : "Loading..."}
						image={enemy ? enemy.image : "Loading..."}
						health={enemy ? enemy.health * 3000 : 1}
						enemyKilled={enemyKilled}
					/>
				</div>

				<Upgrades />
			</main>

			<UpgradesModal />

			<Footer />
		</>
	)
}

export default App
