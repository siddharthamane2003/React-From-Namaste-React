import RestaurtantCart from "./restaurantCart";
import restaurants from "../utility/mockdata";
import { useState } from "react";

// Defination of UseState : whenever state varble chages react re-render componet.

// When you update state using the setter (setState),
// React runs the component function again and updates the UI to show the new data.

// Data And UI Layres Reatc Metin In Sync.

let Body = () => {
  // let [listofrestaraut, setlisrestarant] = useState([
  // {
  //     name: "Hotel Sai Prasad",
  //     rating: 4.1,
  //     deliveryTime: "30 mins",
  //     city: "Mumbai",
  //     id: 102,
  //   },
  //   {
  //       name: "Hotel Sai Prasad",
  //       rating: 4.3,
  //       deliveryTime: "30 mins",
  //       city: "Mumbai",
  //       id: 103,
  //     },
  //     {
  //       name: "Hotel Sai Prasad",
  //       rating: 2.3,
  //       deliveryTime: "30 mins",
  //       city: "Mumbai",
  //       id: 10,
  //     },
  //     {
  //       name: "Hotel Sai Prasad",
  //       rating: 3.9,
  //       deliveryTime: "30 mins",
  //       city: "Mumbai",
  //       id: 2,
  //     },
  //     {
  //       name: "Tasty Bites",
  //       rating: "4.2",
  //       deliveryTime: "35 mins",
  //       city: "Bangalore",
  //       id: 7,
  //     },
  //     {
  //       name: "Foodies Hub",
  //       rating: "4.0",
  //       deliveryTime: "40 mins",
  //       city: "Delhi",
  //       id: 80,
  //     },
  //     {
  //       name: "Tasty Bites",
  //       rating: "4.2",
  //       deliveryTime: "35 mins",
  //       city: "Bangalore",
  //       id: 89,
  //     },
  //     {
  //       name: "Foodies Hub",
  //       rating: "4.0",
  //       deliveryTime: "40 mins",
  //       city: "Delhi",
  //       id: 90,
  //     },
  //     {
  //       name: "Tasty Bites",
  //       rating: "4.2",
  //       deliveryTime: "35 mins",
  //       city: "Bangalore",
  //       id: 123,
  //     },
  // ]);

  // useState();// give the state varibles. Takes the state varible inside array.
  //let [listofrestaraut]=useState(); // super poweful varble.
  // Noraml vatble let a;

  // is pass any values inside useState ()
  // listofrestaraut defalut also same that you passed.
  // if want modify listofrestaraut=[] or give some data its NOt Correct.
  // Updating for use the funcion. useState([])
  //

  // 1. Defalut Value .
  // 2. update or opration on the value unsing 2nd funcion as setlisrestarant
  // also update in map.

  
  let [listofrestaraut, setlisrestarant] = useState(restaurants);

  return (
    <div className="body">
      <div className="SearchBar">
        <button
          className="filter-btn"
          onClick={() => {
            let filterres = listofrestaraut.filter((value) => value.rating > 4);
            console.log(listofrestaraut);
            setlisrestarant(filterres); // Updation
          }}
        >
          Filter Button
        </button>
      </div>

      <div className="restaurtantbody">
        {listofrestaraut.map((restaurants) => {
          return <RestaurtantCart key={restaurants.id} ResData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default Body;
