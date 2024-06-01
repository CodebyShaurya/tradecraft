import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Heading from './Components/Header';
import Home from './Pages/Home'

function App() {

  return (
    <div >
      <Heading/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
