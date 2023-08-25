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
// import ErrorBoundary from './Containers/Shared/ErrorBoundary/ErrorBoundary';

function App () {
  return (
  // {/* must return jsx */}
    <BrowserRouter>
      <div>
        <Header/>
        <main className = "container mt-5 pt-3">
          {/* margin top- mt-5 padding top -pt-5 */}

          {/* import npm i react-router-dom package */}
          <Routes>
            <Route path = '/' element = {<HomePage/>}></Route>

            <Route path = '/hoc-demo' element = {<HocDemoPage/>}></Route>

            <Route path = '/about-us' element = {<AboutUs/>}></Route>

            <Route path = '/contact-us' element = {<ContactUs/>}></Route>

            <Route path = '/hooks-demo' element = {<HooksDemoPage/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
// must be exported
