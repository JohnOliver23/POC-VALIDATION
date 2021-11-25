import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FormikModule from "../../pages/formik";
import Formik2 from "../../pages/formik2";
import ReactFormHooks from "../../pages/react-form-hooks";
import GlobalStyle from "../../styles/global";
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FormikModule} />
      <Route path="/formik2" exact component={Formik2} />
      <Route path="/react-hooks" exact component={ReactFormHooks} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
