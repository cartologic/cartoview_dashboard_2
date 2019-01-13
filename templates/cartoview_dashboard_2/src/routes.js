import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Home = React.lazy(() => import('./views/Home'));
const Dashboards = React.lazy(() => import('./views/Dashboards'));
const DashboardViewer = React.lazy(() => import('./components/Dashboard/DashboardViewer'));
const Settings = React.lazy(() => import('./views/Settings'));


const routes = [
    {path: '/', exact: true, name: 'Base', component: DefaultLayout},
    {path: '/home', exact: true, name: 'Home', component: Home},
    {path: '/dashboards', exact: true, name: 'Dashboards', component: Dashboards},
    {path: '/dashboards/:id', exact: true, name: 'Dashboard Details', component: DashboardViewer},
    {path: '/settings', exact: true, name: 'Settings', component: Settings},
];

export default routes;
