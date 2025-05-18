import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Userlayout } from "./components/Layout/Userlayout";
import Home from "./pages/Home";
import { Toaster } from 'sonner';
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Profile from "./pages/Profile";




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
        
        </Route>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
