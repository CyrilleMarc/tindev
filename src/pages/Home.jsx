import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar.js";
import Vignette from "../components/Vignette.js";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="vignettesArea">
        <Vignette
          role1={"recruteurs"}
          role2={"developpeurs"}
          h1={"Espace recruteurs"}
          inscription={"Inscription"}
        />

        <Vignette 
        h1={"Espace développeurs"} 
        connexion={"Connexion"} />
      </div>
    </div>
  );
}

export default Home;
