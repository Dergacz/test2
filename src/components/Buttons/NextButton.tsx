import React from "react";
import {NavLink} from "react-router-dom";

export const NextButton = () => {
    return (
        <div>
            <NavLink to={"/message"}>Далее</NavLink>
        </div>
    )
}