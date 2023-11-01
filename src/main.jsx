import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import MainLayout from './Components/Layout/MainLayout.jsx'
import AboutUs from './Components/About-us/AboutUs.jsx'
import Academic from './Components/Academic/Academic.jsx'
import Login from './Components/SignIn/Login.jsx'
import Gallery from './Components/Gallery/Gallery.jsx'
import General from './Components/General/General.jsx'
import Circulars from './Components/Circular/Circulars.jsx'
import Admission from './Components/Admission/Admission.jsx'

const router=createBrowserRouter([
{
  path:'/',
  element:<MainLayout></MainLayout>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/aboutUs',
      element:<AboutUs></AboutUs>
    },
    {
      path:'/academic',
      element:<Academic></Academic>
    },
    {
      path:'/admission',
      element:<Admission></Admission>
    },
    {
      path:'/gallery',
      element:<Gallery></Gallery>
    },
    {
      path:'/general',
      element:<General></General>
    },
    {
      path:'/circular',
      element:<Circulars></Circulars>
    },
    {
      path:'/signup',
      element:<Login></Login>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
