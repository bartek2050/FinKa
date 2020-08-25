import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './scss/main.scss'
import Header from "./Header";
import Main from "./Main";
import News from "./News";
import Crypto from "./Crypto";
import Exchange from "./Exchange";
import Footer from "./Footer";
import Percent from "./Percent";
import Discount from "./Discount";
import Vat from "./Vat";
import Savings from "./Savings";
import Salary from "./Salary";
import Buttons from "./Buttons";

const App = () => {


    return (
        <>
        <Router>
            <Header/>
            <Buttons/>
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/exchange"}  component={Exchange} />
                <Route path={"/crypto"}  component={Crypto} />
                <Route path={"/news"}  component={News} />
                <Route path={"/percent"} component={Percent} />
                <Route path={"/discount"}  component={Discount}/>
                <Route path={"/vat"}  component={Vat} />
                <Route path={"/savings"}  component={Savings}/>
                <Route path={"/salary"}  component={Salary}/>
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}

export default App


