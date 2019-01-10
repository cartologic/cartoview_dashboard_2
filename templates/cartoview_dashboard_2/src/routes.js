import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Home = React.lazy(() => import('./views/Home'));
const Dashboards = React.lazy(() => import('./views/Dashboards'));
const Settings = React.lazy(() => import('./views/Settings'));


const routes = [
  { path: '/', exact: true, name: 'Base', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/dashboards', name: 'Dashboards', component: Dashboards },
  { path: '/settings', name: 'Settings', component: Settings },

];

export default routes;
