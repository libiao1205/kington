const Layout = () => import(/* webpackChunkName: 'index' */ '../jd_pack/layout')
const staticRoute = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/home'),
            },
            {
                path: '/introduceWe',
                name: '/introduceWe',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/introduceWe'),
            },
            {
                path: '/news',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/news'),
            },
            {
                path: '/newsDetails',
                name:'/newsDetails',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/newsDetails'),
            },
            {
                path: '/joinWe',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/joinWe'),
            },
            {
                path: '/contactWe',
                name: '/contactWe',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/contactWe'),
            },
            {
                path: '/product',
                name: '/product',
                component: () => import(/* webpackChunkName: 'home' */ '../jd_pack/product'),
            }
        ]
    },
    {
        path: '*',
        redirect: '/error/404'
    },
]

export default staticRoute
