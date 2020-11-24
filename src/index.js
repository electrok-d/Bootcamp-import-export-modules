import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

// wildcard is discouraged because the benefit of having a single default export is gone. Individual exports allow for cleaner code
//import * as pi from "./math.js";

// ReactDOM.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
