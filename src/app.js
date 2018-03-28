import Vue from 'vue'
import app from './app.vue'
import axios from  './api/axios_api.js'
import iView from 'iview';
import vuescroll from 'vue-scroll'
import 'minireset.css'
import 'iview/dist/styles/iview.css';
import router from './router/index.js'
import './my-theme/index.less';

Vue.use(iView)
Vue.use(vuescroll)
Vue.prototype.axios = axios
axios.defaults.withCredentials=true;

router.beforeEach((to, from, next) => {
    var user = window.localStorage.getItem("user")
    var password = window.localStorage.getItem("password")
    if(user && password){
        console.log(1111)
        next()
    }else{
        if(to.path=='/login'){
            console.log(222)
            next()
        }else{
            console.log(333)
            next({path:'/login'})
        }
        
    }
})

var vm = new Vue({
    el:"#app",
    router,
    render: h => h(app),

})


