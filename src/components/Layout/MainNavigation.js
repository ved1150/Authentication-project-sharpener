import { useContext } from "react";
import { Link } from "react-router-dom";
import globalContext from "../../context/globalContext";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  let a = useContext(globalContext);

  let getToken = JSON.parse(localStorage.getItem("token"));
  console.log(getToken);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{!getToken && <Link to="/auth">Login</Link>}</li>
          <li>{getToken && <Link to="/profile">Profile</Link>}</li>
          <li>
            {getToken && (
              <Link to="/auth">
                {" "}
                <button onClick={() => a.logout()}>Logout</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
