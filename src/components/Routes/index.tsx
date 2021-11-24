import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FormikModule from "../../pages/formik";
import ReactFormHooks from "../../pages/react-form-hooks";
import GlobalStyle from "../../styles/global";
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FormikModule} />
      <Route path="/react-hooks" exact component={ReactFormHooks} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
