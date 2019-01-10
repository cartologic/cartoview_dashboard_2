import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Home = React.lazy(() => import('./views/Home'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Settings = React.lazy(() => import('./views/Settings'));


const routes = [
  { path: '/', exact: true, name: 'Base', component: DefaultLayout },
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/settings', name: 'Settings', component: Settings },

];

export default routes;
