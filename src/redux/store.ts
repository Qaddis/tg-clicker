import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { reducer as modalSlice } from "./modal/modalSlice"
import { reducer as userReducer } from "./user/userSlice"

const reducers = combineReducers({
	user: userReducer,
	modal: modalSlice
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
