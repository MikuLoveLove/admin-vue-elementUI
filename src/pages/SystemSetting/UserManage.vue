<template>
    <Card>
        <section class="content-top">
            <Button size="small" type="primary" icon="el-icon-plus">新增角色</Button>
            <Input placeholder="请输入用户账号/用户名" suffix-icon="el-icon-search" size="small" style="width:280px;"/>
        </section>
        <Table :data="dataList"  size="medium" stripe class="table-header-gray">
            <TableColumn type="index" label="序号"/>
            <TableColumn prop="account" label="账号"/>
            <TableColumn prop="name" label="用户名"/>
            <TableColumn prop="roles" label="拥有角色"/>
            <TableColumn prop="status" label="当前状态"/>
            <TableColumn label="操作">
                <template slot-scope="scope">
                    <Button @click="editUser(scope.row)" type="text" size="small">修改</Button>
                    <Button @click="deleteUser(scope.row)" type="text" size="small">删除</Button>
                    <Button @click="resetPassword(scope.row)" type="text" size="small">重置密码</Button>
                </template>
            </TableColumn>
        </Table>
    </Card>
</template>

<script>
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
        name: 'UserManage',
        data() {
            return {
                dataList: [],
                pagination: {
                    page: 1,
                    size: 10
                }
            }
        },
        mounted() {
            this.getDataList()
        },
        methods: {
            getDataList () {
                this.dataList = dataArr
            },
            editUser () {},
            deleteUser () {},
            resetPassword () {}
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