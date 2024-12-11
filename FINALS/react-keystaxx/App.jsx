import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Product from './components/Product'
import Header from './Header'
import Profile from './components/Profile'  
import Developer from './components/Developer'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <center>
          <ul className='headerlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Products">Product</Link></li>
            <li><Link to="/Profile">Profile</Link></li> 
            <li><Link to="/Developer">Developer</Link></li> 
          </ul>
        </center>
      </nav>
      
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} /> 
        <Route path='/Developer' element={<Developer />} /> 
        <Route path='*' element={<NotFound />} />
        <Route path='/Products'>
          <Route index element={<Products />} />
          <Route path=':productid' element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
