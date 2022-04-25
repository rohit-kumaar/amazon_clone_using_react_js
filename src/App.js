import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Main from "./components/main/Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
