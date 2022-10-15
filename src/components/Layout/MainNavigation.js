import { useContext } from 'react';
import { Link } from 'react-router-dom';
import globalContext from '../../context/globalContext';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  let a = useContext(globalContext)
 
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
           {<Link to='/auth'>Login</Link> }
          </li>
          <li>
            { a.tokenIsAvilable && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {a.tokenIsAvilable && <button onClick={() => a.logout()}>Logout</button>  }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
