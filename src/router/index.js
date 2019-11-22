import Vue from "vue";
import VueRouter from "vue-router";
import Home from "pages/Home.vue";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		redirect: '/Index'
	},
	{
		name: 'Index',
		path: '/index',
		meta: {
			title: '首页'
		},
		component: resolve => require(['pages/Index.vue'], resolve)
	}, {
		path: "/",
		name: "Home",
		component: resolve => require(['@/pages/Home.vue'], resolve),
		children: [{
				name: 'Login',
				path: 'login',
				meta: {
					title: '登录'
				},
				component: resolve => require(['pages/Login.vue'], resolve)
			}, {
				name: 'Register',
				path: 'register',
				meta: {
					title: '注册'
				},
				component: resolve => require(['pages/Register.vue'], resolve)
			}, {
				name: 'Setting',
				path: 'setting',
				meta: {
					title: '设置密码'
				},
				component: resolve => require(['pages/Setting.vue'], resolve)
			},
			{
				name: 'Forget',
				path: 'forget',
				meta: {
					title: '忘记密码'
				},
				component: resolve => require(['pages/Forget.vue'], resolve)
			},
			{
				name: 'Edit',
				path: 'edit',
				meta: {
					title: '修改密码'
				},
				component: resolve => require(['pages/Edit.vue'], resolve)
			},
			{
				name: 'Detail',
				path: 'detail',
				meta: {
					title: '文章详情通用'
				},
				component: resolve => require(['pages/Detail.vue'], resolve)
			},

			{
				name: 'HotelsReservation',
				path: 'hotelsReservation',
				meta: {
					title: '酒店预订信息填写'
				},
				component: resolve => require(['pages/HotelsReservation.vue'], resolve)
			},

			{
				name: 'SpotsReservation',
				path: 'spotsReservation',
				meta: {
					title: '景点预订信息填写'
				},
				component: resolve => require(['pages/SpotsReservation.vue'], resolve)
			},
			{
				name: 'RentalsReservation',
				path: 'rentalsReservation',
				meta: {
					title: '租车预订信息填写'
				},
				component: resolve => require(['pages/RentalsReservation.vue'], resolve)
			},
			{
				name: 'LinesReservation',
				path: 'linesReservation',
				meta: {
					title: '路线预订信息填写'
				},
				component: resolve => require(['pages/LinesReservation.vue'], resolve)
			},
			{
				name: 'Me',
				path: 'me',
				component: resolve => require(['pages/me/Me.vue'], resolve),
				children: [{
						name: 'MeIndex',
						path: 'index',
						meta: {
							title: '个人中心'
						},
						component: resolve => require(['pages/me/Index.vue'], resolve)
					},
					{
						name: 'MeInformation',
						path: 'information',
						meta: {
							title: '个人信息'
						},
						component: resolve => require(['pages/me/Information.vue'], resolve)
					},
					{
						name: 'MeOrder',
						path: 'order/:type',
						meta: {
							title: '我的订单'
						},
						component: resolve => require(['pages/me/Order.vue'], resolve)
					},
					{
						name: 'MeOrderDetail',
						path: 'detail',
						meta: {
							title: '订单详情'
						},
						component: resolve => require(['pages/me/Detail.vue'], resolve)
					}
				]
			},
			// 2019.11.22合并杨东泉部分
			{
				name: 'Hotel',
				path: 'hotel',
				meta: {
					title: '酒店'
				},
				component: resolve => require(['pages/Hotel.vue'], resolve)
			},
			{
				name: 'HotelDetail',
				path: 'hotelDetail/:id',
				meta: {
					title: '酒店详情'
				},
				component: resolve => require(['pages/HotelDetail.vue'], resolve)
			},
			{
				name: 'Place',
				path: 'place',
				meta: {
					title: '景点'
				},
				component: resolve => require(['pages/Place.vue'], resolve)
			},
			{
				name: 'PlaceDetail',
				path: 'placeDetail/:id',
				meta: {
					title: '景点详情'
				},
				component: resolve => require(['pages/PlaceDetail.vue'], resolve)
			},
			{
				name: 'Route',
				path: 'route',
				meta: {
					title: '线路'
				},
				component: resolve => require(['pages/Route.vue'], resolve)
			},
			{
				name: 'RouteDetail',
				path: 'routeDetail/:id',
				meta: {
					title: '线路详情'
				},
				component: resolve => require(['pages/RouteDetail.vue'], resolve)
			},
			{
				name: 'Car',
				path: 'car',
				meta: {
					title: '租车'
				},
				component: resolve => require(['pages/Car.vue'], resolve)
			},
			{
				name: 'CarDetail',
				path: 'carDetail/:id',
				meta: {
					title: '租车详情'
				},
				component: resolve => require(['pages/CarDetail.vue'], resolve)
			},
			{
				name: 'Pay',
				path: 'pay/:id',
				meta: {
					title: '支付'
				},
				component: resolve => require(['pages/Pay.vue'], resolve)
			},
			{
				name: 'PaySuccess',
				path: 'paySuccess',
				meta: {
					title: '支付成功'
				},
				component: resolve => require(['pages/PaySuccess.vue'], resolve)
			},
			{
				name: 'PayError',
				path: 'PayError',
				meta: {
					title: '支付失败'
				},
				component: resolve => require(['pages/PayError.vue'], resolve)
			},
			{
				name: 'Guideline',
				path: 'guideline',
				meta: {
					title: '旅游攻略'
				},
				component: resolve => require(['pages/Guideline.vue'], resolve)
			},
			{
				name: 'GuidelineDetail',
				path: 'guidelineDetail/:id',
				meta: {
					title: '旅游攻略详情'
				},
				component: resolve => require(['pages/GuidelineDetail.vue'], resolve)
			},
			// 2019.11.22合并结束
		]
	},
	{
		name: 'error',
		path: '/404',
		meta: {
			title: '404'
		},
		component: resolve => require(['pages/404.vue'], resolve)
	},
	{
		path: '*',
		redirect: '/404'
	}
];
const router = new VueRouter({
	mode: 'history',
	routes
});
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title || '清扬会务'
	next()
});
router.afterEach((to, from) => {
	window.scrollTo(0, 0)
});
export default router;
