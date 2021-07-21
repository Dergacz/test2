import React from "react";
import { NavLink } from "react-router-dom";

export const ButtonList = () => {
    return (
        <div>
            <NavLink to={"/listpage"}>Список рассылки</NavLink>
        </div>
    )
}