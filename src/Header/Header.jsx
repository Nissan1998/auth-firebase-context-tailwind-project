import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Nissan</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        {user && (
          <Link className="btn btn-ghost normal-case text-xl" to="/profile">
            Profile
          </Link>
        )}
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogout} className="btn btn-primary">
              SignOut
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
