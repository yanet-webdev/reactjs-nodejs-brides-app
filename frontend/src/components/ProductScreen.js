import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productAction";
import EmptyStripe from "./EmptyStripe";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Rating from "./Rating";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
      <EmptyStripe />

      <div className="category">
        <Link to="/" className="primary back-to">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </Link>
        <br />
        <br />
        <br />
        <div className="max-width">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="error">{error}</MessageBox>
          ) : (
            <div className="product-content">
              <div className="card-item">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-item">
                <ul className="details-product">
                  <li className="prod-name">{product.name}</li>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>
                  <li className="prod-price"> Price: ₪ {product.price}</li>
                  <li className="sale-price">
                    Sale Price : ₪ {product.salePrice}
                  </li>

                  <li className="description">Description</li>
                  <li className="description-text">{product.description}</li>

                  <li className="final-price">
                    <div className="title-price">
                      {" "}
                      Final Price: ₪ {product.salePrice}
                    </div>
                    <div className="status">
                      Status:
                      {product.countInStock > 0 ? (
                        <span className="success"> In Stock</span>
                      ) : (
                        <span className="error"> Unavailable</span>
                      )}
                    </div>
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div>
                            <span>Quantity: </span>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </li>
                        <li>
                          <button
                            onClick={addToCartHandler}
                            className="primary block"
                          >
                            Add to Cart
                          </button>
                        </li>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
