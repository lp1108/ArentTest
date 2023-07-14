import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';
// import MinimalLayout from '../layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../views/authentication-page/authentication/Login')));
// const AuthRegister3 = Loadable(lazy(() => import('../views/authentication-page/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    // element: <MinimalLayout />,
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
        // {
        //     path: '/register',
        //     element: <AuthRegister3 />
        // }
    ]
};

export default AuthenticationRoutes;
