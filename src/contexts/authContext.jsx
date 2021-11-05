import { createContext, useEffect, useState } from "react";
import data from "../data";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  user: {
    user: {},
    token: "",
  },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  
  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    if (user) {
      setUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser({});
  };

  const loginHandler = (token, user) => {
    localStorage.setItem("user", JSON.stringify({ token, ...user }));
    console.log({ token, ...user });
    setUser({ token, ...user });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
