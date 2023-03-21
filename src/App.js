import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import AddCart from "./pages/AddCart";
import Home from "./pages/Home";
import ProductDetail from "./Component/ProductsDetails";
import CategoryDetail from "./Component/CategoryDetail";
import Dairy from "./Component/Dairy&Breafast";
import Munchies from "./Component/Munchies";
import ColdDrinks from "./Component/ColdDrinks";
import InstantFood from "./Component/InstantFood";
import TeaCoffee from "./Component/TeaCoffee";
import Bakery from "./Component/BakeryBiscuits";
import ListCategory from "./pages/ListCategory";
import Cards from "./Component/Cards";
import Trending from "./Component/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/searchitem" element={<Trending />}></Route>
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
