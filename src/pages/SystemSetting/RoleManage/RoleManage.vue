<template>
    <Card>
        <section class="content-top">
            <Button size="small" type="primary" icon="el-icon-plus" @click="addUser">创建角色</Button>
            <Input v-model="params.keyword" placeholder="请输入用户账号/用户名" suffix-icon="el-icon-search" size="small" style="width:280px;"/>
        </section>
        <Table :data="dataList" size="medium" stripe class="table-header-gray">
            <TableColumn type="index" label="序号"/>
            <TableColumn prop="account" label="角色名称"/>
            <TableColumn prop="name" label="角色描述"/>
            <TableColumn prop="roles" label="类型"/>
            <TableColumn prop="status" label="角色人数"/>
            <TableColumn label="操作">
                <template slot-scope="scope">
                    <BasicButton @stroke="editUser(scope.row)" type="primary" plain text="编辑"/>
                    <BasicButton @stroke="authorization(scope.row)" type="primary" plain text="授权"/>
                    <BasicButton @stroke="deleteUser(scope.row)" type="error" plain text="删除"/>
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
        <RoleModal
                :handelType="handelType"
                :visible="isShowUserModal"
                @close-modal="closeModal">
        </RoleModal>
    </Card>
</template>

<script>
    import RoleModal from '../components/RoleModal'

    const dataArr = [
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '123123'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '1231233'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '123143523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '12315523'}
    ]
    export default {
        name: 'RoleManage',
        components: {RoleModal},
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
        mounted() {
            this.getDataList()
        },
        methods: {
            getDataList() {
                this.dataList = dataArr
            },
            // 新增用户
            addUser () {
                this.isShowUserModal = true
            },
            // 编辑用户
            editUser() {
                this.isShowUserModal = true
            },
            // 删除用户
            deleteUser() {
            },
            // 重置密码
            authorization() {
                this.$router.push({name: 'roleAuthorization'})
            },
            // 关闭弹窗
            closeModal (v) {
                this.isShowUserModal = false
                if (v) {
                    this.getDataList()
                }
            },
            sizeChange (v) {},
            pageChange (v) {}
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