import Vue from 'vue'
import App from './src/app.vue'
import './src/assets/style/global.scss'
import store from './src/vuex/store.js'

new Vue({
    store,
    render: (h) => h(App)
}).$mount('#app') //app手动挂载