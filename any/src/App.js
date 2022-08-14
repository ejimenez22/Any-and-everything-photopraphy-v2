import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
  <>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
