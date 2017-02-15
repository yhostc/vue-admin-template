import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'


Vue.use(VueRouter);
Vue.use(ElementUI);


const routes = [{
	name: '首页',
	path: '/',
	component: Home,
	children: [{
		name: 'Foo',
		path: '/foo',
		component: Foo
	}, {
		name: 'Bar',
		path: '/bar',
		component: Bar
	}]
}, {
	name: '登录',
	path: '/login',
	component: Login
}, {
	name: '用户管理',
	path: '/user',
	component: function (resolve) {
		require(['./components/User.vue'], resolve);
	}
}, {
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
});

new Vue({
	el: "#app",
	router: router,
	render: h => h(App)
})