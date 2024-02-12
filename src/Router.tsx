import { createBrowserRouter } from "react-router-dom";
import StyleGuide from "./pages/style-guide-page";
import ErrorDisplay from "./components/organisms/error-display";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorDisplay />,
  },
  {
    path: "style-guide",
    element: <StyleGuide />,
  },
]);
