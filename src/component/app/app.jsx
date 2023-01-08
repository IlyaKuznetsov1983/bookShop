import React from 'react';
import "./app.css";
import {CartPage, HomePage} from "../pages";
import {Route, Switch} from "react-router-dom";
import StoreHeader from "../store-header";



const App = () => {
    return (
 <main role="main" className="container">
    <StoreHeader numItems={5} total={210}/>
    <Switch>
    <Route path='/' exact component={HomePage}/>
    <Route path='/cart' component={CartPage}/>
    </Switch>
 </main>
);
};


export default App;
