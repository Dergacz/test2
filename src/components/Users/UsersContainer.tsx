import React from "react";
import {Users} from "./Users";
import {
    getUsersThunk,
    setCurrentPage,
    setTotalRecords,
    setUsers,
    UsersInitialStateType,
    UserType
} from "../../store/usersReducer";
import {AppStateType} from "../../store/reduxStore";
import {compose} from "redux";
import {connect} from "react-redux";

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {
    // componentDidMount() {
    //     this.props.getUsers(this.props.page, this.props.records_per_page);
    // }
    render() {
        return (
            <div>
                <Users
                    users={this.props.users}
                    page={this.props.page}
                    records_per_page={this.props.records_per_page}
                    total_records={this.props.total_records}
                    setUsers={this.props.setUsers}
                    getUsers={this.props.getUsers}
                    setPage={this.props.setPage}
                    setTotalRecords={this.props.setTotalRecords}
                />
            </div>
        )
    }
}

type MapStateToPropsType = {
    users: UsersInitialStateType
    page: number
    records_per_page: number
    total_records: number
}

type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    getUsers: (page?: number, records_per_page?: number) => void
    setPage: (page: number) => void
    setTotalRecords: (total_records: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userPage,
        page: state.userPage.page,
        total_records: state.userPage.total_records,
        records_per_page: state.userPage.records_per_page
    }
}

export default connect(mapStateToProps, {
        setUsers,
        setPage: setCurrentPage,
        setTotalRecords,
        getUsers: getUsersThunk
    })
(UsersContainer)