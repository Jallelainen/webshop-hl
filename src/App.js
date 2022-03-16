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
    var nav1 = document.getElementById("nav-a-1");
    var nav2 = document.getElementById("nav-a-2");
    var nav3 = document.getElementById("nav-a-3");   

    if ((carouselHeight - 50) < scrolledPx) {
      nav1.classList.remove("text-light");
      nav2.classList.remove("text-light");
      nav3.classList.remove("text-light");
    }else{
      nav1.classList.add("text-light");
      nav2.classList.add("text-light");
      nav3.classList.add("text-light");
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
