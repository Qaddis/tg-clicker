import { createSlice } from "@reduxjs/toolkit"

export interface IModalState {
	isShow: boolean
}

const initialState: IModalState = {
	isShow: false
}

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal: state => {
			state.isShow = !state.isShow
		}
	}
})

export const { actions, reducer } = modalSlice
