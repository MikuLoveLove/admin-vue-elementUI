<template>
    <div class="user-wrap">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "UserLayout"
    }
</script>

<style scoped lang="less">
    .user-wrap {
        width: 100%;
        height: 100%;
    }

</style>