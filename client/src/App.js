import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
// import Register from './components/Register';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Womenswear from './components/Womenswear';
import Menswear from "./components/Menswear"
import About from "./components/About"
import Profile from "./components/Profile"
import Register from "./components/Register"
import Login from './components/Login';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
       
        <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/womenswear' element={<Womenswear/>}/>
        <Route path='/menswear' element={<Menswear/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer/>
        </Router>
      
      </div>
  );
}

export default App;
