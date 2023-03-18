import "./Navbar.css";
import { useState } from "react";
import { MenuItems } from "./MenuItems";

function Navbar() {
    const [isClickMenuBar, setIsClickMenuBar] = useState(false);

    function onClickMenuBar() {
        if (!isClickMenuBar) {
            setIsClickMenuBar(true)
        } else {
            setIsClickMenuBar(false)
        }        
    }

    return(
            <nav className="NavbarItems">
                <h4 className="navbar-logo">@KAOPUNY</h4>
                <div className="menu-icon" onClick={() => onClickMenuBar()} >
                    <i className={isClickMenuBar ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isClickMenuBar ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
    )
}

export default Navbar;