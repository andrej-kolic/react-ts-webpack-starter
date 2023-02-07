import { Link } from 'react-router-dom';
import './styles.css';

export const NavBar = () => {
  return (
    <nav className="NavBar__container">
      <ul>
        <li>
          <Link to={`/`}>~</Link>
        </li>
        <li>
          <Link to={`home`}>Home</Link>
        </li>
        <li>
          <Link to={`about`}>About</Link>
        </li>
        <li>
          <Link to={`404`}>404</Link>
        </li>
      </ul>
    </nav>
  );
};
