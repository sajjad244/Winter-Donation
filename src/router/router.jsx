import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [{path: "/", element: <Home></Home>}],
  },
]);

export default router;
