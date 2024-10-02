import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import QuoteGenerator from './QuoteGenerator'
function App() {

  return (
    <>
     <Header></Header>
      <center><QuoteGenerator></QuoteGenerator></center>
     <Footer></Footer>
    </>
  )
}

export default App
