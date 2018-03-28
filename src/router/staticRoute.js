import Login from '../view/login/index.vue'
import Index from '../view/index/index.vue'
import Home from '../view/home/index.vue'
//系统配置
import MenuManage from '../view/systemConfig/menuManage/index.vue'
import RoleManage from '../view/systemConfig/roleManage/index.vue'
import Account from '../view/systemConfig/account/index.vue'
import SystemParam from '../view/systemConfig/systemParam/index.vue'
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
        path: '/',
        component: Index,
        children:[
            {
                path:'/index/homepage',
                component: Home,
                name:'首页',
            },
            {
                path:'/index/menuManage',
                component: MenuManage,
                name:'菜单管理',
            },
            {
                path:'/index/roleManage',
                component: RoleManage,
                name:'角色管理',
            },
            {
                path:'/index/account',
                component: Account,
                name:'登录账号',
            },
            {
                path:'/index/systemParam',
                component: SystemParam,
                name:'系统参数',
            }
        ]
    }
]

export default staticRoutes;
