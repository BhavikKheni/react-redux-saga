import { addToCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img src={item.photo} alt="" className="product-img"/>
            <div className="item-wrapper">
              <div className="item-name"> {item.name} </div>
              <div className="item-price"> {item.price} </div>
             
              <div className="cart-btn-wrapper">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="add-cart-btn"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeToCart(item.id))}
                  className="add-cart-btn"
                >
                  Remove to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
