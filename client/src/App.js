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
import LoginRequired from './pages/LoginRequired';
import LoggedIn from './pages/LoggedIn';
import LoginRequiredAdmin from './pages/admin/LoginRequiredAdmin';
import UpdateUser from './pages/admin/UpdateUser';
import UpdateCategory from './pages/admin/UpdateCategory';
import UpdateFlower from './pages/admin/UpdateFlower';
import UpdateOrder from './pages/admin/UpdateOrder'

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
        path: "/detail/:flowerId",
        element: <Detail />,
      },
      {
        path: "/order",
        element: <LoginRequired>
          <Order />
        </LoginRequired>,
      },
      {
        path: "/flowers",
        element: <Flowers />,
      },
      {
        path: "/cart",
        element: <LoginRequired>
          <Cart />
        </LoginRequired>,
      },
      {
        path: "/checkout",
        element: <LoginRequired>
          <Checkout />
        </LoginRequired>,
      },
      {
        path: '/register',
        element: <LoggedIn>
          <Register />
        </LoggedIn>,
      },
      {
        path: '/login',
        element: <LoggedIn>
          <Login />
        </LoggedIn>,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: '',
        element: <LoginRequiredAdmin>
          <Dashboard />
        </LoginRequiredAdmin>,
      },
      {
        path: 'users',
        element: <LoginRequiredAdmin>
          <UserAdmin />
        </LoginRequiredAdmin>,
      },
      {
        path: 'users/add',
        element: <LoginRequiredAdmin>
          <UpdateUser />
        </LoginRequiredAdmin>,
      },
      {
        path: 'users/edit/:userId',
        element: <LoginRequiredAdmin>
          <UpdateUser />
        </LoginRequiredAdmin>,
      },
      {
        path: 'categories',
        element: <LoginRequiredAdmin>
            <CategoryAdmin />
          </LoginRequiredAdmin>,
      },
      {
        path: 'categories/add',
        element: <LoginRequiredAdmin>
            <UpdateCategory />
          </LoginRequiredAdmin>,
      },
      {
        path: 'categories/edit/:categoryId',
        element: <LoginRequiredAdmin>
            <UpdateCategory />
          </LoginRequiredAdmin>,
      },
      {
        path: 'orders',
        element: <LoginRequiredAdmin>
          <OrderAdmin />
        </LoginRequiredAdmin>,
      },
      {
        path: 'orders/add',
        element: <LoginRequiredAdmin>
          <UpdateOrder />
        </LoginRequiredAdmin>,
      },
      {
        path: 'orders/edit/:orderId',
        element: <LoginRequiredAdmin>
          <UpdateOrder />
        </LoginRequiredAdmin>,
      },
      {
        path: 'products',
        element: <LoginRequiredAdmin>
          <FlowerAdmin />
        </LoginRequiredAdmin>,
      },
      {
        path: 'products/add',
        element: <LoginRequiredAdmin>
          <UpdateFlower />
        </LoginRequiredAdmin>,
      },
      {
        path: 'products/edit/:flowerId',
        element: <LoginRequiredAdmin>
          <UpdateFlower />
        </LoginRequiredAdmin>,
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