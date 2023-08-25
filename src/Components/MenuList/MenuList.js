import React from 'react'
import MenuItems from './MenuItems/MenuItems'

const MenuList = () => {
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0" >
        <MenuItems
          menuId = {1}
          menuName = 'Home'
          menuRoute = '/'
        />
        <MenuItems
          menuId = {2}
          menuName = 'Hoc Demo'
          menuRoute = '/hoc-demo'
        />
        <MenuItems
          menuId = {3}
          menuName = 'About Us'
          menuRoute = '/about-us'
        />
        <MenuItems
          menuId = {4}
          menuName = 'Contact us'
          menuRoute = '/contact-us'
        />
        <MenuItems
          menuId = {5}
          menuName = 'Hooks Demo'
          menuRoute = '/hooks-demo'
        />
      </ul>
    </div>
  )
}

export default MenuList

// import { NavLink } from 'react-router-dom';
// const MenuList = () => {
//   return (
//     <ul className="navbar-nav me-auto mb-2 mb-md-0" >
//       <li className="nav-item">
//         <NavLink className="nav-link " aria-current="page" to="/">
//           Home
//         </NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link " to="/hoc-demo">
//           Hoc Demo
//         </NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link " to="/about-us">
//           About Us
//         </NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link " to="/contact-us">
//           Contact Us
//         </NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link " to="/hooks-demo">
//           Hooks Demo
//         </NavLink>
//       </li>

//     </ul>
//   )
// }
// export default MenuList;
