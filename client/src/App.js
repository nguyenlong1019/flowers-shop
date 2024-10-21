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
      }
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
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