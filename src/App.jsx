import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home.jsx'
import {About} from './pages/About.jsx'
import {Products} from './pages/Products.jsx'
import {Login} from './pages/Login.jsx'
import {Contact} from './pages/Contact.jsx'
import { Header } from './components/Header.jsx'

function App() {


  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='contact' element={<Contact />} />
      </Routes>


    </>
  )
}

export default App
