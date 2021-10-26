import React from "react";
import EmptyStripe from "./EmptyStripe";

export default function ShippingScreen() {
  return (
    <div>
      <div className="max-width">
        <EmptyStripe />
        <div className="cart-content ">
          <div className="alert-error">Not Allow to Checkout</div>
        </div>
      </div>
    </div>
  );
}
