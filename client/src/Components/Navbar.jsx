import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="sviet">
          <img className="logo-sviet" src="images/sviet.png" />
        </div>

        <div className="Logo_brand">
          <NavLink to="/" end>SVIET HOSTEL</NavLink>
        </div>
        <div className="sviet">
          <img className="logo-naac" src="images/naac.png" />
        </div>

        <nav>
          <ul>
            <li className="navbaricon">
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/admission" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

