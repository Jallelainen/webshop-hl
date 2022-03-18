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
        ProductService.getProducts(setProducts);
      }, []);
      
  //Takes in users input and uses it as query in api call
  function handleChange(search){

    //first checks if input field is empty
    if (search === "") {
      setIsSearch(false); //if empty = not a search
      ProductService.getProducts(setProducts); // get all products
    }else{
      setIsSearch(true);// if not empty = a search
      ProductService.searchProducts(setProducts, search); // search products
    }
        
  }
  
  //function that gets the height of the carousel then checks if the user has scrolled more than that value, 
  //and if it has it changes the color of the navbar text
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

  //A tearny op checks if its a search or if the api is loading
  //if products array not 0? then show the products component. else if its 0 and not a search, then show a spinner. else if its 0 and it is a search, show no results
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
