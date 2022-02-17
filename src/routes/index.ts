import React from 'react';
const Home = React.lazy(() => import("views/home"));

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    // {
    //     path: '/teleport',
    //     exact: true,
    //     component: Teleport
    // },
    // {
    //     path: '/Mobile',
    //     exact: true,
    //     component: Mobile
    // }
]
export default routes;


