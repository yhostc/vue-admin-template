import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [{
	name: 'Home',
	path: '/',
	component: resolve => require(['./page/AuctionList.vue'], resolve),
	meta: {
		requiresAuth: true
	}
}, {
	name: '我',
	path: '/user',
	component: resolve => require(['./page/User.vue'], resolve),
	meta: {
		requiresAuth: true
	}
}, {
	name: '登录',
	path: '/login',
	component: resolve => require(['./page/Login.vue'], resolve)
}, {
	name: '我的发拍',
	path: '/publish',
	component: resolve => require(['./page/Publish.vue'], resolve),
	meta: {
		requiresAuth: true
	}
}, {
	name: '拍卖',
	path: '/auction',
	component: resolve => require(['./page/Auction.vue'], resolve),
	children: [{
		name: '我的参拍',
		path: 'my',
		component: resolve => require(['./page/AuctionMy.vue'], resolve)
	}, {
		name: '发拍协议',
		path: 'protocol',
		component: resolve => require(['./page/AuctionProtocol.vue'], resolve)
	}, {
		name: '开始认证',
		path: 'sign',
		component: resolve => require(['./page/AuctionSign.vue'], resolve)
	}, {
		name: '发布拍卖',
		path: 'create',
		component: resolve => require(['./page/AuctionCreate.vue'], resolve)
	}, {
		name: '价格规则',
		path: 'rule',
		component: resolve => require(['./page/AuctionRule.vue'], resolve)
	}, {
		name: '发布成功',
		path: 'success',
		component: resolve => require(['./page/AuctionSuccess.vue'], resolve)
	}, {
		name: '我的拍卖',
		path: 'list',
		component: resolve => require(['./page/AuctionList.vue'], resolve)
	}, {
		name: '拍卖详情',
		path: 'detail',
		component: resolve => require(['./page/AuctionDetail.vue'], resolve)
	}],
	meta: {
		requiresAuth: true
	}
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