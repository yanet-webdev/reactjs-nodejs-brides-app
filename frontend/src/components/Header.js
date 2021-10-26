import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <header>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <h2>Yanet's Brides</h2>
          </div>
          <ul className="menu">
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/plan" activeClassName="active">
                Planning
              </NavLink>
            </li>
          </ul>

          <div className="cart">
            <Link to="/cart">
              <i className="fas fa-shopping-basket"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
          </div>
          <ul className="sign-in">
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
