import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
import PestSale from './components/PestSale/PestSale';
import Sale from './components/Sale/Sale';

function App() {
  return (
   <>
   <Header/>
   <PestSale/>
   <Sale/>
   <Footer/>
   </>
  );
}

export default App;
