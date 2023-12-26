import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./reusable/Footer/Footer";
import Navbar from "./reusable/Navbar/Navbar.js";

function TheWav() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <App />
        <Footer copyright="2023 Thewav All Copyrights Reserved." />
      </Router>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<TheWav />);
