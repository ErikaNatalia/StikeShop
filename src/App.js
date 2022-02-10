// import { Footer } from './views/Footer';
import { NavBar } from './views/NavBar';
// import { RoutesStike } from './views/RoutesStike';
import { ShopCart } from './views/ShopCart';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { StikeHome } from './views/StikeHome';
import { SecondSection } from './views/StikeHome/SecondSection';
import { CartItem } from './views/CartItem';


function App() { 

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<StikeHome/>}/>
            <Route path="/toUse" element={<ShopCart/>}/>
            <Route path="/secondSection" element={<SecondSection/>}/>
            <Route path="/cart" element={<CartItem/>}/>
          </Route>
        </Routes>
      </HashRouter>
      {/* <NavBar/> */}
      {/* <RoutesStike/> */}
      {/* <StikeHome/> */}
      {/* <ShopCart/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
