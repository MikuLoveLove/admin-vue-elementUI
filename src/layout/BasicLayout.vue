<template>
    <div class="basic-box">
        <SideMenu :collapse="collapse"/>
        <section class="basic-inner">
            <Header :collapse="collapse" @set-collapse="setCollapse"/>
            <main class="basic-content">
                <router-view></router-view>
            </main>
            <footer>
                <div class="link-box">
                    <UseLink href="https://cn.vuejs.org/" target="_blank">Vue</UseLink>
                    <UseLink><SelfIcon icon="#icon-github" class="gitHub"/></UseLink>
                    <UseLink href="https://element.eleme.cn/#/zh-CN" target="_blank">ElementUI</UseLink>
                </div>
                <div class="link-box">
                    <span style="margin-right: 2px">Copyright© 2020</span>
                    <UseLink href="https://github.com/MikuLoveLove" target="_blank" style="margin-left: 2px">MikuLoveLove</UseLink>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import SideMenu from "./components/SideMenu"
    import {Link as UseLink} from 'element-ui'

    export default {
        name: "BasicLayout",
        components: {Header, SideMenu, UseLink},
        data() {
            return {
                collapse: false
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
            setCollapse() {
                console.log(66666)
                this.collapse = !this.collapse
            }
        }
    }
</script>

<style scoped lang="less">
    .link-box {
        display: flex;
        align-items: center;
        justify-content: center;
        .gitHub {
            margin: 0 15px;
            font-size: 22px;
        }
    }
</style>