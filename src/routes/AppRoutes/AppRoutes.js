import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import HocDemoPage from '../../Pages/HocDemoPage/HocDemoPage';
import HooksDemoPage from '../../Pages/HooksDemoPage/HooksDemoPage';
import ShopPage from '../../Pages/ShopPage/ShopPage';
import CartPage from '../../Pages/CartPage/CartPage'
import UnitTestingPage from '../../Pages/UnitTestingPage/UnitTestingPage';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>

      <Route path="/hoc-demo" element={<HocDemoPage />}></Route>

      <Route path="/about-us" element={<AboutUs />}></Route>

      <Route path="/contact-us" element={<ContactUs />}></Route>

      <Route path="/hooks-demo" element={<HooksDemoPage />}></Route>

      <Route path="/shop" element={<ShopPage />}></Route>

      <Route path="/cart" element={<CartPage />}></Route>

      <Route path="/unit-testing" element = {<UnitTestingPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes
