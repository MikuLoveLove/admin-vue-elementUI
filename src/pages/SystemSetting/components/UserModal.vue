<template>
    <Dialog
            :title="handelType === 'add' ? '新增用户' : '编辑用户'"
            :visible="visible"
            :before-close="handleClose"
            width="550px"
    >
        <Form
                :rules="rules"
                :model="formData"
                label-position="right"
                label-width="100px"
                size="medium"
                style="margin: 0 50px 0 30px"
                ref="addUser">
            <FormItem label="账号：" prop="account">
                <Input v-model="formData.account" placeholder="请输入账号"/>
            </FormItem>
            <FormItem label="用户名：" prop="username">
                <Input v-model="formData.username" placeholder="请输入用户名"/>
            </FormItem>
            <FormItem label="授权角色：" prop="roles">
                <Select v-model="formData.roles" placeholder="请选择角色" style="width: 100%" multiple>
                    <Option v-for="role in roleList" :value="role.roleId" :key="role.roleId" :label="role.roleName"/>
                </Select>
            </FormItem>
            <FormItem label="备注：" prop="info">
                <Input type="textarea" v-model="formData.info" placeholder="请输入备注"/>
            </FormItem>
        </Form>
        <span slot="footer" class="dialog-footer">
            <Button @click="handleClose" size="small">取 消</Button>
            <Button type="primary" @click="addUser" size="small">确 定</Button>
        </span>
    </Dialog>
</template>

<script>
    export default {
        name: 'UserModal',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            handelType: {
                type: String,
                default: 'add'
            }
        },
        data() {
            return {
                rules: {
                    account: [{required: true, message: '请输入账号', trigger: null}],
                    username: [{required: true, message: '请输入用户名'}],
                    roles: [{required: true, message: '请选择角色'}],
                    info: [{required: true, message: '请输入备注'}]
                },
                formData: {
                    account: null,
                    username: null,
                    roles: [],
                    info: null
                },
                roleList: [
                    {roleName: '管理员', roleId: 5},
                    {roleName: '销售', roleId: 4},
                    {roleName: '进货员', roleId: 3}
                ]
            }
        },
        mounted() {
        },
        methods: {
            closeModal (v) {
                this.$emit('close-modal', v)
                this.$refs.addUser.resetFields()
            },
            handleClose() {
                this.closeModal(false)
            },
            addUser () {
                this.closeModal(true)
            }
        }
    }
</script>

<style scoped>
    .button-box {
        display: flex;
        justify-content: space-around;
    }
</style>