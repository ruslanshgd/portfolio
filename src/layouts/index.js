import React from "react";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import Header from "../components/Header";

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
