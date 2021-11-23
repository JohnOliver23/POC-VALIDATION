import React from "react";
import GlobalStyle from "./styles/global";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactFormHooks from "./pages/react-form-hooks";

function App() {
  return (
    <Router>
      <ReactFormHooks />
    </Router>
  );
}

export default App;
