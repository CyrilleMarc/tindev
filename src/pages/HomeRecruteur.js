import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar.js";
import Vignette from "../components/Vignette.js";
import Footer from "../components/Footer.js";

function HomeRecruteur() {
  return (
    <div>
      <Navbar />
      <div className="vignettesArea">
        <Vignette
          role1={"recruteurs"}
          h1={"Espace recruteurs"}
          inscription={"Inscription"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomeRecruteur;
