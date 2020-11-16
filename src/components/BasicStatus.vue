<template>
    <div :style="{fontSize}" :class="`status-box ${type}`">
        <span class="circle"></span>
        <span class="text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'BasicStatus',
        props: {
            text: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'primary'
            },
            fontSize: {
                type: String,
                default: '14px'
            },
        }
    }
</script>

<style scoped lang="less">
.status-box {
    width: 60px;
    display: flex;
    align-items: center;
    color: #a54eff;
    .circle {
        width: 6px;
        height: 6px;
        background: #a54eff;
        border-radius: 50%;
        margin-right: 10px;
    }
    &.success {
        color: #67c23a;
        .circle {
            background: #67c23a;
        }
    }
    &.warning {
        color: #e6a23c;
        .circle {
            background: #e6a23c;
        }
    }
    &.error {
        color: #f56c6c;
        .circle {
            background: #f56c6c;
        }
    }
    &.info {
        color: #409eff;
        .circle {
            background: #409eff;
        }
    }
    &.pale {
        color: #909399;
        .circle {
            background: #909399;
        }
    }
    // f56c6c
}
</style>