import { Link } from 'react-router-dom';
import './styles.css';

export const NavBar = () => {
  return (
    <nav id="nav-bar" data-testid="nav-bar" className="NavBar__container">
      <ul>
        <li>
          <Link to={`/`}>~</Link>
        </li>
        <li>
          <Link data-testid="navigate-home" to={`home`}>
            Home
          </Link>
        </li>
        <li>
          <Link data-testid="navigate-about" to={`about`}>
            About
          </Link>
        </li>
        <li>
          <Link data-testid="navigate-storybook" to={`storybook`}>
            Storybook
          </Link>
        </li>
        <li>
          <Link to={`404`}>404</Link>
        </li>
        <li>
          <Link data-testid="navigate-settings" to={`settings`}>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};
