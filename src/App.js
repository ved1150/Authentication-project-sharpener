import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import GlobalState from "./context/GlobalState";
import { useContext } from "react";
import globalContext from "./context/globalContext";
function App() {
  const a = useContext(globalContext);
  console.log(a);
  let getToken = JSON.parse(localStorage.getItem("token"));
  return (
    <GlobalState>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          {getToken && (
            <Route path="/profile">
              <UserProfile />
            </Route>
          )}
          <Route path={"*"}>
            <Redirect to={"./"} />
          </Route>
        </Switch>
      </Layout>
    </GlobalState>
  );
}

export default App;
