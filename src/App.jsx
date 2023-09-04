import "./App.css";

import Error404 from "./components/pages/Error404/Error404";
import Home from "./components/pages/Home/Home";
import Cities from "./components/pages/Cities/Cities";
import LayoutMain from "./components/pages/layouts/LayoutMain";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CityDetails from "./components/CityDetails/CityDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/cityDetails/:id",
        element: <CityDetails />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
