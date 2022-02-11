import { NavBar } from './views/NavBar';
import { ShopCart } from './views/ShopCart';
import { HashRouter, Routes, Route } from "react-router-dom";
import { StikeHome } from './views/StikeHome';
import { SecondSection } from './views/StikeHome/SecondSection';
import { CartItem } from './views/CartItem';


function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<StikeHome />} />
            <Route path="/toUse" element={<ShopCart />} />
            <Route path="/secondSection" element={<SecondSection />} />
            <Route path="/cart" element={<CartItem />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
