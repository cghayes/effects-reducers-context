import React from "react";
import { useAuthContextGet } from "../../contexts/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const { isLoggedIn, logoutHandler } = useAuthContextGet();
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
