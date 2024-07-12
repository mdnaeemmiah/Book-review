import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import ListedBooks from './Pages/ListedBooks';
import Read from './Pages/Read';
import Details from './Pages/Details';
import ReadBooks from './Components/ReadBooks';
import Wishlist from './Components/Wishlist';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('Fake.json'),
      },
      {
        path:'/details/:bookId',
        element:<Details></Details>,
        loader:()=>fetch('Fake.json'),
      },
     
      {
        path:'/read',
        element:<Read></Read>,
        loader:()=>fetch('Fake.json'),
      },

      {
        path:'/list',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('Fake.json'),
        children:[
          {
            path:'',
            element:<ReadBooks></ReadBooks>,
            loader:()=>fetch('Fake.json'),
          },
          {
            path:'wish',
            element:<Wishlist></Wishlist>,
            loader:()=>fetch('Fake.json'),
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
        <Toaster></Toaster>
  </React.StrictMode>,
)
