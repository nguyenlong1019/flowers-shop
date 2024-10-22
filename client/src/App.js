import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Order from './pages/Order';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.scss';
import Flowers from './pages/Flowers';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import LoginAdmin from './pages/admin/LoginAdmin';
import Dashboard from './pages/admin/Dashboard';
import UserAdmin from './pages/admin/UserAdmin';
import CategoryAdmin from './pages/admin/CategoryAdmin';
import OrderAdmin from './pages/admin/OrderAdmin';
import FlowerAdmin from './pages/admin/FlowerAdmin';
import LayoutAdmin from './pages/admin/LayoutAdmin';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/flowers",
        element: <Flowers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <UserAdmin />,
      },
      {
        path: 'categories',
        element: <CategoryAdmin />,
      },
      {
        path: 'orders',
        element: <OrderAdmin />,
      },
      {
        path: 'products',
        element: <FlowerAdmin />,
      },
    ]
  },
  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },
]);


const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;