import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const MenuItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to={props.link}>
          <h5>{props.title}</h5>
        </NavLink>
      </li>
    </div>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string
};
export default MenuItem;
