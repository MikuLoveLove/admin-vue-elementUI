<template>
    <div class="pagination-box">
        <Pagination
                @size-change="sizeChange"
                @current-change="currentChange"
                :current-page="pagination.page"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pagination.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            >
        </Pagination>
    </div>
</template>

<script>
    import {Pagination} from 'element-ui'
    export default {
        name: 'BasicPagination',
        components: {Pagination},
        props: {
            pagination: {
                type: Object,
                default () {
                    return {
                        page: 1,
                        size: 10
                    }
                }
            },
            total: {
                type: Number,
                default: 0
            }
        },
        methods: {
            sizeChange (val) {
                this.$emit('handle-size', val)
            },
            currentChange (val) {
                this.$emit('handle-page', val)
            }
        }

    }
</script>

<style scoped lang="less">
    .pagination-box {
        padding: 15px 0 10px;
        text-align: right;
    }
</style>