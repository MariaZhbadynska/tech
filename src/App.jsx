import "./App.css";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowProductPage from "./pages/ShowProductPage/ShowProduct";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import Step1Page from "./pages/step1Page/step1Page";
import Step2Page from "./pages/step2Page/step2Page";
import Step3Page from "./pages/step3Page/step3Page";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/product/:id" element={<ShowProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/step1" element={<Step1Page />} />
          <Route path="/step2" element={<Step2Page />} />
          <Route path="/step3" element={<Step3Page />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
