import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './scss/main.scss'
import Header from "./Header";
import Main from "./Main";
import News from "./News";
import Crypto from "./Crypto";
import Exchange from "./Exchange";
import Footer from "./Footer";

const App = () => {


    return (
        <>
        <Router>
            <Header/>
            <Switch>
                <Route path={"/"} exact component={() => <Main />} />
                <Route path={"/exchange"} exact component={() => <Exchange />} />
                <Route path={"/crypto"} exact component={() => <Crypto />} />
                <Route path={"/news"} exact component={() => <News />} />
            </Switch>
            <Footer/>
        </Router>
        </>
    )
}

export default App


