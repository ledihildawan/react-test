import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";

import Home from "./views/pages/home";
import Menu from "./views/pages/menu";
import Details from "./views/pages/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:menu",
    element: <Menu />,
  },
  {
    path: "/:menu/:id",
    element: <Details />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
