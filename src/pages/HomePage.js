import React from "react";
import NavBar from "../components/Navbar";
import Footer from '../components/Footer'
import '../assets/styles/HomePage.css';

function HomePage() {
  return (
    <div className='HomePage'>
      <NavBar />
      <div className='HomePageButton'>
        <button>Vous êtes recruteur</button>
        <button>Vous êtes développeur</button>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
