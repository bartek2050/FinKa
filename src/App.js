import React from 'react';
import './scss/main.scss'

const App = () => {


    return (
        <header className={"header"}>
            <div className={"header__box"}>
                <a href={"/"} className={"logo"}>FinKa +</a>
                <nav className={"header__navigation"}>
                    <li className={"navigation__list"}>
                        <ul><a href={"/"} className={"navigation__list-element"}>EXCHANGE</a></ul>
                        <ul><a href={"/"} className={"navigation__list-element"}>CRYPTO</a></ul>
                        <ul><a href={"/"} className={"navigation__list-element"}>NEWS</a></ul>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default App


