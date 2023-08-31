import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/CartContext/CartContext';

const CartPage = () => {
  const cart = useContext(CartContext);
  console.log(cart.cartState);

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1 style={{ color: '#748720' }}>🎉🎉Welcome to ShopPage!🎉🎉</h1>
      <div className="row">
        {cart.cartState?.map((cartItems) => {
          return (
            <div className="col-md-4" key={cartItems.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cartItems.name}</h5>
                  <p className="card-text">{cartItems.description}</p>
                  <p>Rs. {cartItems.price}</p>
                </div>
                <div className="card-footer">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
