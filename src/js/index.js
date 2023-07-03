//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let unit=0;
let hundreds =0;
let tens =0;

setInterval (()=>{
    unit ++
    if (unit > 9){
        hundreds ++
        unit = 0;
    }
   if (hundreds > 9){
        tens ++
        hundreds =0;
    }

     if (tens > 9){
        tens =0;

    }


//render your react application
ReactDOM.render(<Home unit={unit} hundreds={hundreds} tens={tens} />, document.querySelector("#app"));
},1000)