import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";

import Attractions from "../attractions/Attractions";

function Nav() {
    return (
        <div className="navWrap">
            <div className="navLinks">
                <nav>
                    <ul>
                        <li>
                            <NavLink className="link" exact to="/" activeClassName="active">
                            Attractions
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bodyWrap">
                <Routes>
                    <Route exact path="/" component={Attractions} />
                </Routes>
            </div>
        </div>
    )
}

export default Nav;