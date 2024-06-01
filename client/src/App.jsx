
import './App.css'
import { Home } from './pages/Home';
import Login from './pages/Login';
import { RootLayout } from './pages/RootLayout';
import SignUp from './pages/signUp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ]
  }
 
])
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
