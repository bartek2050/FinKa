import React from 'react';
import { Link, withRouter } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const Header = () => {
    return(
        <header className={"header"}>
            <div className={"header__box"}>
                <Link to={"/"} className={"logo"}>FinKa <i className="fi-swluxl-plus-solid"></i></Link>
                <nav className={"header__navigation"}>
                    <li className={"navigation__list"}>
                        <ul><Link to={"/exchange"} className={"navigation__list-element"}>EXCHANGE</Link></ul>
                        <ul><Link to={"/crypto"} className={"navigation__list-element"}>CRYPTO</Link></ul>
                        <ul><Badge badgeContent={2} color="secondary">
                            <MailIcon style={{color: "white"}}/> </Badge></ul>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default withRouter(Header);