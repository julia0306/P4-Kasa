import React from 'react'
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import Properties from './Pages/Properties';
import Error from './Pages/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)