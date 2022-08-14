import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
  <>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
