import React from "react";
import ReactDOM from "react-dom/client";

// Props : (Property)=> Pass the Dymanic Content into the conent/element.Psassing  Argument To funcion.
// when you pass dymic data into componetn pass as prop. imp.

// ConfentDrivanUI: Accoring to the BackEnd the  Front will Change.
// ex=>  in Mumbai diffrent Hotles/Restaraut give me front according to me.
// if pune give me front. like that.(V.IMP InSystemt Desing INterview)

// Food Order App ex=>Zomato ,Swiggy

// step 1. planning And Digram of Project.

//  => 1. header => inside logo left side and nav Bar in rigth side
// 2. Body => Seach  for cards ,  Card contioner => In that diff cards
//            => In side Card => image, star , Rating , time of Dvlier , info about the restoarnt
//3. Footer => copyrigth , links , contact.

let Header = () => {
  return (
    <div className="header">
      <div className="log">
        <img src="data:image/png;base64,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" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Main</li>
          <li>Conatact</li>
        </ul>
      </div>
    </div>
  );
};

// Inline Style Addding
let StyleCart = {
  backgroundColor: "#f0f0f0",
};

// let RestaurtantCart = (props) =>
// let RestaurtantCart = ({ resName, cusin }) => {
// Destrucring These Plain Object.
// console.log(props); // object

let RestaurtantCart = (props) => {
  let { ResData } = props;
  console.log(ResData);
  let { name, rating, deliveryTime, city } = ResData; // Better To The Destrcting Data.

  return (
    //  <div className="res-card" style={StyleCart}> these also correct
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0", // also Correct Inline CSS
      }}
    >
      <img src="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" />
      {/* <h3>{props.resName}</h3>
      <h4>{props.cusin}</h4> */}

      {/* <h3>{resName}</h3> // thse also correct
      <h4>{cusin}</h4> */}

      {/* <h3>{ResData.name}</h3>
      <h3>{ResData.service}</h3>
      <h3>{ResData.isAvailable}</h3>
      <h3>{ResData.avgDeliveryTime}</h3> */}

      <h3>{name}</h3>
      <h3>{rating}</h3>
      <h3>{deliveryTime}</h3>
      <h3>{city}</h3>
    </div>
  );
};

// 3rd way odf paadin dymainc conent

const restaurants = [
  {
    name: "Hotel Sai Prasad",
    rating: "4.1",
    deliveryTime: "30 mins",
    city: "Mumbai",
    id: 102,
  },
  {
    name: "Spicy Treats",
    rating: "4.5",
    deliveryTime: "25 mins",
    city: "Pune",
    id: 1,
  },
  {
    name: "Foodies Hub",
    rating: "4.0",
    deliveryTime: "40 mins",
    city: "Delhi",
    id: 2,
  },
  {
    name: "Tasty Bites",
    rating: "4.2",
    deliveryTime: "35 mins",
    city: "Bangalore",
    id: 3,
  },
  {
    name: "Foodies Hub",
    rating: "4.0",
    deliveryTime: "40 mins",
    city: "Delhi",
    id: 4,
  },
  {
    name: "Tasty Bites",
    rating: "4.2",
    deliveryTime: "35 mins",
    city: "Bangalore",
    id: 7,
  },
  {
    name: "Foodies Hub",
    rating: "4.0",
    deliveryTime: "40 mins",
    city: "Delhi",
    id: 80,
  },
  {
    name: "Tasty Bites",
    rating: "4.2",
    deliveryTime: "35 mins",
    city: "Bangalore",
    id: 89,
  },
  {
    name: "Foodies Hub",
    rating: "4.0",
    deliveryTime: "40 mins",
    city: "Delhi",
    id: 90,
  },
  {
    name: "Tasty Bites",
    rating: "4.2",
    deliveryTime: "35 mins",
    city: "Bangalore",
    id: 123,
  },
];

let Body = () => {
  return (
    <div className="body">
      <div className="SearchBar">Search</div>
      {/* <div className="restaurtant-contioner"> */}
      <div className={"restaurtant-" + "contioner"}>

        {/* combine two strig these js. */}
        {/* <RestaurtantCart // thes pasaing props React will wrap as Object
                    resName="ShauryaVada Hotel"
                    cusin="Muttton Curru , Checkn Birayni"
                    star="4.4"
                    timeDelvir="30 min"
                /> } */}

        {/* <RestaurtantCart // thes pasaing props
          ResData={DeliveryCity}
        /> */}

        {/* <RestaurtantCart ResData={restaurants[0]} />
        <RestaurtantCart ResData={restaurants[1]} />
        <RestaurtantCart ResData={restaurants[2]} />
        <RestaurtantCart ResData={restaurants[3]} />
        <RestaurtantCart ResData={restaurants[4]} />
        <RestaurtantCart ResData={restaurants[5]} />
        <RestaurtantCart ResData={restaurants[6]} />
        <RestaurtantCart ResData={restaurants[8]} />
        <RestaurtantCart ResData={restaurants[7]} /> */}

        {/* Dynmiac Calling Data
            Error : Key Unque.
            Must Be Unque Key.
            if continoer have same level element . like our explae.
            react will render all element. It is very Danground .
            for that we have to use the key.
            React uses key to track elements efficiently. Without a key,
             React can’t tell which element changed, so it may re-render all siblings unnecessarily, which is slow and can cause bugs.

            You May use the index as the key but its not recommed to use not acessaptable.
            If the order of items changes, React will think the item at index 0 is the same as before, even if it’s now a different item.
            This can lead to wrong updates, wrong data showing, or unnecessary re-renders.
            
        */}
        {restaurants.map((restaurants) => {
          return <RestaurtantCart key={restaurants.id} ResData={restaurants} />;
        })}
        {/* 
                <RestaurtantCart // trhes pasaing props
                    resName="Sainath Hotel"
                    cusin="Chike Thali"
                    star="5.0"
                    timeDelvir="10 min"
                />
                <RestaurtantCart // thes pasaing props
                    resName="Garva"
                    cusin="Muchurimn"
                    star="9.0"
                    timeDelvir="1 min"

                /> */}
      </div>
    </div>
  );
};

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

