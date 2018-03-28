// const Login = resolve => require.ensure([], () => resolve(require('../view/login/index.vue')), 'Login')
// const Index = resolve => require.ensure([], () => resolve(require('../view/index/index.vue')), 'Index')

import Login from '../view/login/index.vue'
import Index from '../view/index/index.vue'
import Home from '../view/home/index.vue'
import List from '../view/list/index.vue'
let routes = [
    {
        path:'/login',
        component:Login,
        name:'登录'
    },
    {
        path: '/',
        component: Index,
        children:[
            {
                path:'/index/homepage',
                component: Home,
                name:'首页',
            },
            {
                path:'/index/list',
                component: List,
                name:'列表页',
            }
        ]
    }
]
export default routes;
