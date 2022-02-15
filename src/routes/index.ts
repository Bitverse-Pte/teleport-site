import React from 'react';
const Home = React.lazy(() => import("views/home"));
const Teleport = React.lazy(() => import("views/teleport"));
const Mobile = React.lazy(() => import("views/mobile"));

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/teleport',
        exact: true,
        component: Teleport
    },
    {
        path: '/Mobile',
        exact: true,
        component: Mobile
    }
]
export default routes;


