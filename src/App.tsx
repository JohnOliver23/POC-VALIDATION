import React from "react";
import GlobalStyle from "./styles/global";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
