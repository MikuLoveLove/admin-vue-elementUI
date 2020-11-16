const loginPage = [
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "User" */ '../layout/UserLayout'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "User" */ '../pages/User/Login'),
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "User" */ '../pages/User/Profile'),
            }
        ]
    }
]
const mainPage = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../layout/BasicLayout'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../pages/Home/Index'),
            },
            {
                path: 'goodsManage/category',
                name: 'category',
                component: () => import(/* webpackChunkName: "goodsManage" */ '../pages/GoodsManage/Category')
            },
            {
                path: 'goodsManage/brandList',
                name: 'brandList',
                component: () => import(/* webpackChunkName: "goodsManage" */ '../pages/GoodsManage/BrandList')
            },
            {
                path: 'goodsManage/goodsList',
                name: 'goodsList',
                component: () => import(/* webpackChunkName: "goodsManage" */ '../pages/GoodsManage/GoodsList')
            },
            {
                path: 'orderManage/orderList',
                name: 'orderList',
                component: () => import(/* webpackChunkName: "orderManage" */ '../pages/OrderManage/OrderList')
            },
            {
                path: 'orderManage/orderSetting',
                name: 'orderSetting',
                component: () => import(/* webpackChunkName: "orderManage" */ '../pages/OrderManage/OrderSetting')
            },
            {
                path: 'systemSetting/roleManage',
                name: 'roleManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/RoleManage/RoleManage'),
            },
            {
                path: 'systemSetting/roleManage/roleAuthorization',
                name: 'roleAuthorization',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/RoleManage/RoleAuthorization'),
            },
            {
                path: 'systemSetting/userManage',
                name: 'userManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/UserManage/UserManage'),
            },
            {
                path: 'systemSetting/userManage/userDetail',
                name: 'userDetail',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/UserManage/UserDetail'),
            },
            {
                path: 'systemSetting/authorityManage',
                name: 'authorityManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/AuthorityManage'),
            },
            {
                path: 'dataStatistics/dataReport',
                name: 'dataReport',
                component: () => import(/* webpackChunkName: "dataStatistics" */ '../pages/DataStatistics/DataReport'),
            }
        ]
    }
]
const errorPage = [
    {
        path: '/notFound',
        name: 'notFound',
        component: () => import(/* webpackChunkName: "User" */ '../pages/Error/NotFound'),
    },
    {
        path: '/forbidden',
        name: 'forbidden',
        component: () => import(/* webpackChunkName: "User" */ '../pages/Error/Forbidden'),
    }
]

const routes = [...loginPage, ...mainPage, ...errorPage]
export default routes