import { combineReducers } from 'redux'
import sidebarReducer from './reducers/toggleSidebarReducers'

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
// export type RootAction = SidebarActionTypes;

export default rootReducer
