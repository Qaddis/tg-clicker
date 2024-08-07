import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useAppDispatch } from "../redux/hooks"

import { actions as modalActions } from "../redux/modal/modalSlice"
import { actions as settingsActions } from "../redux/settings/settingsSlice"
import { actions as userActions } from "../redux/user/userSlice"

const combineActions = {
	...userActions,
	...modalActions,
	...settingsActions
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(combineActions, dispatch), [dispatch])
}
