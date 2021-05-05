import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Record Index</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          <Link to="/add">New Record</Link>
          &nbsp; | &nbsp;
          <span>{user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link to="" onClick={handleLogOut}>
            Sign Up / Log In
          </Link>
        </>
      )}
    </nav>
  );
}
