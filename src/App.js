import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContextProvider } from "./contexts/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogin = localStorage.getItem("isLoggedIn");

    if (storedUserLogin === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  console.log(isLoggedIn)

  return (
    <AuthContextProvider
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      loginHandler={loginHandler}
      logoutHandler={logoutHandler}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContextProvider>
  );
}

export default App;
