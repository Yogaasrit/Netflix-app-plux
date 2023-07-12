// entire file is javascript

import './App.css'; // css for app comp
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
        // {/* must return jsx */}
    <BrowserRouter>

    <div>
      <Header/>
      <main className = "container mt-5 pt-3"> 
      {/* margin top- mt-5 padding top -pt-5*/}


      <Routes>
        <Route path = '/' element = {<HomePage/>}></Route>
        <Route path = '/about-us' element = {<AboutUs/>}></Route>
        <Route path = '/contact-us' element = {<ContactUs/>}></Route>
      </Routes>


      </main>

      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
// must be exported