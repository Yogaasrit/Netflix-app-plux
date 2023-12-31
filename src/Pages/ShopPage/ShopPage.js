import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/CartContext/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext/FavoriteContext';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Apple-iPhone-13-pro-smartphone',
      description:
        '15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel.\n      Cinematic mode adds shallow depth....',
      price: 84900,
      quantity: 30
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21 FE 5G',
      description:
        'Samsung Galaxy S21 5G supports frequency bands GSM, LTE , 5G. Official\n   announcement date is January 14 2021.',
      price: 54600,
      quantity: 20
    }
  ];

  const cart = useContext(CartContext);

  const handleAddToCart = (product) => {
    // console.log(product);
    cart.cartDispatcher({
      type: 'ADD_TO_CART',
      payload: product
    });
  };

  const favorite = useContext(FavoriteContext);
  const handleAddToFavorites = (product) => {
    // console.log(product);
    favorite.favoriteDispatcher({
      type: 'ADD_TO_FAVORITES',
      payload: product
    });
  };

  return (
    <div>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <h1 style={{ color: '#748720' }}>🎉🎉Welcome to ShopPage!🎉🎉</h1>
      <h4>Shop with Us...!</h4>
      <div className="row">
        {products?.map((product) => {
          return (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p>Rs. {product.price}</p>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={handleAddToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="ms-2 btn btn-outline-danger btn-sm"
                    onClick={handleAddToFavorites.bind(this, product)}
                  >
                    Add to Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
