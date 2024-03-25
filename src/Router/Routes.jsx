import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root/Root";
import Listedbooks from "../Pages/ListedBooks/Listedbooks";
import Toread from "../Pages/Toread/Toread";
import Errorpage from "../Pages/Errors/Errorpage";
import Book_details from "../Pages/Book-details/Book_details";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/listedbooks',
            element:<Listedbooks></Listedbooks>
        },
        {
            path:'/toread',
            element:<Toread></Toread>
        },
        {
            path:'/book-details/:id',
            element:<Book_details></Book_details>
        }
      ]
    },
  ]);
  export default router