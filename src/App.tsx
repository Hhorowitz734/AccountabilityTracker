import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing";
import LoginPage from "./pages/login";
import GoalsHomePage from "./pages/goals_home";

import AuthRoute from './components/authroute.tsx'
import { initializeApp } from 'firebase/app';
import { Config } from './config/config.ts';

export const Firebase = initializeApp(Config.firebaseConfig);



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/goals',
      element: <AuthRoute><GoalsHomePage /></AuthRoute>
    }
  ]);

  return (
    <RouterProvider router = {router} />
  )
}

export default App
