import { NavLink } from 'react-router-dom';
const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0" >
      <li className="nav-item"> 
        <NavLink className="nav-link " aria-current="page" to="/">
          Home
        </NavLink>
      </li>

      <li className="nav-item">    
        <NavLink className="nav-link " to="/about-us">
          About Us
        </NavLink>
      </li>

      <li className="nav-item">       
        <NavLink className="nav-link " to="/contact-us">
          Contact Us
        </NavLink>
      </li>
    </ul>
  )

}
export default MenuList;