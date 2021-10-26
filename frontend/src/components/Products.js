import React, { useEffect } from "react";

import ProductItem from "./ProductItem";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../actions/productAction";

export default function Products() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div>
      <div className="max-width">
        <section className="category" id="category">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="error">{error}</MessageBox>
          ) : (
            <div className="category-content">
              {products.map((product) => (
                <ProductItem key={product._id} product={product}></ProductItem>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
