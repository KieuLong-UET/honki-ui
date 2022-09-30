//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
// import Shop from '~/pages/Shop';
import Order from '~/pages/Order';

//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/order', component: Order, layout: HeaderOnly },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
