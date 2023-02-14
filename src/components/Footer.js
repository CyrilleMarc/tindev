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
        <SocialIcon bgColor="#6ce200" url="https://github.com/CyrilleMarc/" />
      </span>
      <span>
        <SocialIcon bgColor="#6ce200" url="mailto:cyrille.marc@epitech.eu" />
      </span>
      <span>
        <SocialIcon
          bgColor="#6ce200"
          url="https://portfolio-cyrille-marc.netlify.app/"
        />
      </span>
    </div>
  );
}

export default Footer;
