<template>
    <button
            class="common-button"
            :class="`${type}${plain ? ' plain' : ''}${disabled ? ' disabled' : '' }`"
            @click.stop="buttonClick"
    >{{text}}</button>
</template>

<script>
    export default {
        name: 'BasicButton',
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            plain: {
                type: Boolean,
                default: false
            },
            text: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            buttonClick () {
                if (this.disabled) return
                this.$emit('stroke')
            }
        }
    }
</script>

<style scoped lang="less">
    .common-button {
        border: none;
        background: none;
        border-radius: 4px;
        padding: 5px 20px;
        outline: none;
        color: #fff;
        &.plain {
            padding: 5px 0;
        }
        &.disabled {
            color: #9da3ae !important;
            cursor: not-allowed
        }
        &.primary {
            background: #a54eff;
            border: 1px solid #a54eff;
            &:hover {
                background: #B773FF;
                border: 1px solid #B773FF ;
            }
            &:active {
                background: #a54eff;
                border: 1px solid #a54eff;
            }
            &.plain {
                color: #a54eff;
                background: none;
                border: 1px solid transparent;
                &:hover {
                    color: #B773FF;
                }
                &:active {
                    color: #a54eff;
                }
            }
        }
        &.success {
            background: #67c23a;
            border: 1px solid #67c23a;
            &:hover {
                background: #85ce61;
                border: 1px solid #85ce61 ;
            }
            &:active {
                background: #67c23a;
                border: 1px solid #67c23a;
            }
            &.plain {
                color: #67c23a;
                background: none;
                border: 1px solid transparent;
                &:hover {
                    color: #85ce61;
                }
                &:active {
                    color: #67c23a;
                }
            }
        }
        &.warning {
            background: #e6951b;
            border: 1px solid #e6951b;
            &:hover {
                background: #ebb563;
                border: 1px solid #ebb563;
            }
            &:active {
                background: #e6951b;
                border: 1px solid #e6951b;
            }
            &.plain {
                color: #e6951b;
                background: none;
                border: 1px solid transparent;
                &:hover {
                    color: #ebb563;
                }
                &:active {
                    color: #e6951b;
                }
            }
        }
        &.error {
            background: #f56c6c;
            border: 1px solid #f56c6c;
            &:hover {
                background: #f78989;
                border: 1px solid #f78989 ;
            }
            &:active {
                background: #f56c6c;
                border: 1px solid #f56c6c;
            }
            &.plain {
                color: #f56c6c;
                background: none;
                border: 1px solid transparent;
                &:hover {
                    color: #f78989;
                }
                &:active {
                    color: #f56c6c;
                }
            }
        }
    }
    .common-button + button {
        margin-left: 10px;
    }
</style>