import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [{
	name: 'Home',
	path: '/',
	component: resolve => require(['./page/JoinMy.vue'], resolve),
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
	name: '发拍',
	path: '/publish',
	component: resolve => require(['./page/Publish.vue'], resolve),
	children: [{
		name: '发拍引导',
		path: 'guid',
		component: resolve => require(['./page/PublishGuid.vue'], resolve)
	}, {
		name: '开始认证',
		path: 'sign',
		component: resolve => require(['./page/PublishSign.vue'], resolve)
	}, {
		name: '发拍协议',
		path: 'protocol',
		component: resolve => require(['./page/PublishProtocol.vue'], resolve)
	}, {
		name: '发布拍卖',
		path: 'create',
		// 发布创建，进行判断是否进入引导页面
		component: resolve => require(['./page/PublishCreate.vue'], resolve)
	}, {
		name: '价格规则',
		path: 'rule',
		component: resolve => require(['./page/PublishRule.vue'], resolve)
	}, {
		name: '发布成功',
		path: 'success',
		component: resolve => require(['./page/PublishSuccess.vue'], resolve)
	}, {
		name: '发拍历史',
		path: 'history',
		component: resolve => require(['./page/PublishHistory.vue'], resolve)
	}],
	meta: {
		requiresAuth: true
	},
}, {
	name: '参拍',
	path: '/join',
	component: resolve => require(['./page/Join.vue'], resolve),
	children: [{
		name: '我的参拍',
		path: 'my',
		component: resolve => require(['./page/JoinMy.vue'], resolve)
	}],
	meta: {
		requiresAuth: true
	}
}, {
	name: '拍卖详情',
	path: '/auction/detail',
	component: resolve => require(['./page/Detail.vue'], resolve),
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