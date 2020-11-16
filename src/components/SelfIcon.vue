<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script>
    export default {
        name: 'SelfIcon',
        props: {
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>