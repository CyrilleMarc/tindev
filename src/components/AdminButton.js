import React from "react";
import { Link } from "react-router-dom";

function AdminButton() {
  return (
    <div className="AdminButton">
      <Link to="/edit">
        <button>Page Edit Users</button>
      </Link>
    </div>
  );
}

export default AdminButton;
