import './App.css';
import { NavbarComp } from './components/navbar/NavbarComp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/home content/Home';
import { Products } from './components/products/Products';
import { Services } from './components/services/Services';
import { Login } from './components/login/Login';
import { About } from './components/about/About';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/graphics" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
