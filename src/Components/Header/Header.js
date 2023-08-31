import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';
import MenuList from '../MenuList/MenuList';

function Header() {
  const cart = useContext(CartContext);
  // console.log(cart.cartState);

  const favorite = useContext(FavoriteContext);
  // console.log(favorite.favoriteState);

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
            <div className="collapse navbar-collapse" id="navbarCollapse"></div>
            <button type="button" className="btn btn-dark">
              Cart(
              {cart.cartState?.length === undefined
                ? '0'
                : cart.cartState?.length}
              )
            </button>
            <button type="button" className="btn btn-danger">
              Favorites(
              {favorite.favoriteState?.length === undefined
                ? '0'
                : favorite.favoriteState?.length}
              )
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
