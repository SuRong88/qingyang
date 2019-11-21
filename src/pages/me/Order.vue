<template>
	<div class="me-order">
		<div class="order-box">
			<ul class="menu">
				<li class="menu-item" :class="{ 'is-active': orderState == 'all' }">全部订单</li>
				<li class="menu-item" :class="{ 'is-active': orderState == '' }">待付款</li>
				<li class="menu-item" :class="{ 'is-active': orderState == '' }">已完成</li>
				<li class="menu-item" :class="{ 'is-active': orderState == '' }">已关闭</li>
			</ul>
			<ul class="labels">
				<li class="label flex3c pl20">订单信息</li>
				<li class="label flex1 text-c">订单金额</li>
				<li class="label flex1 text-c">订单状态</li>
				<li class="label flex1 text-c">操作</li>
			</ul>
			<ul class="order">
				<li v-for="i in 4" class="order-item">
					<div class="info-box flex3">
						<img class="img" src="../../assets/images/banner01.png" alt="" />
						<div class="order-info">
							<p class="order-title">酒店 | 长隆横琴湾酒店(珠海海洋王国店)</p>
							<ul>
								<li class="order-num mb8">
									订单编号
									<span class="ml6">00119102318243223798</span>
								</li>
								<li class="order-date">
									下单时间
									<span class="ml6">2019-10-23 18:24:32</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="price flex1">￥299.00</div>
					<div class="state flex1">待支付</div>
					<div class="operate flex1">
						<span class="btn-pay">立即支付</span>
						<span class="btn-cancel">取消订单</span>
						<router-link
							class="btn-view"
							tag="span"
							:to="{
								path: '/me/detail',
								params: {}
							}"
						>
							查看订单
						</router-link>
					</div>
				</li>
			</ul>
			<div class="flex flex-center">
				<el-pagination
					@current-change="handleCurrentChange"
					class="pagination"
					background
					layout="prev, pager, next"
					:page-size="limit"
					:current-page="current_page"
					:total="total_page"
					prev-text='上一页'
					next-text='下一页'
				></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$emit('curentIndexChange', 'meOrder');
	},
	mounted() {},
	data() {
		return {
			limit: 1,
			current_page: 1,
			total_page: 99,
			orderState: 'all'
		};
	},
	computed: {},
	watch: {
		'$route.query': function(newVal, oldVal) {
			console.log('oldVal' + oldVal.page);
			console.log('newVal' + newVal.page);
		}
	},
	methods: {
		handleCurrentChange(page) {
			let query = JSON.parse(JSON.stringify(this.$route.query));
			query.page = page;
			this.$router.push({
				query: query
			});
		},
		orderStateChange(type) {
			this.orderState = type;
		}
	}
};
</script>

<style></style>
