<template>
	<div class="me wrapper">
		<div class="breadcrumb">
			<router-link class="breadcrumb-item is-link" to="/me/index">
				<img class="icon" src="../../assets/images/home-icon.png" alt="" />
				首页
			</router-link>
			<i class="el-icon-arrow-right"></i>
			<span v-if="currentIndex == 'meIndex'" class="breadcrumb-item">个人中心</span>
			<span v-else-if="currentIndex == 'meInformation'" class="breadcrumb-item">个人信息</span>
			<span v-else-if="currentIndex == 'meOrder'" class="breadcrumb-item">我的订单</span>
			<template v-else="currentIndex == 'meDetail'">
				<router-link @click.native="orderType = 'all'" class="breadcrumb-item is-link" to="/me/order/all">我的订单</router-link>
				<i class="el-icon-arrow-right"></i>
				<span class="breadcrumb-item">订单详情</span>
			</template>
		</div>
		<div class="main-box">
			<div class="sidebar">
				<dl>
					<dt :class="{ 'is-active': side == 'index' }" @click="sideChange('index')">
						<span>
							<img class="icon" :src="side == 'index' ? icons[0][0] : icons[0][1]" alt="" />
							会员首页
						</span>
					</dt>
				</dl>
				<dl>
					<dt :class="{ 'is-active': side == 'order' }" @click="sideChange('order')">
						<span>
							<img class="icon" :src="side == 'order' ? icons[1][0] : icons[1][1]" alt="" />
							我的订单
						</span>
					</dt>
					<dd @click="orderTypeChange('all')" :class="{ 'is-active': orderType == 'all' && side == 'order' }">全部订单</dd>
					<dd @click="orderTypeChange('hotels')" :class="{ 'is-active': orderType == 'hotels' && side == 'order' }">酒店订单</dd>
					<dd @click="orderTypeChange('spots')" :class="{ 'is-active': orderType == 'spots' && side == 'order' }">景点订单</dd>
					<dd @click="orderTypeChange('rentals')" :class="{ 'is-active': orderType == 'rentals' && side == 'order' }">租车订单</dd>
					<dd @click="orderTypeChange('lines')" :class="{ 'is-active': orderType == 'lines' && side == 'order' }">线路订单</dd>
				</dl>
			</div>
			<div class="screen"><router-view @curentIndexChange="curentIndexChangeHandle"></router-view></div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		console.log(this.$route);
		this.side = this.$route.path.indexOf('/me/index') >= 0 ? 'index' : 'order';
		this.orderType = this.$route.params.type || 'all';
	},
	mounted() {},
	data() {
		return {
			// 菜单icon
			icons: [
				[require('../../assets/images/me_icon01.png'), require('../../assets/images/me_icon01_sel.png')],
				[require('../../assets/images/me_icon02.png'), require('../../assets/images/me_icon02_sel.png')]
			],
			// 当前所在位置
			currentIndex: 'meIndex',
			// 一级菜单成index order
			side: 'index',
			// 二级菜单 看上面
			orderType: 'all'
		};
	},
	computed: {},
	watch: {
		$route(to, from) {
			console.log(to.path, from.path);
		},
		'$route.params': (newVal, oldVal) => {
			// console.log(this.$route);undefined
			console.log('oldVal---' + oldVal.type);
			console.log('newVal---' + newVal.type);
		}
	},
	methods: {
		// 侧边栏切换
		sideChange(type) {
			this.side = type;
			var path;
			if (type == 'index') {
				path = '/me/index';
				this.currentIndex = 'meIndex';
			} else {
				path = '/me/order/all';
				this.currentIndex = 'meOrder';
			}
			this.orderType = 'all';
			this.$router.push({
				path: path
			});
		},
		// 订单类型切换
		orderTypeChange(type) {
			this.side = 'order';
			this.orderType = type;
			let params = JSON.parse(JSON.stringify(this.$route.params));
			params.type = type;
			this.$router.push({
				name: 'MeOrder',
				params: params
			});
			// console.log(this.$route.params);
		},
		// 子组件向父组件传递当前页面索引
		curentIndexChangeHandle(currentIndex = 'meIndex') {
			this.currentIndex = currentIndex;
			console.log(currentIndex);
		}
	}
};
</script>

<style></style>
