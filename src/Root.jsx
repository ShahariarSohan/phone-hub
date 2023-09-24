import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import PhoneDetails from "./pages/PhoneDetails";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("./phones.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails></PhoneDetails>,
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default myRouter;
