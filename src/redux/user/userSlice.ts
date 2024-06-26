import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUserState {
	name: string
	avatar: string
	force: number
	power: number
	armyLevel: number
	genLevel: number
	enervite: number
	scrap: number
}

const initialState: IUserState = {
	name: "Qaddis",
	avatar: "./avatar.png",
	force: 245,
	power: 20000,
	armyLevel: 5,
	genLevel: 2,
	enervite: 117,
	scrap: 2200
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		changeScrap: (
			state,
			action: PayloadAction<{ type: "inc" | "dec"; value: number }>
		) => {
			if (action.payload.type === "inc") {
				state.scrap += action.payload.value
			} else {
				state.scrap -= action.payload.value
			}
		},
		changeEnervite: (
			state,
			action: PayloadAction<{ type: "inc" | "dec"; value: number }>
		) => {
			if (action.payload.type === "inc") {
				state.enervite += action.payload.value
			} else {
				state.enervite -= action.payload.value
			}
		},
		changePower: (
			state,
			action: PayloadAction<{ type: "inc" | "dec"; value: number }>
		) => {
			if (action.payload.type === "inc") {
				state.power += action.payload.value
			} else {
				state.power -= action.payload.value
			}
		},
		levelUp: (state, action: PayloadAction<"gen" | "army">) => {
			if (action.payload === "gen") {
				state.genLevel += 1
			} else {
				state.armyLevel += 1
			}
		},
		forceUp: (state, action: PayloadAction<number>) => {
			state.force += action.payload
		}
	}
})

export const { actions, reducer } = userSlice
