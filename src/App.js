import React, {useState, useEffect} from 'react';
import './App.css';
import ProductService from './API/ProductService';

/* ---- Components ---- */
import {Header} from './Components/Header'
import {Carousel} from './Components/Carousel'
import {SearchBar} from './Components/SearchBar'
import {Products} from './Components/Products'
import {BannerArea} from './Components/BannerArea'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts(setProducts);
  }, [setProducts]);

  console.log(products);
  
  function changeColor() {
    var navBar = document.getElementById("navbar-text-container").scrollTop;
    var carousel = document.getElementById("carouselSlides").scrollHeight;
    
    if (carousel > navBar) {
      console.log("success " + navBar + carousel);
    }
  };

  return (
    <div onWheel={() => changeColor()} className="container-fluid">
      <Header/>
      <Carousel/>
      <SearchBar/>
      <Products/>
      <BannerArea/>
    </div>
  );
}

export default App;
