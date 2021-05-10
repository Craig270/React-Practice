import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Components/Counter";
import ColorCounts from "./Components/ColorCounts";
import ButtonLogin from "./Components/ButtonLogin";
import Fetch from "./Components/Fetch";
import Forms from "./Components/Forms";
import Forms2 from "./Components/Forms2";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
    <ColorCounts />
    <ButtonLogin />
    <Fetch />
    <Forms />
    <Forms2 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
