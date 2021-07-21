import React from "react";
import {Users} from "./Users";
import {getUsersThunk, setUsers, UserType} from "../../store/usersReducer";
import {AppStateType} from "../../store/reduxStore";
import {compose} from "redux";
import {connect} from "react-redux";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Users

                />
            </div>
        )
    }
}

type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    getUsers: () => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userPage.users
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers,
        getUsers: getUsersThunk
    })
)(UsersContainer)