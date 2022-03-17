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
  const [isSearch, setIsSearch] = useState(false);
  
  useEffect(() => {
        //ProductService.getProducts(setProducts);
      }, []);
      
  function handleChange(search){

    if (search === "") {
      setIsSearch(false);
      ProductService.getProducts(setProducts);
    }else{
      setIsSearch(true);
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
      {products.length !== 0 ?  <Products products={products} /> : products.length === 0 && !isSearch?
      <div className="d-flex justify-content-center m-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : <div className="d-flex justify-content-center m-5"><h3>No results...</h3></div>}
      <BannerArea/>
    </div>
  );
}

export default App;
