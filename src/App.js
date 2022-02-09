import { Footer } from './views/Footer';
import { NavBar } from './views/NavBar';
import { ShopCart } from './views/ShopCart';
// import { StikeHome } from './views/StikeHome';

function App() { 

  return (
    <div>
      <NavBar/>
      {/* <StikeHome/> */}
      <ShopCart/>
      <Footer/>
    </div>
  );
}

export default App;
