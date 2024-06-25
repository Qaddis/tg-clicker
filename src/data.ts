interface IUpgrades {
	title: string
	description: string
	icon: string
	cost: number
	level: number
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
