import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./Componets/headers";
import Body  from "./Componets/body";
import RestaurtantCart from "./Componets/restaurantCart";


// Evreting we do implemet using the html , css , js also.
// Then why use : Less code but Result more. Code Fast. Optimize Code.

// Separe Code then Separte File.
// src (Sourse Code)  then all files are incluse in componet.
// We also write name file .jsx also. not matter .js or .jsx file name.
// New File New Componet.
// It All Depends on the Devloper.

// Heder file seapete is crartea.

// Import File => 
//  1. Export the file =>  export default Header;
// 2. import file to =>  appComptimport Header  from "./Componets/headers";
// "./Componets/headers" also write "./Componets/headers.js" or "./Componets/headers.jsx" depedends.
// as same to Body.

// Export two ways => defallt , Named
// Defalut=>  deaflut only exprort one.
// But we have to export mutiple then use
//  named exprot as =>  export  let LOGO_URL="url"

// Never create The Hard Code Ever 

// all files of code in  Compment File. 
//  anywhere can be used files as utiltiy file.
// Utityl measn anywhere can be used like data , object , url.


// Nmed Export  
// all captial letter of url name
// 1. export  let LOGO_URL="url" 
// 2. import { LOGO_URL } from "../utility/constant";
// 3. add src like   src={LOGO_URL}

// --------HM: ----Can we Use the mixtute of defalut + Names export ? -----------------------------------------------------

// Info:
// Yes..
// You can have one default export and multiple named exports in the same file. Default is imported without {}, named exports use {}.

// Example:

// myModule.js
// const defaultFunc = () => console.log("Default Export");
// const namedFunc = () => console.log("Named Export");

// export default defaultFunc;  // default export
// export { namedFunc };        // named export


// Importing:

// import defaultFunc, { namedFunc } from "./myModule";

// defaultFunc(); // Default Export
// namedFunc();   // Named Export



// why React Fast => It will exeucte  the dom / dom manipualtion fastly.

// React Hook => It Noraml js utility function have super Power from react in nodeMudule.
// It will Gives the Utility
// as usestate()=> superpowerfreul  state varbile in react.
// Gves the superpowerfreul state varble.
// It will metain state of compoent.

// useEffect() =>Rahilelee Aheee..

// Important INterview
// Behind Scens Reatc how Work?

// Vrtial DOM: Is A Repsreseting the Acual Dom.
// ex=> <Body /> Inside tha diff. div. all are object.
// Object Represtataion.
// A lightweight JavaScript copy of the real DOM that helps React update only the changed UI parts efficiently.

// Reconalition Algorithm 
// ReactFiber

// Finding the Difference Bewteen The Old and New Dom/object after findinf. the Dom/object Will uopdate.
// Reatc will tarck all UI.

// Ex=> befor clikng the dom elemt are 4 after clickng 3 elemtn diff=1
// then upadte inot dom . Re-rden dom.
// That why Reatc is Fast. Effienet Dom Manipuation.

// Every time State varible chage react will observe and do the ReatcFibaer.
// Tarck UI. Re-reder.
// let [listofrestaraut,setlisrestarant]=useState(restaurants) that why  setlisrestarant use these for the redeing.


let AppComonet = () => {
  return (
    <div className="contioner">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppComonet />);