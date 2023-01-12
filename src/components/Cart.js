import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div>
      <Link to="/">Go to Products</Link>
      <div className="empty-card">
      {
        cartData && cartData.length  > 0 && 
        <button  className="empty-cart" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      }
      </div>
      {
        cartData && cartData.length  > 0&& 
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </table>

        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Cart;
