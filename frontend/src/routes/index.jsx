import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Login from "../components/Login/login.jsx";
import { useState } from "react";
import authRoutes from "./authRoutes.jsx";

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login setIsAuthenticated={setIsAuthenticated} />, 
    },
    {
      path: "/app",
      element: (
        <authRoutes isAuthenticated={isAuthenticated}>
          <App />
        </authRoutes>

      
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
