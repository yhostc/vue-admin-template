import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import App from './App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Login from './components/Login.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'


Vue.use(VueRouter);
Vue.use(ElementUI);


const routes = [{
	name: 'Dashboard',
	path: '/',
	component: Home,
	icon: 'fa fa-dashboard'
}, {
	name: '用户管理',
	path: '/user',
	component: User,
	children: [{
		name: 'Login',
		path: '/user/login',
		component: Login
	}],
	icon: 'fa fa-table'
}, {
	name: '系统设置',
	path: '/setting',
	component: function (resolve) {
		require(['./components/Setting.vue'], resolve);
	},
	children: [{
		name: 'Foo',
		path: '/foo',
		component: Foo
	}, {
		name: 'Bar',
		path: '/bar',
		component: Bar
	}],
	icon: 'fa fa-cogs'
}];


const router = new VueRouter({
	routes
});

new Vue({
	el: "#app",
	template: '<App/>',
	router: router,
	components: {
		App
	}
	// render: h => h(App)
}).$mount('#app');