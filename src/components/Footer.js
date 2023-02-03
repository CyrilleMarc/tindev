import React from "react";
import "../assets/styles/footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="reseaux">
      <span>
        <SocialIcon
          bgColor="#6ce200"
          url="https://www.linkedin.com/in/cyrille-marc-3914a5130/"
        />
      </span>
      <span>
        <SocialIcon
          bgColor="#6ce200"
          url="https://www.github.com/in/cyrille-marc-3914a5130/"
        />
      </span>
      <span>
        <SocialIcon
          bgColor="#6ce200"
          url="https://www.mailto.com/in/cyrille-marc-3914a5130/"
        />
      </span>
      <span>
        <SocialIcon
          bgColor="#6ce200"
          url="https://www.example.com/in/cyrille-marc-3914a5130/"
        />
      </span>
    </div>
  );
}

export default Footer;
