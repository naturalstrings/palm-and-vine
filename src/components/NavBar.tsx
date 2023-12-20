import { NavLink } from 'react-router-dom';
import palmvinelogo from '/palmvinelogo-no-bg.png';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-icon">
        <NavLink to="/welcome">
          <img src={palmvinelogo} alt="Palm and Vine logo" />
        </NavLink>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/artists">Artists</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/donations">Donations</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
}
