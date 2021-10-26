import React from "react";
import Rating from "./Rating";

export default function ProductItem(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="card-item">
        <a href={`/product/${product._id}`}>
          <img
            src={product.image}
            width="450px"
            height="500px"
            alt={product.name}
          />
        </a>
        <div>
          <a href={`/product/${product._id}`}>
            <h2 className="text">{product.name}</h2>
          </a>
        </div>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">Sale Price: ₪ {product.salePrice}</div>
      </div>
    </div>
  );
}
