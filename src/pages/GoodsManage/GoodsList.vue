<template>
    <Card>
        <section class="content-top">
            <Button size="small" type="primary" icon="el-icon-plus" @click="addGoods">添加商品</Button>
            <Input v-model="params.keyword" placeholder="请输商品名称/编号查询" suffix-icon="el-icon-search" size="small"
                   style="width:280px;"/>
        </section>
        <Table :data="dataList" size="medium" stripe class="table-header-gray">
            <TableColumn type="index" label="序号"/>
            <TableColumn prop="account" label="商品名称"/>
            <TableColumn prop="name" label="商品编号"/>
            <TableColumn prop="roles" label="商品分类"/>
            <TableColumn prop="status" label="库存数量"/>
            <TableColumn prop="status" label="总销售数量"/>
            <TableColumn prop="status" label="当前状态">
                <template slot-scope="scope">
                    <ElSwitch
                            :value="true"
                            active-text="上架"
                            inactive-text="下架"
                    ></ElSwitch>
                </template>
            </TableColumn>
            <TableColumn label="操作">
                <template slot-scope="scope">
                    <Button @click="editUser(scope.row)" type="text" size="medium">修改商品</Button>
                    <Button @click="deleteUser(scope.row)" type="text" size="medium">删除商品</Button>
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
        <!--        <UserModal-->
        <!--                :handelType="handelType"-->
        <!--                :visible="isShowUserModal"-->
        <!--                @close-modal="closeModal">-->
        <!--        </UserModal>-->
    </Card>
</template>

<script>
    // import UserModal from './components/UserModal'
    import {Switch as ElSwitch} from 'element-ui'

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
        name: 'GoodsList',
        components: {ElSwitch},
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
            addGoods() {
                this.$router.push({name: 'goodsDetail', query: {type: 'add'}})
            },
            // 编辑用户
            editUser() {
                this.isShowUserModal = true
            },
            // 删除用户
            deleteUser() {
            },
            // 重置密码
            resetPassword() {
            },
            // 关闭弹窗
            closeModal(v) {
                this.isShowUserModal = false
                if (v) {
                    this.getDataList()
                }
            },
            sizeChange(v) {
            },
            pageChange(v) {
            }
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