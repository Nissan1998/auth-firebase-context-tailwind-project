import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <h3>
        This is home
        {user && <span>{user.displayName}</span>}
      </h3>
    </div>
  );
};

export default Home;
