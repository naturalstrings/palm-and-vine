import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function Header() {
  return (
    <header>
      <div className="logo-icon">
        <NavLink to="/welcome">
          <img src={palmvinelogo} alt="Palm and Vine logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/artists">Artists</NavLink>
          </li>
          <li>
            <NavLink to="/donations">Donations</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
