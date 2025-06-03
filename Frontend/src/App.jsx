import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Userlayout } from "./components/Layout/Userlayout";
import Home from "./pages/Home";
import { Toaster } from 'sonner';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Profile from "./pages/Profile";
import Collections from "./pages/Collections";
import ProductCard from "./components/Products/ProductCard";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./components/Cart/OrderConfirmation";
import OrderIdDetails from "./components/Cart/OrderIdDetails";
import Orderdetails from "./pages/Orderdetails";




function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Userlayout />}>
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="profile" element={<Profile/>}></Route>
        <Route path="/collections/:collection" element={<Collections/>}></Route>
        <Route path="/product/:id" element={<ProductCard/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/orderconfirmation" element={<OrderConfirmation/>}></Route>
        <Route path="/my-orders" element={<Orderdetails/>}></Route>
        <Route path="/order/:id" element={<OrderIdDetails/>}></Route>

        
        </Route>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
