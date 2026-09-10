import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { QuoteProvider } from "./context/QuoteContext";

import Header from "./components/layout/Header";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import QuoteCartPage from "./pages/QuoteCartPage";

function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/quote"
            element={<QuoteCartPage />}
          />
        </Routes>
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;