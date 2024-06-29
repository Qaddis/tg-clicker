export interface IUpgrades {
	title: string
	description: string
	icon: string
	cost: number
	level: number
}

export interface IEnemies {
	name: string
	image: string
	health: number
}

export const upgrades: IUpgrades[] = [
	{
		title: "Flash Suppressor",
		description: "",
		cost: 1200,
		icon: "",
		level: 4
	},
	{
		title: "New Exoskeletons",
		description: "",
		cost: 25000,
		icon: "",
		level: 12
	},
	{
		title: "Slogans on Billboards",
		description: "",
		cost: 10200,
		icon: "",
		level: 8
	}
]

export const enemies: IEnemies[] = [
	{
		name: "Stormtrooper",
		image: "./Default_1.png",
		health: 1
	},
	{
		name: "Sniper",
		image: "./Default_2.png",
		health: 0.5
	},
	{
		name: "Juggernaut",
		image: "./Default_3.png",
		health: 1.5
	}
]
