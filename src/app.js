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

var vm = new Vue({
    el:"#app",
    router,
    render: h => h(app),

})


