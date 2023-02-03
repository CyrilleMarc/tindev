import "../assets/styles/vignette.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Vignette(props) {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://63dced822308e3e319f0a84e.mockapi.io/recruteurs", {
        email,
        password,
      })
      .then(() => {
        console.log("user added");
        setEmail("");
        setPassword("");
      });
  };

  const getData = () => {
    // axios
    //   .get("https://63dced822308e3e319f0a84e.mockapi.io/users", {
    //     email,
    //     password,
    //   })
    //   .then(() => {
    setIsLogin(!isLogin);
    navigate("/Questionnaire");

    //   });
  };

  function handleChangeIsConnected() {
    setIsConnected(!isConnected);
  }

  return (
    <div className="wrapper">
      <div className="vignetteContainer">
        <h1>{props.h1}</h1>

        {!isConnected ? (
          <div className="vignetteContent">
            <h3>INSCRIPTION</h3>
            <form>
              <label>Email</label>
              <input
                type="text"
                value={email}
                placeholder=" Entrez votre email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br></br>
              <label>Mot de passe</label>
              <br></br>
              <input
                type="password"
                value={password}
                placeholder=" Entrez un mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br></br>
              <button onClick={postData} type="submit">
                S'inscrire
              </button>
              <span
                className="linkIsConnected"
                onClick={() => {
                  handleChangeIsConnected();
                }}
              >
                J'ai déjà un compte.
              </span>
            </form>
          </div>
        ) : (
          <div className="vignetteContent">
            <h3>CONNEXION</h3>
            <form>
              <label>Email</label>
              <input type="text" placeholder=" Entrez votre email"></input>
              <br></br>
              <label>Mot de passe</label>
              <br></br>
              <input
                type="password"
                placeholder=" Entrez votre mot de passe"
              ></input>
              <br></br>
              <button type="submit" onClick={getData}>
                Se connecter
              </button>
              <span
                className="linkIsConnected"
                onClick={() => {
                  handleChangeIsConnected();
                }}
              >
                Créer un compte
              </span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Vignette;
