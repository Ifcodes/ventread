import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
