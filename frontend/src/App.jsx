import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QuoteProvider } from "./context/QuoteContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import ProtectedRoute from "./components/auth/ProtectedRoute";

import Header from "./components/layout/Header";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import QuoteCartPage from "./pages/QuoteCartPage";
import AuthTest from "./pages/AuthTest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import QuoteHistory from "./pages/QuoteHistory";
import Services from "./pages/Services";
import PaintCalculator from "./pages/PaintCalculator";

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />

      <div className={isAuthenticated ? "md:ml-72" : ""}>
        <Routes>
          {/* Public routes */}

          <Route path="/" element={<Products />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}

          <Route element={<ProtectedRoute />}>
            <Route path="/products" element={<Products />} />

            <Route path="/products/:id" element={<ProductDetails />} />

            <Route path="/quote" element={<QuoteCartPage />} />

            <Route path="/quotes" element={<QuoteHistory />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/services" element={<Services />} />

            <Route path="/paint-calculator" element={<PaintCalculator />} />
          </Route>

          {/* Temporary auth testing */}

          <Route path="/auth-test" element={<AuthTest />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <QuoteProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </QuoteProvider>
    </AuthProvider>
  );
}

export default App;
