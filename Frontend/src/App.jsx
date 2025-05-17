import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Userlayout } from "./components/Layout/Userlayout";
import Home from "./pages/Home";
import { Toaster } from 'sonner';




function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Userlayout />}>
        <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
