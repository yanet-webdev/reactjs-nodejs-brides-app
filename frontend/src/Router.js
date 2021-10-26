import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CartScreen from "./components/CartScreen";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Planning from "./components/Planning";
import ProductScreen from "./components/ProductScreen";
import RegisterScreen from "./components/RegisterScreen";
import ShippingScreen from "./components/ShippingScreen";
import SigninScreen from "./components/SigninScreen";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/plan" component={Planning} />
        <Route exact path="/signin" component={SigninScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/shipping" component={ShippingScreen} />
        <Route exact path="/cart/:id?" component={CartScreen} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
