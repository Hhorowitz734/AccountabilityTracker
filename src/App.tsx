import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <LandingPage />
    },
  ]);

  return (
    <RouterProvider router = {router} />
  )
}

export default App
