import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Inventory from './pages/inventory';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Sql from './pages/sql';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/sql' element={<Sql/>} />
        <Route path='/petstore-home' element={<SignUp/>} />
    </Routes>
    </Router>
);
}
  
export default App;