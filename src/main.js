import Vue from 'vue'
import VueRouter from 'vue-router'
import {
	Icon
} from 'element-ui';
import App from './App.vue'


Vue.use(VueRouter);
Vue.use(Icon);

const routes = [{
	path: '/foo',
	component: function (resolve) {
		require(['./components/Foo.vue'], resolve);
	}
}, {
	path: '/bar',
	component: function (resolve) {
		require(['./components/Bar.vue'], resolve);
	}
}];

const router = new VueRouter({
	routes
})

new Vue({
	el: "#app",
	router: router,
	render: h => h(App)
})