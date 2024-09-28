import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import RootLayout from "./components/RootLayout";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} /> {/* Index route as the default */}
        <Route path="cart" element={<Cart />} />  {/* Separate path for cart */}
      </Route>
    )
  );

  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}

export default App
