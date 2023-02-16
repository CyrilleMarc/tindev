import React from "react";
import NavBar from "../components/Navbar";
import '../assets/styles/HomePage.css';

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='HomePageButton'>
        <button>Vous êtes recruteur</button>
        <button>Vous êtes développeur</button>
      </div>
    </div>
  );
}

export default HomePage;
