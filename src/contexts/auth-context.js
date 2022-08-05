import React, { createContext, useContext } from "react";

const GetCtx = createContext(null);
const SetCtx = createContext(null);

export function AuthContextProvider({
  isLoggedin,
  setIsLoggedIn,
  loginHandler,
  logoutHandler,
  children,
}) {
  return (
    <GetCtx.Provider
      value={{
        isLoggedin,
        loginHandler,
        logoutHandler,
      }}
    >
      <SetCtx.Provider
        value={{
          setIsLoggedIn,
        }}
      >
        {children}
      </SetCtx.Provider>
    </GetCtx.Provider>
  );
};

export function useAuthContextGet() {
  return useContext(GetCtx);
}

export function useAuthContextSet() {
  return useContext(SetCtx);
}
