import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
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
