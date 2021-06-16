import React from "react";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch } from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./hoc/Layout/Layout";
import Orders from "./containers/Orders/Orders";

const App = () => (
    <div>
        <Layout>
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route exact path="/" component={BurgerBuilder} />
            </Switch>
        </Layout>
    </div>
);

export default App;
