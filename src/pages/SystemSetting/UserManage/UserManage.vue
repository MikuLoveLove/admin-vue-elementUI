<template>
    <Card v-if="showModel === 'list'" class="list-box">
        <section class="content-top">
            <Button size="small" type="primary" icon="el-icon-plus" @click="addUser">新增用户</Button>
            <div style="display: flex; align-items: center">
                <Input v-model="params.keyword" placeholder="请输入用户账号/用户名" suffix-icon="el-icon-search" size="small"
                       style="width:280px;"/>
                <Tooltip class="item" effect="dark" content="切换成卡片模式" placement="top-start">
                    <span @click="switchModel('card')">

                        <SelfIcon icon="#icon-qiapian" class="model"/>
                    </span>
                </Tooltip>
            </div>
        </section>
        <Table :data="dataList" size="medium" stripe class="table-header-gray" border>
            <TableColumn type="index" label="序号" width="100"/>
            <TableColumn prop="account" label="UID"/>
            <TableColumn prop="name" label="用户名"/>
            <TableColumn prop="roles" label="拥有角色"/>
            <TableColumn prop="status" label="当前状态">
                <template>
                    <BasicStatus type="success" text="正常"/>
                </template>
            </TableColumn>
            <TableColumn label="操作">
                <template slot-scope="scope">
                    <BasicButton @stroke="checkUserDetail(scope.row)" type="primary" plain text="详情"/>
                    <BasicButton @stroke="editUser(scope.row)" type="primary" plain text="编辑"/>
                    <BasicButton @stroke="resetPassword(scope.row)" type="primary" plain text="重置密码"/>
                    <BasicButton @stroke="resetPassword(scope.row)" type="warning" plain text="冻结"/>
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
        <UserModal
                :handelType="handelType"
                :visible="isShowUserModal"
                @close-modal="closeModal">
        </UserModal>
    </Card>
    <section class="card-box" v-else>
        <section style="text-align: right; padding: 20px 20px 0 0">
            <Tooltip class="item" effect="dark" content="切换成列表模式" placement="top-start">
               <span @click="switchModel('list')">
                  <SelfIcon icon="#icon-liebiao" class="model"/>
               </span>
            </Tooltip>
        </section>
        <section class="card-inner-box" ref="cardBox" @click="checkUserDetail">
            <div class="user-card" :ref="index === 0 ? 'cardItem' : ''" v-for="(item, index) in dataList" :key="item.account">
                <img :src="item.avatar" alt="">
                <div class="info">
                    <span class="name">Miku初音</span>
                    <span class="address">四川省成都市</span>
                    <span class="address-detail">双流区华府大道</span>
                    <span class="phone">手机：17725025774</span>
                    <span class="email">邮箱：1515@163.com</span>
                </div>
            </div>
            <Card class="user-card hidden-box" v-for="index of fillCardNum" :key="index"></Card>
        </section>
    </section>
</template>

