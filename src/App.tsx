import Footer from "./components/AppFooter"
import Header from "./components/AppHeader"
import Clicker from "./components/Clicker"
import Level from "./components/Level"
import Resources from "./components/Resources"
import Upgrades from "./components/Upgrades"

function App() {
	return (
		<>
			<Header />

			<main className="main">
				<div>
					<Level />
					<hr />
					<Resources />

					<Clicker
						target="Stormtrooper"
						image="./Default_1.png"
						health={2400}
					/>
				</div>

				<Upgrades />
			</main>

			<Footer />
		</>
	)
}

export default App
