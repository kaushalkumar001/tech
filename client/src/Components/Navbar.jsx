import { NavLink } from 'react-router-dom';  // Make sure to import NavLink

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="Logo_brand">
            <NavLink to="/" end>SVIET HOSTEL</NavLink>
          </div>
          <div className="logo">
            NAAC
          </div>


          <nav>
            <ul>
              <li>
                <NavLink to="/" end activeClassName="active">Home</NavLink> {/* Use 'end' and 'activeClassName' */}
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/admission" activeClassName="active">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
