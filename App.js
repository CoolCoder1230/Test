import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import FoodOption from "./src/Component/FoodOption";
import GroceryOption from "./src/Component/GroceryOption";
import DineOption from "./src/Component/DineOption";
import Restaurant from "./src/Component/Restaurant";


// Header section: Let's build it

function App(){

 return(
      <>
         <Header></Header>
         <FoodOption></FoodOption>
         <GroceryOption></GroceryOption>
         <DineOption></DineOption> 
         <Restaurant></Restaurant>
      </> 
)
}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)