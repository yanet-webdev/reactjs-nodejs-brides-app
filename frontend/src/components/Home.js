import React from "react";
import Banner from "./Banner";
import Products from "./Products";

// import Products from './Products';
export default function Home() {
  return (
    <div>
      <Banner />
      <section class="category" id="category">
        <div className="note" id="note">
          <div className="max-width">
            <h4 className="title">
              Take a peek at the latest styles for brides!
            </h4>
            <Products />
          </div>
        </div>
      </section>
    </div>
  );
}
