import { Link } from 'react-router-dom';
import './styles.css';

export const NavBar = () => {
  //   return <nav class={styles["NavBar__container"]}>Nav bar</nav>;
  return (
    <nav className="NavBar__container">
      <ul>
        <li>
          <Link to={`home`}>Home</Link>
        </li>
        <li>
          <Link to={`about`}>About</Link>
        </li>
      </ul>
    </nav>
  );
};
