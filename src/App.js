import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
import PestSale from './components/PestSale/PestSale';
import Sale from './components/Sale/Sale';
import Clothing from './components/Clothing/Clothing';
import Sale2 from './components/Sale2/Sale2';
import Lowest from './components/Lowest Price/Lowest';


function App() {
  return (
   <>
   <Header/>
   <PestSale/>
   <Sale/>
   <Clothing/>
    <Sale2/>
    <Lowest/>

   <Footer/>
   </>
  );
}

export default App;
