import { Routes, Route, Outlet, NavLink } from "react-router-dom";


import Attractions from "../attractions/Attractions";
import Stay from "../stay/Stay";
import Shop from "../shop/Shop";
import Eat from "../eat/Eat";

function Nav() {
    return (
        <div className="bodyWrap">
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route index element={<Attractions />} />
                    <Route path="stay" element={<Stay />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="eat" element={<Eat />} />
                    </Route>
                </Routes>
            </div>
    )
}

export default Nav;

function Layout() {
    return (
<div className="navWrap">
            <div className="navLinks">
                <nav>
                    <ul>
                        <li><NavLink to="/" activeClassName='active'>Attractions</NavLink></li>
                        <li><NavLink to="/Stay" activeClassName='active'>Where to Stay</NavLink></li>
                        <li><NavLink to="/Shop" activeClassName='active'>Where to Shop</NavLink></li>
                        <li><NavLink to="/Eat" activeClassName='active'>Where to Eat</NavLink></li>
                    </ul> 
                </nav>
            </div>
            
            <Outlet />
        </div>
        )
        }