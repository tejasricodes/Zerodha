import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Orders from "./pages/Orders/orders";
import Funds from "./pages/Funds/funds"
import Holdings from './pages/Holdings/holding'
import Bids from './pages/Bids/bids'
import Layout from "./layout";
import './App.css'

function NotFound() {
  return (
    <div className="text-white text-center mt-20 text-2xl">
      404 - Page Not Found
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page without navbar */}
        <Route path="/" element={<Login />} />

        {/* Routes wrapped in layout (with navbar) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/bids" element={<Bids />} />
        </Route>

        {/* 404 page without navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
