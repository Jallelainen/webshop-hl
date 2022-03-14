import './App.css';

/* ---- Components ---- */
import {Header} from './Components/Header'
import {Carousel} from './Components/Carousel'
import {SearchBar} from './Components/SearchBar'
import {Products} from './Components/Products'
import {BannerArea} from './Components/BannerArea'

function App() {

  return (
    <div className="container-fluid">
      <Header/>
      <Carousel/>
      <SearchBar/>
      <Products/>
      <BannerArea/>
    </div>
  );
}

export default App;
