// Method 3
import React from 'react'
import MenuItems from './MenuItems/MenuItems'

const MenuList = () => {
  const attributeArrayObject = [
    { link: '/', title: 'Home' },
    { link: '/hoc-demo', title: 'HocDemo' },
    { link: '/about-us', title: 'AboutUs' },
    { link: '/contact-us', title: 'ContactUs' },
    { link: '/hooks-demo', title: 'HooksDemo' },
    { link: '/shop', title: 'Shop' }
    // { link: '/cart', title: 'Cart' }

  ];
  const componentDataArray = attributeArrayObject.map((attribute) => {
    return (
      <MenuItems
        key={attribute.link}
        link={attribute.link}
        title={attribute.title}
      />
    );
  });
  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">{componentDataArray}</ul>
    </div>
  )
}

export default MenuList

// Method 1
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
// -------------------------------------------------------------------------------------------

// Method 2
// import React from 'react'
// import MenuItems from './MenuItems/MenuItems'

// const MenuList = () => {
//   return (
//     <div>
//       <ul className="navbar-nav me-auto mb-2 mb-md-0">
//         <MenuItems
//           menuId = {1}
//           menuName = 'Home'
//           menuRoute = '/'
//         />
//         <MenuItems
//           menuId = {2}
//           menuName = 'HocDemo'
//           menuRoute = '/hoc-demo'
//         />
//         <MenuItems
//           menuId = {3}
//           menuName = 'AboutUs'
//           menuRoute = '/about-us'
//         />
//         <MenuItems
//           menuId = {4}
//           menuName = 'ContactUs'
//           menuRoute = '/contact-us'
//         />
//         <MenuItems
//           menuId = {5}
//           menuName = 'HooksDemo'
//           menuRoute = '/hooks-demo'
//         />
//         <MenuItems
//           menuId = {6}
//           menuName = 'Shop'
//           menuRoute = '/shop'
//         />
//       </ul>
//     </div>
//   )
// }

// export default MenuList
