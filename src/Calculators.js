import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Percent from "./Percent";
import Vat from "./Vat";
import Discount from "./Discount";
import Savings from "./Savings";
import Salary from "./Salary";

const Calculators = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path={"/percent"} component={Percent} />
                    <Route path={"/discount"} exact component={() => <Discount />} />
                    <Route path={"/vat"} exact component={() => <Vat />} />
                    <Route path={"/savings"} exact component={() => <Savings />} />
                    <Route path={"/salary"} exact component={() => <Salary />} />
                </Switch>
            </Router>
        </>
    )
}

export default Calculators;