import React from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import { useAuthContextGet, useAuthContextSet } from "../../contexts/auth-context";

const Home = (props) => {
  const { logoutHandler } = useAuthContextGet();
  const { setIsLoggedIn } = useAuthContextSet();
  console.log(logoutHandler)

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
