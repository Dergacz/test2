import React from "react";
import { NavLink } from "react-router-dom";

export const AddMessageButton = () => {
    return (
       <div>
           <NavLink to={"/summarypage"}>
               Отправить сообщение
           </NavLink>
       </div>
    )
}