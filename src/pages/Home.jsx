import Announcement from '../components/Announcement';
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products'
import NewsLetters from '../components/NewsLetters';
import Footer from '../components/Footer';


const Home = () => {
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

export default Home
