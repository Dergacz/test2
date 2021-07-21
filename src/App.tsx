import React from "react";
import style from "./app.module.css"
import {Users} from "./components/Users/Users";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {UsersList} from "./components/ListPage/UsersList";
import {Messages} from "./components/Messages/Messages";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <NavLink to={"/main"}>
                    <button>Main</button>
                </NavLink>
                <Route path={"/main"} render={() => <UsersContainer/>}/>
                <Route path={"/listpage"} render={() => <UsersList/>}/>
                <Route path={"/message"} render={() => <Messages/>}/>

            </div>
        </BrowserRouter>

    );
}

export default App;
