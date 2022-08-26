import React, { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';


function App() {
  const [ categories ] = useState([
    {
      name: 'Airshow'
    },
    {
      name: 'Christmas'
    },
    {
      name: 'Concert'
    },
    {
      name: 'Landscape'
    },
    {
      name: 'Portraits'
    },
    {
      name: 'Racing'
    },
    {
      name: 'Recreation'
    },
    {
      name: 'Softball'
    }
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])
  return (
  <>
  <BrowserRouter basename='/'>
    <div>
      <Header
      categories = {categories}
      setCurrentCategory = {setCurrentCategory}
      currentCategory = {currentCategory}
      >
      </Header>
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio currentCategory = {currentCategory} />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
