import React from "react";
import Percent from "./Percent";
import Vat from "./Vat";
import Discount from "./Discount";
import Savings from "./Savings";
import Salary from "./Salary";

const Main = () => {
    return (
        <>
        <h1>Wybierz kalkulator</h1>
    <section className={"calcSelect__section"}>
        <div className={"calcSelect__section-box percentBox"}>
            <i className="fi-xtlux2-percent-thin"/>
            <p>Zwykły procent</p>
        </div>

        <div className={"calcSelect__section-box discountBox"}>
            <i className="fi-xtllx2-label-thin"/>
            <p>Rabat</p>
        </div>

        <div className={"calcSelect__section-box vatBox"}>
            <i className="fi-xtluh2-shopping-cart-thin"/>
            <p>VAT</p>
        </div>

        <div className={"calcSelect__section-box savingsBox"}>
            <i className="fi-ctlux2-dollar-thin"/>
            <p>Kalkulator zysku z lokat</p>
        </div>

        <div className={"calcSelect__section-box salaryBox"}>
            <i className="fi-xtlux2-tools-thin"/>
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


export default Main;