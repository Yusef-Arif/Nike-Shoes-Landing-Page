import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Home from "./Home";
const App = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
);

export default App;
