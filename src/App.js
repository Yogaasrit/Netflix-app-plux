// entire file is javascript

import './App.css'; // css for app comp
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { PageContext } from './context/PageContext/PageContext.js';
import { CartContext } from './context/CartContext/CartContext';
import { useReducer } from 'react';
import CartReducer from './Reducer/CartReducer/CartReducer';
import FavoriteReducer from './Reducer/FavoriteReducer/FavoriteReducer';
import { FavoriteContext } from './context/FavoriteContext/FavoriteContext';
import AppRoutes from './routes/AppRoutes/AppRoutes';
// import ErrorBoundary from './Containers/Shared/ErrorBoundary/ErrorBoundary';

function App() {
  const userDetails = {
    isLoggedIn: false,
    lastLogIn: 'Yesterday 10 PM'
  };

  const [cartState, cartDispatcher] = useReducer(CartReducer);

  const [favoriteState, favoriteDispatcher] = useReducer(FavoriteReducer);

  const cart = {
    cartState,
    cartDispatcher
  };

  const favorite = {
    favoriteState,
    favoriteDispatcher
  };

  return (
    // {/* must return jsx */}
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <FavoriteContext.Provider value={favorite}>
          <div>
            <Header />
            <p>Success</p>
            <main className="container mt-5 pt-3">
              {/* margin top- mt-5 padding top -pt-5 */}
              {/* import npm i react-router-dom package */}

              <PageContext.Provider value={userDetails}>
                {/* Step 2 of Context API:
                Using <PageContext.Provider> to share the data across the select few components
                // for step 3 refer ContactUsPage.js
          */}
                <AppRoutes />
              </PageContext.Provider>
            </main>
            <Footer />
          </div>
        </FavoriteContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
// must be exported
