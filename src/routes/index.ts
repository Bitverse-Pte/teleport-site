import React from 'react';
const Home = React.lazy(() => import("views/home"));

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
]
export default routes;


