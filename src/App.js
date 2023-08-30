// entire file is javascript

import './App.css'; // css for app comp
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import HocDemoPage from './Pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from './Pages/HooksDemoPage/HooksDemoPage';
import { PageContext } from './context/PageContext/PageContext.js';
import ShopPage from './Pages/ShopPage/ShopPage';
import { CartContext } from './context/CartContext/CartContext';
// import ErrorBoundary from './Containers/Shared/ErrorBoundary/ErrorBoundary';

function App () {
  const userDetails = {
    isLoggedIn: false,
    lastLogIn: 'Yesterday 10 PM'
  };

  const cartItem = [10];
  return (
    // {/* must return jsx */}
    <CartContext.Provider value={cartItem}>
      <BrowserRouter>
        <div>
          <Header />
          <main className="container mt-5 pt-3">
            {/* margin top- mt-5 padding top -pt-5 */}
            {/* import npm i react-router-dom package */}

            <PageContext.Provider value={userDetails}>
              {/* Step 2 of Context API:
                Using <PageContext.Provider> to share the data across the select few components
                // for step 3 refer ContactUsPage.js
          */}
              <Routes>
                <Route path="/" element={<HomePage />}></Route>

                <Route path="/hoc-demo" element={<HocDemoPage />}></Route>

                <Route path="/about-us" element={<AboutUs />}></Route>

                <Route path="/contact-us" element={<ContactUs />}></Route>

                <Route path="/hooks-demo" element={<HooksDemoPage />}></Route>

                <Route path="/shop" element={<ShopPage />}></Route>
              </Routes>
            </PageContext.Provider>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
// must be exported
