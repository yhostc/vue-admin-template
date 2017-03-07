import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/Home.vue'
import User from './components/User.vue'
import Login from './components/Login.vue'
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


const routes = [{
	name: 'Dashboard',
	path: '/',
	component: Home,
	meta: {
		requiresAuth: true
	}
}, {
	name: '我',
	path: '/user',
	component: User
}, {
	name: '登录',
	path: '/login',
	component: Login
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

// 权限验证
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!sessionStorage.getItem('sid')) {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			next()
		}
	} else {
		next() // 确保一定要调用 next()
	}
})


export default router