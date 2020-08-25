import React from "react";
import { Link, withRouter } from "react-router-dom";
import Calculators from "./Calculators";


const Main = () => {
    return (
        <>
        <h1>Wybierz kalkulator</h1>
    <section className={"calcSelect__section"}>
        <Link to={"/percent"} className={"calcSelect__section-box percentBox"}>
            <i className="fi-xtlux2-percent-thin"/>
            <p>Zwykły procent</p>
        </Link>

        <Link to={"/discount"} className={"calcSelect__section-box discountBox"}>
            <i className="fi-xtllx2-label-thin"/>
            <p>Rabat</p>
        </Link>

        <Link to={"/vat"} className={"calcSelect__section-box vatBox"}>
            <i className="fi-xtluh2-shopping-cart-thin"/>
            <p>VAT</p>
        </Link>

        <Link to={"/savings"} className={"calcSelect__section-box savingsBox"}>
            <i className="fi-ctlux2-dollar-thin"/>
            <p>Kalkulator zysku z lokat</p>
        </Link>

        <Link to={"/salary"} className={"calcSelect__section-box salaryBox"}>
            <i className="fi-xtlux2-tools-thin"/>
            <p>Kalkulator wynagrodzenia</p>
        </Link>
    </section>

    <section className={"calculators__section"}>
        <Calculators/>
    </section>
            </>
    )
}

export default withRouter(Main);