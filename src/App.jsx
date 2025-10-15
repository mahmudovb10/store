import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./layout/MainLayout";
import SingleProduct from "./components/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
