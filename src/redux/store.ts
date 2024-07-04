import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { reducer as modalSlice } from "./modal/modalSlice"
import { reducer as settingsReducer } from "./settings/settingsSlice"
import { reducer as userReducer } from "./user/userSlice"

const reducers = combineReducers({
	user: userReducer,
	modal: modalSlice,
	settings: settingsReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
