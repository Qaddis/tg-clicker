import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IModalState {
	upgrades: boolean
	settings: boolean
}

const initialState: IModalState = {
	settings: false,
	upgrades: false
}

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal: (state, actions: PayloadAction<keyof IModalState>) => {
			if (actions.payload === "upgrades") {
				state.upgrades = !state.upgrades
			} else {
				state.settings = !state.settings
			}
		}
	}
})

export const { actions, reducer } = modalSlice
