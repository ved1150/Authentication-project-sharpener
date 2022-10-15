import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalState(props) {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
 
  const store = {
    tokenIsAvilable: userIsLoggedIn,
    login: (token) => setToken(token),
    logout: () =>  setToken(null),
  };
  return (
    <GlobalContext.Provider value={store}>
      {props.children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;
