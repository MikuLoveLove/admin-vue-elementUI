import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import {Card, Button, Table, TableColumn, Input, Pagination, Dialog, Form, FormItem, Select, Option} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

import './assets/styles/element-variables.scss'
// import './assets/styles/element-ui.less'
import './assets/styles/index.less'
import './assets/iconfont'

import './components'

Vue.component('Card', Card)
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('TableColumn', TableColumn)
Vue.component('Input', Input)
Vue.component('Pagination', Pagination)
Vue.component('Dialog', Dialog)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Select', Select)
Vue.component('Option', Option)
// Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
