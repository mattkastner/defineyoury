import React from "react";
import { Switch, Route } from "react-router-dom";
import Culture from "./views/Culture";
import Product from "./views/Product";
import Business from "./views/Business";
import Training from "./views/Training";

export default (
  <Switch>
    <Route exact path="/culture" component={Culture} />
    <Route path="/culture/share" component={Culture} />
    <Route exact path="/product" component={Product} />
    <Route path="/product/share" component={Product} />
    <Route path="/business" component={Business} />
    <Route path="/training" component={Training} />
  </Switch>
);
