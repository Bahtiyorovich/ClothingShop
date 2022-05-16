import React from 'react'
import Announcement from "./components/Announcement"
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import Slider from './components/Slider'
import NewsLetters from './components/NewsLetters'
import Products from './components/Products'
import Categories from './components/Categories'

const App = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetters/>
        <Footer/>
    </div>
  )
}

export default App


