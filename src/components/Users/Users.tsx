import React from "react";
import {ButtonList} from "../Buttons/ButtonList";
import {UsersPropsType} from "./UsersContainer";
import style from "./users.module.css"


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.total_records / props.records_per_page);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (pageNumber: number) => {
        props.setPage(pageNumber);
        props.getUsers(pageNumber, props.total_records)
    }

        if (props.users.users.length === 0) {
            props.getUsers(undefined, undefined)
        }


    return (
        <div>
            {props.users.users.map(u => {
                return <div className={style.userBlock} key={u.id}>
                    <div>
                        <img className={style.userImg} alt={"avatar"} src={u.avatar}/>
                    </div>
                    <div>{u.nickname}</div>
                    <div>{u.country}</div>
                    <div>{u.age}</div>
                </div>
            })}


            <ButtonList/>
            {pages.map(p => {
                return <span onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>
    )
}