import Product from '../pages/Product';
import Account from '../pages/Account';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/product',
    component: Product,
  },
];

export default routes;
