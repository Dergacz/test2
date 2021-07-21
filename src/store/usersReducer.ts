import {Dispatch} from "redux";
import {usersAPI} from "../api";

export type UserType = {
    id: number,
    username: string,
    nickname: string,
    avatar: string,
    country: string,
    age: number
}

export type UsersInitialStateType = {
    users: UserType[]
    page: number
    records_per_page: number
    total_records: number
}

const initialState: UsersInitialStateType = {
    users: [],
    page: 1,
    records_per_page: 0,
    total_records: 6
}

type SetUsersActionType = {
    type: "SET_USERS"
    users: UserType[]
}

type ActionType = SetUsersActionType

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        default: {
            return state
        }
    }
}

export const setUsers = (users: UserType[]): SetUsersActionType => {
    return {
        type: "SET_USERS",
        users
    }
}

export const getUsersThunk = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getUsers()
            .then(data => {
                dispatch(setUsers(data.data.users))
            })
    }
}


