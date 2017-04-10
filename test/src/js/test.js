import Vue from 'vue'
import Test from '../components/Test.vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import User from '../components/User.vue'
import Child from '../components/Child.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: App },
        { path: '/foo', name: 'foo', component: Foo },
        { path: '/bar', name: 'bar', component: Bar }, {
            path: '/user/:id',
            component: User,
            //定义子路由
            children:[
                { path: '/child', component: Child}
            ]
        } //动态路由配置
        //提醒一下，当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    ]
})

new Vue({
    el: '#test',
    data: {},
    router,
    render(h) {
        return h(Test)
    }
}).$mount('#wrapper');
