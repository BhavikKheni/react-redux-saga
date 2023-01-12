import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="header">
     
        <div className="company-name">
          <h1>Buy</h1>
            <input
              type="text"
              onChange={(event) => dispatch(productSearch(event.target.value))}
              placeholder="Search Product"
              className="search-box"
            />
        </div>
      <div>
        <Link to="/cart">
          <div className="cart-div">
            <span>{result.length}</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
