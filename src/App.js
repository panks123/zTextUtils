import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';

// for react Router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Switch from "react-router-dom"
document.body.style.backgroundColor = '#070526'; // because by default we want dark mode
function App() {
  const d = new Date()
  const yr = d.getFullYear()
  
  const [mode, setMode] = useState('dark')
  const toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
      document.getElementById("flexSwitchCheckDefault").checked = false;
      document.body.style.backgroundColor = 'white';
    }
    else
    {
      setMode('dark');
      document.getElementById("flexSwitchCheckDefault").checked = true;
      document.body.style.backgroundColor = '#070526';
    }
  }

  return (
    <>
      <Router>
        {/* We have passed props:  title="TextUtils" for the Navbar component*/}
        <Navbar title="TextUtils" mode ={mode} toggleMode = {toggleMode}/>

        {/* When we don't pass the prop then It will take the value for the prop from the defaulProps*/}
        {/* <Navbar/>  */}
        <div className='container'>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>}/>

            <Route exact path="/" element={<TextForm heading='Enter the text to analyze' mode = {mode}/>}/>
          </Routes>
        </div>
        <Footer year = {yr}/>
      </Router>
    </>
  );
}

export default App;
