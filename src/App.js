/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import User from "./pages/User";
import ProductList from "./pages/ProductList/ProductList";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
