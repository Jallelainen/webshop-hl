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
      }, []);
      
  function handleChange(search){

    if (search === "") {
      ProductService.getProducts(setProducts);
    }else{
      ProductService.searchProducts(setProducts, search);
    }
        
  }
  
  function changeColor() {
    var scrolledPx = window.scrollY;
    var carouselHeight = document.getElementById("carouselSlides").scrollHeight;
    var nav = document.getElementById("navbar"); 

    if ((carouselHeight - 50) < scrolledPx) {
      nav.classList.remove("navbar-dark");
      nav.classList.add("navbar-light");
    }else{
      nav.classList.remove("navbar-light");
      nav.classList.add("navbar-dark");
    }
  };

  return (
    <div onWheel={() => changeColor()} id="main-content" className="container-fluid">
      <Header/>
      <Carousel/>
      <SearchBar handleChange={handleChange}/>
      <Products products={products}/>
      <BannerArea/>
    </div>
  );
}

export default App;
