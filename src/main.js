import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


Vue.use(VueRouter);

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