import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {
	Basic
} from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'


import Home from './components/Home.vue'
import User from './components/User.vue'
import Auction from './components/Auction.vue'
import AuctionMy from './components/AuctionMy.vue'
import Auction05 from './components/Auction05.vue'
import Auction10 from './components/Auction10.vue'
import AuctionCreate from './components/AuctionCreate.vue'
import AuctionRule from './components/AuctionRule.vue'
import AuctionSuccess from './components/AuctionSuccess.vue'
import AuctionList from './components/AuctionList.vue'
import AuctionDetail from './components/AuctionDetail.vue'



Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(VueResource)

const routes = [{
	name: 'Dashboard',
	path: '/',
	component: Home
}, {
	name: '我',
	path: '/user',
	component: User
}, {
	name: '拍卖',
	path: '/auction',
	component: Auction,
	children: [{
		name: '我的参拍',
		path: 'my',
		component: AuctionMy
	}, {
		name: '我的发拍',
		path: 'publish',
		component: Auction05
	}, {
		name: '开始认证',
		path: 'sign',
		component: Auction10
	}, {
		name: '发布拍卖',
		path: 'create',
		component: AuctionCreate
	}, {
		name: '价格规则',
		path: 'rule',
		component: AuctionRule
	}, {
		name: '发布成功',
		path: 'success',
		component: AuctionSuccess
	}, {
		name: '我的拍卖',
		path: 'list',
		component: AuctionList
	}, {
		name: '拍卖详情',
		path: 'detail',
		component: AuctionDetail
	}]
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