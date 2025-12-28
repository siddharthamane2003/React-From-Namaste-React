import { LOGO_URL } from "../utility/constant";
let RestaurtantCart = (props) => {
  let { ResData } = props;
  console.log(ResData);
  let { name, rating, deliveryTime, city } = ResData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={LOGO_URL}
        alt="restaurant"
      />
      <h3>{name}</h3>
      <h3>{rating}</h3>
      <h3>{deliveryTime}</h3>
      <h3>{city}</h3>
    </div>
  );
};

export default RestaurtantCart;