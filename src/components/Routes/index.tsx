import React from "react";
import { Switch, Route } from "react-router-dom";
import FormikModule from "../../pages/formik";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FormikModule} />
  </Switch>
);

export default Routes;
