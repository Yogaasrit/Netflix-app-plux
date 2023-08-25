import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItems = (props) => {
  return (
    <div>
      <li className="nav-item">
        <NavLink className="nav-link " to={props.menuRoute}>
          {props.menuName}
        </NavLink>
      </li>
    </div>
  );
};

MenuItems.propTypes = {
  menuRoute: PropTypes.string,
  menuName: PropTypes.string
}

export default MenuItems;
