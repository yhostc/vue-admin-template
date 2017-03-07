import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import router from './router'
import store from './store'

import {
	Basic
} from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'



Vue.use(Vuex)
Vue.use(MintUI)


Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next) => {
	request.credentials = true;
	next();
});


new Vue({
	el: "#app",
	template: '<App/>',
	store,
	router,
	components: {
		App
	}
	// render: h => h(App)
}).$mount('#app');