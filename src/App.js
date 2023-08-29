import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



import Navbar from './components/navbar/Navbar';
import Help from './pages/Help'
import Cart from './pages/Cart'
import Search from './pages/Search';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Help' Component={Help} />
          <Route path='/Cart' Component={Cart} />
          <Route path='/Search' Component={Search} />
        </Routes>
      </Router>
    </>
  );
}

export default App;