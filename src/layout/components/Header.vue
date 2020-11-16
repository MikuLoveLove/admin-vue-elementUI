<template>
    <header class="header-box">
        <div class="header-top">
            <span @click="changeCollapse" v-if="collapse"><Icon class="el-icon-s-unfold"/></span>
            <span @click="changeCollapse" v-else><Icon class="el-icon-s-fold"/></span>
        </div>
        <div class="header-breadcrumb"></div>
    </header>
</template>

<script>
    import {Icon} from 'element-ui'

    export default {
        name: 'Header',
        components: {Icon},
        props: {
            collapse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            changeCollapse() {
                this.$emit('set-collapse')
            }
        }
    }
</script>

<style scoped>
    .header-top {
        padding: 0 15px;
        font-size: 22px;
        line-height: 49px;
        border-bottom: 1px solid #ededed;
    }

    .header-breadcrumb {
        height: 35px;
        background: #fff;
    }
</style>