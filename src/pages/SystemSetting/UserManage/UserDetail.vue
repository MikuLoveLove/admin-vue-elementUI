<template>
    <Card>
        <section class="profile-top">
            <img src="/img/001.png/"/>
        </section>
        <section class="profile-content">
            <Form
                    label-position="right"
                    size="medium"
                    style="width: 600px"
                    label-width="200px">
                <FormItem label="用户名：">
                    <Input value="陆嫁嫁" readonly/>
                </FormItem>
                <FormItem label="账号：">
                    <Input value="57457878" readonly/>
                </FormItem>
                <FormItem label="拥有角色：">
                    <Input value="管理员" readonly/>
                </FormItem>
                <FormItem label="性别：">
                    <Input value="女" readonly/>
                </FormItem>
                <FormItem label="年龄：">
                    <Input value="24" readonly/>
                </FormItem>
                <FormItem label="电话：">
                    <Input value="183562474596" readonly/>
                </FormItem>
                <FormItem label="邮箱：">
                    <Input value="51451@163.com" readonly/>
                </FormItem>
                <FormItem label="地址：">
                    <Input value="天府新区华府大道2段58号" readonly/>
                </FormItem>
                <FormItem label="当前状态：">
                    <BasicStatus type="success" text="正常"/>
                </FormItem>
                <FormItem label="创建时间：">2020/11/10 20:18</FormItem>
            </Form>
        </section>
    </Card>
</template>

<script>
    export default {
        name: 'UserDetail'
    }
</script>

<style scoped lang="less">
.profile-top {
    img {
        width: 80px;
        height: 80px;
        margin: 20px 0 20px 340px;
        border-radius: 50%;
    }
}
</style>