<script>
    import UserModal from '../components/UserModal'
    import {Tooltip} from 'element-ui'

    const dataArr = [
        {account: '213', name: '张潇潇', roles: '管理员', status: '征信', userId: '1', avatar: '/img/001.png'},
        {account: '21321312', name: '张潇潇', roles: '管理员', status: '征信', userId: '2', avatar: '/img/002.png'},
        {account: '213214512', name: '张潇潇', roles: '管理员', status: '征信', userId: '3', avatar: '/img/003.png'},
        {account: '2132', name: '张潇潇', roles: '管理员', status: '征信', userId: '4', avatar: '/img/004.png'},
        {account: '211312', name: '张潇潇', roles: '管理员', status: '征信', userId: '5', avatar: '/img/002.png'},
        {account: '2424244444', name: '张潇潇', roles: '管理员', status: '征信', userId: '6', avatar: '/img/001.png'},
        {account: '2132132', name: '张潇潇', roles: '管理员', status: '征信', userId: '7', avatar: '/img/004.png'},
        {account: '213217712', name: '张潇潇', roles: '管理员', status: '征信', userId: '8', avatar: '/img/001.png'},
        {account: '212138812', name: '张潇潇', roles: '管理员', status: '征信', userId: '9', avatar: '/img/002.png'},
        {account: '88', name: '张潇潇', roles: '管理员', status: '征信', userId: '10', avatar: '/img/003.png'},
        {account: '21321555312', name: '张潇潇', roles: '管理员', status: '征信', userId: '11', avatar: '/img/002.png'},
        {account: '88899999', name: '张潇潇', roles: '管理员', status: '征信', userId: '12', avatar: '/img/001.png'},
        {account: '6666', name: '张潇潇', roles: '管理员', status: '征信', userId: '13', avatar: '/img/004.png'},
        {account: '422', name: '张潇潇', roles: '管理员', status: '征信', userId: '14', avatar: '/img/002.png'},
        {account: '235', name: '张潇潇', roles: '管理员', status: '征信', userId: '15', avatar: '/img/001.png'}
    ]
    const cardWidth = 392
    export default {
        name: 'UserManage',
        components: {UserModal, Tooltip},
        data() {
            return {
                isShowUserModal: false,
                showModel: 'list',
                handelType: 'add',
                cardBoxWidth: 0,
                // cardWidth: 0,
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
        computed: {
            // card模式使用的flex自适应布局 末尾一行数量不够 元素不能正常排列 需要手动添加隐藏的box
            // 返回需要填充的card数量
            fillCardNum() {
                const {dataList, showModel, cardBoxWidth} = this
                const cardNum = dataList.length
                if (showModel === 'list' || !cardNum || !cardBoxWidth) return 0
                // debugger
                const levelNum = Math.floor(cardBoxWidth / cardWidth)
                // debugger
                const residueNum = cardNum % levelNum
                // debugger
                if (residueNum === 0) return 0
                return levelNum - residueNum
            }
        },
        watch: {
            showModel(newVal) {
                if (newVal === 'card') {
                    this.getCardSize()
                }
            }
        },
        mounted() {
            this.getDataList()
            //卡片模式下需要获取cardBox 的宽度
           if (this.showModel === 'card') {
               this.getCardSize()
           }
            window.onresize = this.throttle(() => {
                console.log('44444')
                this.getCardSize()
            }, 300)
            // console.log(this.$refs.cardBox.clientWidth)
        },
        beforeDestroy() {
            window.onresize = null
        },
        methods: {
            // 获取CardBox 的宽度
            getCardSize() {
               if (this.showModel === 'card') {
                   this.$nextTick(() => {
                       this.cardBoxWidth = this.$refs.cardBox.clientWidth
                   })
               }
            },
            // 获取用户列表
            getDataList() {
                this.dataList = dataArr
            },
            // 新增用户
            addUser() {
                this.isShowUserModal = true
            },
            // 切换显示模式
            switchModel(type) {
                this.showModel = type
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
            // 查看用户详情
            checkUserDetail(v) {
                console.log(v)
                this.$router.push({name: 'userDetail'})
            },
            // 关闭弹窗
            closeModal(v) {
                this.isShowUserModal = false
                if (v) {
                    this.getDataList()
                }
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
            throttle(fn, wait) {
                let timer = null
                return function () {
                    if (!timer) {
                        // 函数fn放在定时器外且定时器初始化放在throttle函数外 是只执行第一次；
                        // 函数fn放在定时器内且定时器初始化放在throttle函数内 是只执行最后一次
                        timer = setTimeout(() => {
                            fn.apply(this, Array.prototype.slice.call(arguments, 0));
                            timer = null;
                        }, wait);
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .card-box {
        .card-inner-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            /*display: inline-block;*/
            /*margin: auto;*/
            /*width: auto;*/

            .user-card {
                width: 360px;
                height: 150px;
                margin: 15px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                background: #fff;
                border-radius: 4px;
                border: 1px solid #EBEEF5;
                overflow: hidden;
                box-sizing: border-box;
                color: #303133;
                /*transition: 3s;*/
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                /*float: left;*/
                &.hidden-box {
                    visibility: hidden;
                }
                &:hover {
                    box-shadow: 2px 2px 4px #b1adad;
                }
                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
                .info {
                    height: 120px;
                    width: 180px;
                    color: rgb(103, 106, 108);
                    span {
                        display: block;
                        font-size: 13px;
                        &.name {
                            font-weight: bold;
                        }
                        &.address {
                            margin: 5px 0 10px;
                        }
                    }
                }
            }
        }
    }

    .content-top {
        padding-bottom: 15px;
        display: flex;
        justify-content: space-between;


    }

    .model {
        font-size: 30px;
        margin-left: 15px;
    }
</style>