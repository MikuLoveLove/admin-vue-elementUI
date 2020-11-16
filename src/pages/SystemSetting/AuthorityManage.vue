<template>
    <Card>
        <Tree
                :data="data1"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <Button
                  type="text"
                  size="mini"
                  @click="() => append(data)">
            Append
          </Button>
          <Button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
            Delete
          </Button>
        </span>
      </span>
        </Tree>
    </Card>
</template>

<script>
    import {Tree} from 'element-ui'

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
        name: 'AuthorityManage.vue',
        components: {Tree},
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                data1: JSON.parse(JSON.stringify(data)),
                data2: JSON.parse(JSON.stringify(data))
            }
        },
        mounted() {
            // this.getDataList()
        },
        methods: {
            append(data) {
                const newChild = { id: 0, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },
        }
    }
</script>

<style scoped lang="less">
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
</style>