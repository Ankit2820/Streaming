import "./app.scss"
import Home from "./pages/home/Home"; 
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route, 
} from "react-router-dom";
function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path: "/watch",
    element: <Watch />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
])
return (
  <div>
    <RouterProvider router={router} />
  </div>
);
}

export default App;
