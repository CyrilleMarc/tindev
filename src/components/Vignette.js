import "../assets/styles/vignette.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Vignette(props) {
  const [isConnected, setIsConnected] = useState(false);
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // const [isRecruteur, setIsRecruteur] = useState("/QuestionnaireRecruteur");

  async function register(e) {
    e.preventDefault();
    try {
      await fetch("https://tindev.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        // mode: "no-cors",
        credentials: "include",
      });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  function getData() {
    // login
  }

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
              <button onClick={register} type="submit">
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
