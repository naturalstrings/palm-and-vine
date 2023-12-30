import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function Header() {
  return (
    <header>
      <div className="logo-icon">
        <NavLink to="/">
          <img src={palmvinelogo} alt="Palm and Vine logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/artists">Artists</NavLink>
          </li>
          <li>
            <NavLink to="/personnel">Personnel</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* <li>
            <NavLink to="/login">Log In</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
