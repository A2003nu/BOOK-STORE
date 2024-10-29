import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from '../App'
import Home from "../home/Home";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/shop",
            element:<Shop />
        },
        
        {
          path:"/book/:id",
          element:<SingleBook />,
          loader:({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        },
        
    
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout />,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute />
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBooks/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks />
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element: <EditBooks />,
          loader:({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        }
      ]
    },
    {
      path:"sign-up",
      element:<Signup />
    },
    {
      path:"login",
      element:<Login />
    },{
      path:"logout",
      element:<Logout />
    }
  ]);

  export default router;