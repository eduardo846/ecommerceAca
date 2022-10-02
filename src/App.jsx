import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Purchases from "./pages/Purchases";
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state=>state.isLoading)
  return (
    <HashRouter>
      <MyNavbar />
      {isLoading && <LoadingScreen/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
