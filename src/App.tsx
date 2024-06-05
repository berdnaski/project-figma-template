import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Index";
import { NotFound } from "./pages/NotFound/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/*",
    element: <NotFound />
  }
])

export { router }