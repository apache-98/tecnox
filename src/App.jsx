import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Products } from './pages/Products.jsx'
import { Login } from './pages/Login.jsx'
import { Contact } from './pages/Contact.jsx'
import { Header } from './components/Header.jsx'
import { UserProvider } from './context/useContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import {MyCart} from './pages/MyCart.jsx'
import { Footer } from './components/Footer.jsx'

function App() {


  return (
    <>
      <CartProvider>
        <UserProvider>
          <header>
            <Header />
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/infouser' element={<Contact />} />
            <Route path='/MyCart' element={<MyCart />} />
          </Routes>
          <Footer/>

        </UserProvider>

      </CartProvider>




    </>
  )
}

export default App
