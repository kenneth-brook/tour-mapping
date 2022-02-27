import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Attractions from "../attractions/Attractions";
import Stay from "../stay/Stay";

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
                        <li>
                            <NavLink className="link" to="./stay" activeClassName="active">
                            Where to Stay
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="bodyWrap">
                <Routes>
                    <Route path="/" component={<Attractions />}>
                
                    <Route path="./stay" component={<Stay />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Nav;