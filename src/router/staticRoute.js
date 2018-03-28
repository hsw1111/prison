import Login from '../view/login/index.vue'
import Index from '../view/index/index.vue'
import Home from '../view/home/index.vue'
import List from '../view/list/index.vue'
// const Index = resolve => require.ensure([], () => resolve(require('../view/index/index.vue')), 'index')
// //import bikeAllData from '../view/bikeData/bikeAllData/index.vue'
// const BikeAllData = resolve => require.ensure([], () => resolve(require('../view/bikeData/bikeAllData/index.vue')), 'bikeAllData')

let staticRoutes = [
    {
        path:'/login',
        component:Login,
        name:'登录'
    },
    {
        path: '/index',
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

export default staticRoutes;
