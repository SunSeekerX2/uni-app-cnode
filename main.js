import Vue from 'vue'
import App from './App'
import util from '@/common/ssx_util' 			// Util Functions

// Mounted Util Functions
Vue.prototype.$util = util

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
