import { lazy } from 'react';

// project imports
import MainLayout from '../layout/main-layout';
import Loadable from '../ui-component/Loadable';
import { ProtectedRoute } from './ProtectedRoute';
import { MealRecordProvider } from '../context/meal-record-context';
import { DiaryRecordProvider } from '../context/diary-record-context';
import { ColumnRecordProvider } from '../context/column-record-context';
// ==============================|| MAIN ROUTING ||============================== //

// Top page
const TopPage = Loadable(lazy(() => import('../views/top-page')));

// My Record
const MyRecord = Loadable(lazy(() => import('../views/my-record')));

// Column Page
const ColumnPage = Loadable(lazy(() => import('../views/column-page')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/topPage',
            element: <ProtectedRoute>
                <MealRecordProvider>
                    <TopPage />
                </MealRecordProvider>
            </ProtectedRoute>
        },
        {
            path: '/myRecord',
            element: <ProtectedRoute>
                <DiaryRecordProvider>
                    <MyRecord />
                </DiaryRecordProvider>
            </ProtectedRoute>
        },
        {
            path: '/columnPage',
            element: <ProtectedRoute>
                <ColumnRecordProvider>
                    <ColumnPage />
                </ColumnRecordProvider>
            </ProtectedRoute>
        },
        {
            path: '/',
            element: <ProtectedRoute>
                <ColumnRecordProvider>
                    <ColumnPage />
                </ColumnRecordProvider>
            </ProtectedRoute>
        },
    ]
};

export default MainRoutes;
