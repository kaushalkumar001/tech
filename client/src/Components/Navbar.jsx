import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="sviet">
          <img className="logo-sviet" src="images/sviet.png" />
        </div>
        <div className="blackline">|</div>
        <div className="sviet">
          <img className="logo-naac" src="images/naac.png" />
        </div>
        <div className = "Logobrand">
         <h2>HOSTEL GRIEVANCES</h2>
        </div>

        <nav>
          <ul>
            <li className="navbaricon">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            </li>
          
            <li className="navbaricon">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
            </li>
            <li className="navbaricon">
              <NavLink to="/Login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

