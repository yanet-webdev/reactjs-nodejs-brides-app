import React from "react";
import WeddingB from "./video/weddingB.mp4";
export default function Banner() {
  return (
    <div>
      <section className="banner" id="banner">
        <div className="video">
          <video autoPlay="autoplay" loop="loop" muted width="100%">
            <source src={WeddingB} type="video/mp4" />
            Your browser does not support this video tag.
          </video>
        </div>
      </section>
    </div>
  );
}
