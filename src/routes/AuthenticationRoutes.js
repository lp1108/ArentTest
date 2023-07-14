import { lazy } from 'react';

// project imports
import Loadable from '../ui-component/Loadable';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('../views/authentication-page/authentication/Login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
    ]
};

export default AuthenticationRoutes;
