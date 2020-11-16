<template>
    <Card>
        <section class="content-top">
            <Button size="small" type="primary" icon="el-icon-plus" @click="addCategory">添加分类</Button>
            <Input v-model="params.keyword" placeholder="请输入分类名称检索" suffix-icon="el-icon-search" size="small"
                   style="width:280px;"/>
        </section>
        <Table :data="dataList" size="medium" stripe class="table-header-gray">
            <TableColumn type="index" label="序号" width="100"/>
            <TableColumn prop="account" label="分类名称"/>
            <TableColumn prop="name" label="角色描述"/>
            <TableColumn prop="roles" label="类型"/>
            <TableColumn prop="status" label="角色人数"/>
            <TableColumn label="操作">
                <template slot-scope="scope">
                    <BasicButton @stroke="editCategory(scope.row)" type="primary" plain text="编辑"/>
                    <!--                    <BasicButton @stroke="authorization(scope.row)" type="primary" plain text="授权"/>-->
                    <BasicButton @stroke="deleteCategory(scope.row)" type="error" plain text="删除"/>
                </template>
            </TableColumn>
        </Table>
        <BasicPagination
                :total="total"
                :pagination="pagination"
                @handle-size="sizeChange"
                @handle-page="pageChange"
        >
        </BasicPagination>
    </Card>
</template>

<script>
    export default {
        name: 'Category',
        data() {
            return {
                isShowUserModal: false,
                handelType: 'add',
                dataList: [],
                total: 0,
                pagination: {
                    page: 1,
                    size: 10
                },
                params: {
                    keyword: null
                }
            }
        },
        methods: {
            // 获取用户列表
            getDataList() {
                this.dataList = []
            },
            addCategory() {
            },
            editCategory() {
            },
            deleteCategory() {
            },
            sizeChange(v) {
                this.pagination.size = v
                this.pagination = {size: v, page: 1}
                this.getDataList()
            },
            pageChange(v) {
                this.pagination.page = v
                this.getDataList()
            },
        }
    }
</script>

<style scoped lang="less">
    .content-top {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }
</style>