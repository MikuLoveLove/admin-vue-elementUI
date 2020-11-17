<template>
    <Dialog
            :title="handelType === 'add' ? '新增角色' : '编辑角色'"
            :visible="visible"
            :before-close="handleClose"
            width="550px"
    >
        <Form :rules="rules" :model="formData" label-position="right" label-width="100px" size="small" ref="addRole" style="margin: 0 50px 0 30px" >
            <FormItem label="角色名：" prop="username">
                <Input v-model="formData.username" placeholder="请输入角色名"/>
            </FormItem>
            <FormItem label="备注：" prop="info">
                <Input type="textarea" v-model="formData.info" placeholder="请输入备注"/>
            </FormItem>
        </Form>
        <span slot="footer" class="dialog-footer">
            <Button @click="handleClose" size="small">取 消</Button>
            <Button type="primary" @click="addRole" size="small" :loading="isLoading">确 定</Button>
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
                step: 1,
                isLoading: false,
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
                this.$refs.addRole.resetFields()
            },
            handleClose() {
                this.closeModal(false)
            },
            addRole () {
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