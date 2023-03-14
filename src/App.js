import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import AddCart from "./pages/AddCart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductsDetails";
import CategoryDetail from "./pages/CategoryDetail";
import Dairy from "./pages/Dairy&Breafast";
import Munchies from "./pages/Munchies";
import ColdDrinks from "./pages/ColdDrinks";
import InstantFood from "./pages/InstantFood";
import TeaCoffee from "./pages/TeaCoffee";
import Bakery from "./pages/BakeryBiscuits";
import ListCategory from "./pages/ListCategory";
import Cards from "./pages/Cards";
import Trending from "./pages/Trending";
 
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
  
        <Routes>
          <Route path="/searchitem" element={<Trending />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/card" element={<Cards />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addcart" element={<AddCart />}></Route>
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/category" element={<CategoryDetail />}></Route>

          <Route element={<CategoryDetail />}>
            <Route path="/fruits" element={<ListCategory />}></Route>
            <Route path="/dairy" element={<Dairy />}></Route>
            <Route path="/munchies" element={<Munchies />}></Route>
            <Route path="cold" element={<ColdDrinks />}></Route>
            <Route path="/instant" element={<InstantFood />}></Route>
            <Route path="/tea" element={<TeaCoffee />}></Route>
            <Route path="bakery" element={<Bakery />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
