import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar.js";
import Vignette from "../components/Vignette.js";
import Footer from "../components/Footer.js";

function HomeDeveloppeur() {
  return (
    <div>
      <Navbar />
      <div className="vignettesArea">
        <Vignette
          role1={"Developpeurs"}
          h1={"Espace Developpeurs"}
          inscription={"Inscription"}
        />

      </div>
      <Footer />
    </div>
  );
}

export default HomeDeveloppeur;
