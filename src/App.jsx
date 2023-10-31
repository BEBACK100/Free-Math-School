
import { Outlet } from 'react-router-dom'

import Home from './Components/Home/Home'

function App() {
  

  return (
   <div>
    <Home></Home>
    <Outlet></Outlet>
   </div>
  )
}

export default App
