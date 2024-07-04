import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface ISettings {
	hpInNumbers: boolean
	lightTheme: boolean
}

const initialState: ISettings = {
	hpInNumbers: false,
	lightTheme: false
}

const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleSetting: (state, actions: PayloadAction<keyof ISettings>) => {
			state[actions.payload] = !state[actions.payload]
		}
	}
})

export const { actions, reducer } = settingsSlice
