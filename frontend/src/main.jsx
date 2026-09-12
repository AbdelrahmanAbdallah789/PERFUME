import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/features/store.js";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

// Auth
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

import AdminRoute from "./pages/admin/AdminRoute";
import Profile from "./pages/users/Profile.jsx";
import UserOrder from "./pages/users/UserOrder.jsx"
import UserList from "./pages/admin/UserList";

import CategoryList from "./pages/admin/CategoryList";

import ProductList from "./pages/admin/ProductList";
import AllProducts from "./pages/admin/AllProducts";
import ProductUpdate from "./pages/admin/ProductUpdate";

import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";

import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";

import Shipping from "./pages/Orders/Shipping.jsx";
import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
import Order from "./pages/Orders/Order.jsx";
import OrderList from "./pages/admin/OrderList.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-orders" element={<UserOrder/>}/>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproducts" element={<AllProducts />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);