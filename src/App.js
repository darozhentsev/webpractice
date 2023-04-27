import './styles/index.css'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import Navbar from './components/navbar/navbar';
import HomePage from "./components/pages/home-page/home-page";
import Header from "./components/header/header"
import GamePage from "./components/pages/game-page/game-page";
import OrderPage from "./components/pages/order-page/order-page";
import Footer from './components/footer/footer';
import AboutUs from './components/pages/about-us/about-us';

function App() {
  return (
    
    <Provider store={store}>

      <div className="App">
  
          <Router> 
            <Navbar />
            <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/app/:title" element={<GamePage/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
          </Routes>
            <Footer />
          </Router> 
      </div>

    </Provider>
  );
}

export default App;
