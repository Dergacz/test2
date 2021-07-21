import {Dispatch} from "redux";
import {usersAPI} from "../api";

export type UserType = {
    id: number
    username: string
    nickname: string
    avatar: string
    country: string
    age: number
}

export type UsersInitialStateType = {
    users: UserType[]
    page: number
    records_per_page: number
    total_records: number
    button: boolean
}

const initialState: UsersInitialStateType = {
    users: [],
    page: 1,
    records_per_page: 6,
    total_records: 30,
    button: true
}

type SetUsersActionType = {
    type: "SET_USERS"
    users: UserType[]
}

type SetPageActionType = {
    type: "SET_PAGE"
    currentPage: number
}

type SetTotalRecordsType = {
    type: "SET_TOTAL_RECORDS_TYPE"
    total_records: number
}


type ActionType = SetUsersActionType | SetPageActionType | SetTotalRecordsType

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType): UsersInitialStateType => {
    console.log(action)
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case "SET_PAGE": {
            return {
                ...state,
                page: action.currentPage
            }
        }
        case "SET_TOTAL_RECORDS_TYPE": {
            return {
                ...state,
                total_records: action.total_records
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

export const setCurrentPage = (page: number): SetPageActionType => {
    return {
        type: "SET_PAGE",
        currentPage: page
    }
}

export const setTotalRecords = (total_records: number): SetTotalRecordsType => {
    return {
        type: "SET_TOTAL_RECORDS_TYPE",
        total_records
    }
}

export const getUsersThunk = (page: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUsers(page)
            .then(res => {
                console.log("ffff" + res.metadata)
                dispatch(setCurrentPage(res.metadata))
                dispatch(setUsers(res.data))
            })
    }
}


