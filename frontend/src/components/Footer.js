import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer>
        <h4 className="title">How to find us!</h4>
        <div className="social-media">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaPinterestP />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
        {/* <div>
            <span>Created By <a href="#">Yanet Dago Miranda</a>/ <span class="far fa-copyright"></span> 2021 All rights Reserved.</span>
        </div> */}
      </footer>
    </div>
  );
}
