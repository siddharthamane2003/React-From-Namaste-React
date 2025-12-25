React => Js library. Develpoed By Facebook. Follows Componet based Architecture.

1. CDN : Content Deleviry Network
    these websites that react libary are hosted.
    we are just featch the react  push into the projects using the cdn links
    we are injecting the react in our project.
    https://unpkg.com/react@18/umd/react.development.js , https://unpkg.com/react-dom@18/umd/react-dom.development.js
    both are both links are react code. plain js code . behind the js will implement rect.
    react is js libiray. 
    the React code is written by Facebook Engg.

    1st file => these is core file of react.
    2nd file => these is REACT-DOM.
    why to file => beause react are use in different placese as mobile , react native etc.
    From the react and react Dom we can bulid the Extraordonry Project.

2.  React.createElement("h1", { id: "heading", abc: "Nivant" }, "Hello React I am Here For You !"); =>  It create the h1 element with Text. the creation part is react.
    let root = ReactDOM.createRoot(document.querySelector("div"));   =>   h1 element  to put into dom so for that we have to use ReactDOM. createRoot() method. assin root to div element.
    root.render(heading) =>  heading  is render into the root. heading  put inot the root.
    Every Elemrnt have the "Tag Name" ,{} atrribute , child as text , element/s
    (heading) =>  These React H1 Element => Noramal Js Object. => HTML For Broswer Undersatding
    createElement => it crarte the object 
    render => takes the object of h2 tag and  put/convert  into the root.

    Nested :
    let parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "h1ele" }, "These is H1 Element"))) =>  As we can also pass the element in 3rd argument / text.

    Sibling
    We ahve to pass the muiple childer we have wrap into the array.
    arrys of childern.


    chind1 => h1 , h2  child2=h1 , h2
    The above is complex , hard to understand solution is "JSX".

3. if the alredy elemen is present we are trying to render it so that render element will replce with the present element.
    1. line by line exection.
    2. 1st element will gies to web pages. line =10
    3. render line 30 . so element will rplece with prseetn elememt in very mili sec.

Librey => React work on small porstion as div , perticular element.
framework => whole code implement.


Home Work:
    CDN in React: It lets you load React directly from the internet without installing it, so you can start quickly.

    crossOrigin: It tells the browser how to handle requests from another server, making sure it loads safely without CORS issues.