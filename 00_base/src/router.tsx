import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
    MainLayout,
    NoLayout,
} from '@/layouts';

import {
    ErrorPage,
    HomePage,
    LoginPage,
    LandingPage,
} from '@/pages';


const router = createBrowserRouter([
    {
      path: "*",
      element: <Navigate to="/login" replace />
    },
    {
      path: "/home",
      element: <NoLayout><LandingPage/></NoLayout>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/admin",
      element: <MainLayout><HomePage/></MainLayout>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/login",
      element: <NoLayout><LoginPage/></NoLayout>,
      errorElement: <ErrorPage/>,
    },
]);

export default router;
