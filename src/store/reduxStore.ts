import {combineReducers, createStore, Store} from "redux";
import {usersReducer} from "./usersReducer";


let RootReducers = combineReducers({
    userPage: usersReducer
})

export let store: Store = createStore(RootReducers)

export type AppStateType = ReturnType<typeof RootReducers>