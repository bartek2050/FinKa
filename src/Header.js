import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Header = () => {
    return(
        <header className={"header"}>
            <div className={"header__box"}>
                <Link to={"/"} className={"logo"}>FinKa +</Link>
                <nav className={"header__navigation"}>
                    <li className={"navigation__list"}>
                        <ul><Link to={"/exchange"} className={"navigation__list-element"}>EXCHANGE</Link></ul>
                        <ul><Link to={"/crypto"} className={"navigation__list-element"}>CRYPTO</Link></ul>
                        <ul><Link to={"/news"} className={"navigation__list-element"}>NEWS</Link></ul>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Header);