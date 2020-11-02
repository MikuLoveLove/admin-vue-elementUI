<template>
    <div class="side-menu" :class="{active: collapse}">
        <section class="side-header">
            <img :src='img' alt="">
            <span v-show="!collapse" style="width: 96px">易优管理系统</span>
        </section>
        <Menu router :collapse="collapse" collapse-transition :default-active="defaultActive">
            <MenuItem index="/home">
                <i class="el-icon-s-home"/>
                <span slot="title">首页</span>
            </MenuItem>
            <Submenu index="/goodsManage">
                <template slot="title">
                    <i class="el-icon-menu"/>
                    <span>商品管理</span>
                </template>
                <MenuItem index="/goodsManage/category">商品分类</MenuItem>
                <MenuItem index="/goodsManage/goodsList">商品列表</MenuItem>
            </Submenu>
            <Submenu index="/orderManage">
                <template slot="title">
                    <i class="el-icon-tickets"/>
                    <span>订单管理</span>
                </template>
                <MenuItem index="/orderManage/orderList">订单列表</MenuItem>
            </Submenu>
            <Submenu index="/systemSetting">
                <template slot="title">
                    <i class="el-icon-setting"/>
                    <span>系统设置</span>
                </template>
                <MenuItem index="/systemSetting/roleManage">角色管理</MenuItem>
                <MenuItem index="/systemSetting/userManage">用户管理</MenuItem>
                <MenuItem index="/systemSetting/authorityManage">权限列表</MenuItem>
            </Submenu>
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
                img: img
            }
        },
        computed: {
            defaultActive() {
                return this.$route.path
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