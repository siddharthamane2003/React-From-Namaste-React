import {RESTARAUNTCART_URL} from "../utility/constant"

let Header = () => {
  return (
    <div className="header">
      <div className="log">
        <img src={RESTARAUNTCART_URL} />
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

export default Header;