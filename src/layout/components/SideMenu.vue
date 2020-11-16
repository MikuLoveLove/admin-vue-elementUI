<template>
    <div class="side-menu" :class="{active: collapse}">
        <section class="side-header">
            <img :src='img' alt="">
            <span v-show="!collapse">易优销售管理系统</span>
        </section>
        <Menu router :collapse="collapse" collapse-transition :default-active="defaultActive">
            <template v-for="item in menuList">
                <Submenu v-if="item.children.length" :index="item.path" :key="item.path">
                    <template slot="title">
                        <i :class="item.icon"/>
                        <span>{{item.title}}</span>
                    </template>
                    <template v-for="i in item.children">
                        <MenuItem :index="i.path" :key="i.path">{{i.title}}</MenuItem>
                    </template>
                </Submenu>
                <MenuItem v-else :index="item.path" :key="item.path">
                    <i :class="item.icon"/>
                    <span slot="title">{{item.title}}</span>
                </MenuItem>
            </template>
            <!--            <MenuItem index="/home">-->
            <!--                <i class="el-icon-s-home"/>-->
            <!--                <span slot="title">首页</span>-->
            <!--            </MenuItem>-->
            <!--            <Submenu index="/goodsManage">-->
            <!--                <template slot="title">-->
            <!--                    <i class="el-icon-menu"/>-->
            <!--                    <span>商品管理</span>-->
            <!--                </template>-->
            <!--                <MenuItem index="/goodsManage/category">商品分类</MenuItem>-->
            <!--                <MenuItem index="/goodsManage/brandList">品牌管理</MenuItem>-->
            <!--                <MenuItem index="/goodsManage/goodsList">商品列表</MenuItem>-->
            <!--            </Submenu>-->
            <!--            <Submenu index="/orderManage">-->
            <!--                <template slot="title">-->
            <!--                    <i class="el-icon-tickets"/>-->
            <!--                    <span>订单管理</span>-->
            <!--                </template>-->
            <!--                <MenuItem index="/orderManage/orderList">订单列表</MenuItem>-->
            <!--                <MenuItem index="/orderManage/orderSetting">订单设置</MenuItem>-->
            <!--            </Submenu>-->
            <!--            <Submenu index="/dataStatistics">-->
            <!--                <template slot="title">-->
            <!--                    <i class="el-icon-pie-chart"/>-->
            <!--                    <span>数据统计</span>-->
            <!--                </template>-->
            <!--                <MenuItem index="/dataStatistics/dataReport">数据报表</MenuItem>-->
            <!--            </Submenu>-->
            <!--            <Submenu index="/systemSetting">-->
            <!--                <template slot="title">-->
            <!--                    <i class="el-icon-setting"/>-->
            <!--                    <span>系统设置</span>-->
            <!--                </template>-->
            <!--                <MenuItem index="/systemSetting/roleManage">角色管理</MenuItem>-->
            <!--                <MenuItem index="/systemSetting/userManage">用户管理</MenuItem>-->
            <!--                <MenuItem index="/systemSetting/authorityManage">权限列表</MenuItem>-->
            <!--            </Submenu>-->
        </Menu>
    </div>
</template>

<script>
    import {Menu, Submenu, MenuItem} from 'element-ui'
    import img from '../../assets/images/logo.png'

    export default {
        name: "SideMenu",
        components: {Menu, Submenu, MenuItem},
        props: {
            collapse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                img: img,
                menuList: [
                    {
                        name: 'home',
                        path: '/home',
                        title: '首页',
                        icon: 'el-icon-s-home',
                        children: []
                    },
                    {
                        name: 'goodsManage',
                        path: '/goodsManage',
                        title: '商品管理',
                        icon: 'el-icon-menu',
                        children: [
                            {
                                name: 'category',
                                path: '/goodsManage/category',
                                title: '商品分类',
                                children: []
                            },
                            {
                                name: 'brandList',
                                path: '/goodsManage/brandList',
                                title: '品牌管理',
                                children: []
                            },
                            {
                                name: 'goodsList',
                                path: '/goodsManage/goodsList',
                                title: '商品列表',
                                children: []
                            }
                        ]
                    },
                    {
                        name: 'orderManage',
                        path: '/orderManage',
                        title: '订单管理',
                        icon: 'el-icon-s-order',
                        children: [
                            {
                                name: 'orderList',
                                path: '/orderManage/orderList',
                                title: '订单列表',
                                children: []
                            },
                            {
                                name: 'orderSetting',
                                path: '/orderManage/orderSetting',
                                title: '订单设置',
                                children: []
                            }
                        ]
                    },
                    {
                        name: 'dataStatistics',
                        path: '/dataStatistics',
                        title: '数据统计',
                        icon: 'el-icon-s-data',
                        children: [
                            {
                                name: 'dataReport',
                                path: '/dataStatistics/dataReport',
                                title: '数据报表',
                                children: []
                            }
                        ]
                    },
                    {
                        name: 'systemSetting',
                        path: '/systemSetting',
                        title: '系统设置',
                        icon: 'el-icon-s-tools',
                        children: [
                            {
                                name: 'roleManage',
                                path: '/systemSetting/roleManage',
                                title: '角色管理',
                                children: []
                            },
                            {
                                name: 'userManage',
                                path: '/systemSetting/userManage',
                                title: '用户管理',
                                children: []
                            },
                            {
                                name: 'authorityManage',
                                path: '/systemSetting/authorityManage',
                                title: '权限列表',
                                children: []
                            }
                        ]
                    },
                ]
            }
        },
        computed: {
            // 选中的菜单
            defaultActive() {
                // 当地址值变化 会自动更新
                const {$route: {path}, menuList} = this
                const result = this.recursionFind(menuList, path)
                if (result) return result.path
                return ''
            }
        },
        methods: {
            // 递归查找
            recursionFind(arr, currPath) {
                let result = null // 初始化一个最终对象
                arr.find(item => {
                    const {path, children} = item
                    const isInclude = currPath.indexOf(path) > -1  // 检测当前项的地址 是否 被包含在当前地址里
                    if (isInclude && !children.length) { // 包含且没有子元素 赋值结束查找
                        result = item
                        return true
                    } else if (isInclude && children.length) { // 包含 且有子元素
                        result = this.recursionFind(children, currPath) // 递归进去查找 切获取返回值
                    } else return false // 都不存在 进行下一个
                })
                // 返回查询结果的值  递归会接收到此值
                return result
            }
        }
    }
</script>

<style scoped lang="less">
    .side-header {
        height: 64px;
        color: #fff;
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
        white-space: nowrap;

        img {
            display: inline-block;
            width: 32px;
            height: 32px;
            vertical-align: middle;
        }

        span {
            display: inline-block;
            line-height: 32px;
            font-weight: bold;
            margin-left: 15px;
            vertical-align: middle;
        }
    }
</style>