import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/userList.css";

function HomePage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/edit").then((response) => {
      response.json().then((users) => {
        setUsers(users);
      });
    });
  }, []);

  function deleteUser(id) {
    fetch(`http://localhost:3002/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          navigate("/edit");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="usersList">
      <h1>Liste utilisateurs</h1>
      <div className="tableau">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Created date</th>
              <th>Recruteur</th>
              <th>Developpeur</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.length > 0 &&
            users.map((user) => (
              <>
                <tbody>
                  <tr>
                    <td key={user._id}>{user._id}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.isRecruteur}</td>
                    <td>{user.isDeveloppeur}</td>
                    <td className="tabBtn">
                      <Link to={`/edit/${user._id}`}>
                        <button className="edit">Edit</button>
                      </Link>
                      <Link to={`/delete/${user._id}`}>
                        <button
                          className="delete"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
        </table>
      </div>
    </div>
  );
}

export default HomePage;
