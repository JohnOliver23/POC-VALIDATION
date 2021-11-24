import React from "react";
import GlobalStyle from "./styles/global";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactFormHooks from "./pages/react-form-hooks";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
