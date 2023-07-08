// entire file is javascript

import './App.css'; // css for app comp
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
// comp definition
function App() {
  return (
    // must return jsx
    <div>
      <Header/>

      <main className = "container mt-5 pt-3"> 
      {/* margin top- mt-5
       padding top -pt-5*/}
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
// must be exported