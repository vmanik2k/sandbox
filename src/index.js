import React from "react";
import ReactDOM from "react-dom";
const fname = "Vishal";
const dat = new Date();
console.log(dat);
const lname = "Manik";
ReactDOM.render(
  <div>
    <div>
      <h1>Created by {fname + " " + lname}</h1>
      <p>Copyright {new Date().getFullYear()}.</p>
    </div>
    <div></div>
  </div>,
  document.getElementById("root")
);
