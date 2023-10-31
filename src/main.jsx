import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import MainLayout from './Components/Layout/MainLayout.jsx'

const router=createBrowserRouter([
{
  path:'/',
  element:<MainLayout></MainLayout>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
