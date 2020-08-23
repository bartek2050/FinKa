import React from 'react';
import './scss/main.scss'
import Percent from "./Percent";
import Vat from "./Vat";
import Discount from "./Discount";
import Savings from "./Savings";
import Salary from "./Salary";

const App = () => {


    return (
        <>
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
        <h1>Wybierz kalkulator</h1>
        <section className={"calcSelect__section"}>
            <div className={"calcSelect__section-box percentBox"}>
                <i className="fi-xtlux2-percent-thin"></i>
                <p>Zwykły procent</p>
            </div>

            <div className={"calcSelect__section-box discountBox"}>
                <i className="fi-xtllx2-label-thin"></i>
               <p>Rabat</p>
            </div>

            <div className={"calcSelect__section-box vatBox"}>
                <i className="fi-xtluh2-shopping-cart-thin"></i>
               <p>VAT</p>
            </div>

            <div className={"calcSelect__section-box savingsBox"}>
                <i className="fi-ctlux2-dollar-thin"></i>
               <p>Kalkulator zysku z lokat</p>
            </div>

            <div className={"calcSelect__section-box salaryBox"}>
                <i className="fi-xtlux2-tools-thin"></i>
               <p>Kalkulator wynagrodzenia</p>
            </div>
        </section>

            <section className={"calculators__section"}>
                <Percent/>
                <Vat/>
                <Discount/>
                <Savings/>
                <Salary/>

            </section>

        </>
    )
}

export default App


