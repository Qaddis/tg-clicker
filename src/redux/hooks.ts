import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

import { actions as modalActions } from "./modal/modalSlice"
import { actions as userActions } from "./user/userSlice"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

const combineActions = {
	...userActions,
	...modalActions
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(combineActions, dispatch), [dispatch])
}
