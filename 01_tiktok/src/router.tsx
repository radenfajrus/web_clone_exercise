import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
    HomeLayout,
    NoLayout,
} from '@/layouts';

import {
    ErrorPage,
    HomePage,
    LoginPage,
    LandingPage,
    ForYouPage,
} from '@/pages';


const router = createBrowserRouter([
    {
      path: "*",
      element: <Navigate to="/foryou" replace />
    },
    {
      path: "/foryou",
      element: <HomeLayout><ForYouPage/></HomeLayout>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/home",
      element: <NoLayout><LandingPage/></NoLayout>,
      errorElement: <ErrorPage/>,
    },
    {
      path: "/login",
      element: <NoLayout><LoginPage/></NoLayout>,
      errorElement: <ErrorPage/>,
    },
]);

export default router;
