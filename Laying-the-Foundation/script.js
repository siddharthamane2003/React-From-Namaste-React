import React from "react";
import ReactDOM from "react-dom/client";

// Fundametal concepts of React:

// why we use npm insted of npx
// npx are avible Local Storage. It will Execute directltly.
// npm are avible Local Strorge as wali as the other uswer/client.
// npm The files are prsent in the package.json.

//         npm run start => start the project dev moode. Also you can start npm start , start is Reserved Keyword.
//         they are doing same things that npx will do as npx parcel index.html
//         these will behind scences exetute pracel with index.html

//         add the "start": "parcel index.html",
//                 "build": "parcel build index.html",
//                  in script object.

//         The Deveploer are join new Company then they have to start the project.
//         so it look the packege.json file in that script object entry. run a comaond.

//          "scripts": {
//                 "start": "parcel index.html",
//                 "build": "parcel build index.html",
//                 "test": "jest"
//                 },
//            npm run build => Build the project. html , css , js in dist files are created.

// React Element : Its is Object. When we are Render in Dom They it will HtmlElement

//let heading = React.createElement("h1", { id: "heading" }, "Namste React");

//console.log(heading); // These Is Object.

let root = ReactDOM.createRoot(document.querySelector("div"));

// root.render(heading); // these is HtmlElement heading is renders.

// JSX (JavaScript XML) => html/xml like sytax. but its not HTML (IMP).

// let heading=React.createElement("h1",{id:"heading"},"Namste React") these is not Good way to carte elemewnt

// JSX => Makes devploer makes easy. These is not Part of React.
// Html / js inside html is not Jsx.
// It will makes easy code.clener.
// js engin will not undrstand , js will not unsdeats. let jsxheading = <h1 id="heading">Namste React using JSX</h1>;
// js engin will undsratdn the EcammsScript Laguague, ES6.
// they why we have no isses beause of that  "parcel".
// Before the not unsdrating "parcel" in that "Babel" will do these not the parcel.
// what these it will reday code unsdrating react , broswer.
// Babel will takes js code and Broswer/React will unsdratd.
// Balel is not caretd by Facebook.

// How Js work => <h1 id="heading">Namste React using JSX</h1> will "tarspling" to React.createElement => RaectElement have Object => Html Elemnet(render Time)
// Who is coverting/trapleded : Babel.
// At these is also the React Element both are same.
// Babel is Js Complier it will do other jobs.
// It will takes code and convert into another form of code.
// These is Packeg , these is Supere Hero.
// Parcel is Mansger of Babel.

// we have to give class Namae in Raect as ClassName.

//let jsxheading = (
// <h1 className="heding" tabIndex="1">
//    {" "}
//  Namste React using JSX
// </h1>
//);

//let ptagjsx = <p className="pjsx">These is P tag from jsx</p>;

//root.render(ptagjsx);
// root.render(jsxheading);

// The attrubute must be in camel case => tabIndex
// Sigle line is Valid but muiple line then () put inside.

// React Component : Two Types of Componet
// Every thing in Raect is called by Componet.
// classBase => Old Way of Component and
// Functional : New way so componet.(Use These)

// what is Functional Component ? => Noraml js Funcion which return jsx / React element.
// we use arrow function beause its faster.
//let Title = () => <p>These is p tage</p>;

//let HeadingComonet = () => (
//   <div>
//     <Title />
//     <h1>These is Funcion Componet</h1>
//   </div>
//);

// let headingComonet=()=> (
// <h1>These is Funcion Componet</h1>
// )

//let HeadingComponent = () => {
//   return (
//     <div>
//       <Title />
//       <h1>This is Function Component</h1>
//     </div>
//   );
// };

//  these is both are same.

//root.render(<HeadingComonet />);

// Reader funcional Compponet like <ComponetName/>

// Componet Compostion : One Component inside One Compoent

// let Title = () => <p>These is p tage</p>;
// let HeadingComonet = () => (
//   <div>
//     <Title />
//     <h1>These is Funcion Componet</h1>
//   </div>
// )

// let PTag = function () {
// we also Normal Funcion
//   return <p>Noraml Ptag</p>;
// }; //Capital

// let H1Tag = () => (
//   <div>
//     <h1>These Is Noraml H1 Tag</h1>
//     <PTag />
//   </div>
// );

// we can add js into jsx.

//let title = () => (<p>These is p tage</p>)

//let title = <p>These is p tage</p>; // we can put the
// Add the Varible inoto the  compnoet
// Add the element inot the Compomnt.
{
  /* {store} */
}
//{title}
// add
let store = 1000;
// let H1Tag = () => (
//   <div>
//     <h1>These Is Noraml H1 Tag</h1>
//     {/* {store} */}
//     {title}
//   </div>
// );

// add element inside element
// let span=<span>These is Span Tag</span>
// let title = (
//     <p>These is p tage
//         {span}
//     </p>
// )

// element inside elemnt
// elemtn inside funciton  componet
// funcion compoent inside element

let H1Tag = () => <p>This Is Normal H1 Tag</p>;

// let title = (
//   <div>
//     <p>These is p tag</p>
//     <H1Tag />
//   </div>
// );

//root.render(<H1Tag />); // First letter must Captital.

// when the mailious / third part attack crosss attck that JSX will Handle it.

let title = (
  <div>
    <p>These is p tag</p>
    <H1Tag />
    <H1Tag></H1Tag>
    {H1Tag()}
  </div>
);

// <H1Tag></H1Tag>  These also correct.
// <H1Tag/>  these is aslo correct. We can write mutiple time.
//  {H1Tag()} also correct.

//root.render(title);

// all are about js.
// Code Readble Beacause of JSX Not React.

// HOMWork :  find the attribue like img , achor etc
// how to find the img tage in jsx.

let imgTag = <img src="https://via.placeholder.com/150" alt="Reloded"></img>;
//root.render(imgTag)

let achroTag = (
  <a href="https://chatgpt.com/c/694d3b72-55a4-8324-bbe2-16ed84e33d8e"></a>
);

let span = <span>These span Tag</span>;

//root.render(span);

let iTag = <i>These is Iatalic Tag</i>;
// root.render(iTag);

let StrongTag = <strong>These is Strogn Tag</strong>;
//root.render(StrongTag)

let Componetele = <p>Thes is P Tag</p>

let Componet = () => (
  <div>
    These is Compornt Div Tag
    {Componetele}
    
  </div>
);

root.render(<Componet />)