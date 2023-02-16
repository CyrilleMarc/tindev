import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/userList.css";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recruteur, setRecruteur] = useState(false);
  const [developpeur, setDeveloppeur] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3002/edit/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setRecruteur(data.recruteur);
        setDeveloppeur(data.developpeur);
      });
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRecruteurChange = (event) => {
    setRecruteur(!recruteur);
  };

  const handleDeveloppeurChange = (event) => {
    setDeveloppeur(!developpeur);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedUser = { name, email };

    fetch(`http://localhost:3002/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then(() => {
        navigate("/edit");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="EditUserList">
      <h1>Edit User</h1>
      {user && (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={id}
            onChange={handleNameChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="recruteur">Recruteur</label>
          <input
            type="checkbox"
            id="recruteur"
            name="recruteur"
            value={recruteur}
            onClick={handleRecruteurChange}
          />

          <label htmlFor="developpeur">Developpeur</label>
          <input
            type="checkbox"
            id="developpeur"
            name="developpeur"
            value={developpeur}
            onClick={handleDeveloppeurChange}
          />

          <button className="save" type="submit">
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default EditUser;
