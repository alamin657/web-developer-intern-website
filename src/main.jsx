import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Home from './Blog/Home/Home';
import Statistics from './Header/Statistics/Statistics';
import AppliedJobs from './Blog/AppliedJobs/AppliedJobs';
import Blog from './Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
