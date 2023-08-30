import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import MenuList from '../MenuList/MenuList';

function Header () {
  const cartItem = useContext(CartContext);
  console.log(cartItem);
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-md fixed-top"
          style={{ backgroundColor: '#a9c52f' }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-danger" to="/">
              <h3>NetflixApp</h3>
            </Link>
            <MenuList />
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
            <button type="button" className="btn btn-danger">
              Cart(0)
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
