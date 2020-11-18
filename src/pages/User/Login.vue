<template>
    <div class="login">
        <section class="login-box">
            <section class="left item"></section>
            <section class="right item">
                <section class="top">
                    <div class="title">用户登录</div>
                    <div class="message">用户登录</div>
                </section>
                <Form style="padding: 30px" size="medium">
                    <FormItem prop="account">
                        <Input placeholder="用户名" v-model="params.account">
                            <i slot="prefix" class="el-icon-user"></i>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input placeholder="密码" type="password" v-model="params.password">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" size="medium" style="width: 100%" :loading="isLoading">登录</Button>
                    </FormItem>
                </Form>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                isLoading: false,
                params: {
                    account: null,
                    password: null,
                }
            }
        },
    }
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to top right, #35044f, #dfeef3);
    .login-box {
        width: 900px;
        height:500px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 2px 2px 18px 15px #00000024;
        display: flex;
        .item {
            width: 450px;
            height: 500px;
            &.left {
                background:rgba(0,0,0,0.1) url("/img/left.png") ;
                background-size: 100% 100%;
            }
            &.right {
                background: #fff;
                .top {
                    height: 100px;
                    padding: 0 30px;
                    .title {
                        text-align: center;
                        font-size: 18px;
                        line-height: 60px;
                        color: #a54eff;
                    }
                    .message {}
                }
            }
        }
    }
}
</style>