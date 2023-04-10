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
import JobDetails from './JobCategory/SingleCategory/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/details/:jobId',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/features.json')
          const data = await res.json()
          const single = data.find(job => job.id == params.jobId)
          if (single) {
            return single
          }
          else {
            return {}
          }
        },
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
