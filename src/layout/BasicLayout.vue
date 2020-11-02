<template>
    <div class="basic-box">
        <SideMenu :collapse="collapse"/>
        <section class="basic-inner">
            <Header :collapse="collapse" @set-collapse="setCollapse"/>
            <main class="basic-content">
                <router-view></router-view>
            </main>
            <footer>
                <div>Vue Github ElementUI</div>
                <div>Copyright© 2020 Miku Love Love</div>
            </footer>
        </section>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import SideMenu from "./components/SideMenu"

    export default {
        name: "BasicLayout",
        components: {Header, SideMenu},
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
            setCollapse () {
                console.log(66666)
                this.collapse = !this.collapse
            }
        }
    }
</script>

<style scoped>

</style>