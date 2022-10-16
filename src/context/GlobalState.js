import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalState(props) {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);
  function logOutPage() {
    setToken(null);
    localStorage.removeItem("token");
  }
  const store = {
    tokenId: token,
    tokenIsAvilable: userIsLoggedIn,
    login: (token) => setToken(token),
    logout: logOutPage,
  };
  return (
    <GlobalContext.Provider value={store}>
      {props.children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;
