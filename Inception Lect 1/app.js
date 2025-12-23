let heading = React.createElement("h1", { id: "heading", abc: "Nivant" }, "Hello React I am Here For You !"); // It create the h1 element with Text. the craetin part is react.
let root = ReactDOM.createRoot(document.querySelector("div"));   //  h1 element  to put into dom so for that we have to use ReactDOM. createRoot() method.

root.render(heading); // heading  is render into the root. heading  put inot the root.


// let heading = React.createElement("h1", {}, "Hello React I am Here For You !");  => {} => It will gives the attribute to element ad id , class etc.



console.log(heading); // These React H1 Element => Noramal Js Object. => HTML For Broswer Undersatding.


// Every Elemrnt have the "Tag Name" ,{} atrribute , child as text , element/s.



// createElement => it crarte the object 
// render => takes the object of h2 tag and  put/convert  into the root.

// How to carte the nested element in React.

// let parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", { id: "h1ele" }, "These is H1 Element")))

// As we can also pass the element in 3rd argument / text.



//root.render(parent);

//console.log(parent); // object

// Sibling
// We ahve to pass the muiple childer we have wrap into the array.
// arryo of childern.

// let parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [
//             React.createElement("h1", { id: "h1ele" }, "This 1 is H1 Element"),
//             React.createElement("h2", { id: "h2ele" }, "This 2 is H2 Element")
//         ]
//     )
// );

//root.render(parent);


// chind1 => h1 , h2  child2=h1 , h2
// The above is complex , hard to understand solution is JSX.

//let parent = React.createElement(
"div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", { id: "h1ele" }, "This 1 is H1 Element"),
                React.createElement("h2", { id: "h2ele" }, "This 2 is H2 Element")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", { id: "h1ele" }, "This 3 is H1 Element"),
                React.createElement("h2", { id: "h2ele" }, "This 4 is H2 Element")
            ]
        )]
//);

///root.render(parent)


// Pratics:
// let parent = [
//     React.createElement("div", { class: "brother 1", },
//         [React.createElement("h1", { class: "child1" }, "h1 tag"),
//         React.createElement("p", { class: "child2" }, "p tag")
//         ]
//     )
//     , React.createElement("div", { class: "brother 2", },
//     [
//         React.createElement("h1", { class: "child1" }, "h2 tag"),
//         React.createElement("p", { class: "child2" }, "p tag")]
// )]

//root.render(parent);

let parent = React.createElement("div", {},
    [React.createElement("div", {},"jhbdsv"),
    React.createElement("div", {},"sdvhdbv")
    ]
)

root.render(parent)

// if the alredy elemen is present we are trying to render it so that render element will replce with the present element.
// 1. line by line exection.
// 2. 1st element will gies to web pages. line =10
// 3. render line 30 . so element will rplece with prseetn elememt in very mili sec.

// Librey => React work on small porstion as div , perticular element.
// framework => whole code implement.
