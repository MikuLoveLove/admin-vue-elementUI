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
        component: () => import(/* webpackChunkName: "User" */ '../layout/BasicLayout'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "User" */ '../pages/Home/Index'),
            },
            {
                path: 'goodsManage/category',
                name: 'category',
                component: () => import(/* webpackChunkName: "goodsManage" */ '../pages/GoodsManage/Category')
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
                path: 'systemSetting/roleManage',
                name: 'roleManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/RoleManage'),
            },
            {
                path: 'systemSetting/userManage',
                name: 'userManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/UserManage'),
            },
            {
                path: 'systemSetting/authorityManage',
                name: 'authorityManage',
                component: () => import(/* webpackChunkName: "SystemSetting" */ '../pages/SystemSetting/AuthorityManage'),
            }
        ]
    }
]
const errorPage = [
    // {}
]

const routes = [...loginPage, ...mainPage, ...errorPage]
export default routes