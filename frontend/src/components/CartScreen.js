import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import EmptyStripe from "./EmptyStripe";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";

export default function CartScreen(props) {
  const productId = props.match.params.id;

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //delete action
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div>
      <EmptyStripe />
      <div className="max-width">
        <div className="cart-content">
          <h1>Shopping Cart</h1>
          <div className="cart-card">
            <div>
              <h2>Order Summary:</h2>
              <ul>
                <li>
                  <h3>
                    SubTotal: ₪
                    {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h3>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={cartItems.length === 0}
                  >
                    Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Continue Shopping</Link>
            </MessageBox>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="card-details">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <li>
                      {" "}
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </li>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>₪ {item.price}</div>
                    <div className="checkout-btn">
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
