import React, {useEffect, useState} from "react";
import {User} from "./User";
import {ButtonList} from "../Buttons/ButtonList";
import {UsersPropsType} from "./UsersContainer";
import {UserType} from "../../store/usersReducer";


export const Users = () => {

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        fetch("http://localhost:3001/api/user?page=1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data)
                setUsers(data.data)
            });
    }, []);


    const usersList = users.map((user) => {
        return (
            <User user={user} button={true}/>
        )
    })

    return (
        <div>
            {usersList}
            <ButtonList/>
        </div>
    )
}