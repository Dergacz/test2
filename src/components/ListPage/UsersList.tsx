import React, {useEffect, useState} from "react";
import {User} from "../Users/User";
import {NextButton} from "../Buttons/NextButton";
import {UserType} from "../../store/usersReducer";



export const UsersList = () => {
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/api/user?page=1')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
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
            {/*{usersList}*/}
            <NextButton/>
        </div>
    )
}