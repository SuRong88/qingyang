<template>
	<div class="me-index">
		<div class="header">
			<div class="avatar"><img src="" alt="" /></div>
			<ul class="info">
				<li class="name">4646464646</li>
				<li class="phone">4646464646</li>
				<li class="edit-btn">
					<!-- 待修改 -->
					<router-link tag="span" to="/me/information">更改信息</router-link>
				</li>
			</ul>
			<div class="logout-box"><span class="btn-logout">退出登录</span></div>
		</div>
		<div class="order-box">
			<div class="title">
				<img class="icon-order" src="" alt="" />
				最新订单
			</div>
			<ul class="labels">
				<li class="label flex3 pl20">订单信息</li>
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
						<span class="btn-view">查看订单</span>
						<router-link class="btn-view" tag="span" :to="{
							path:'/me/detail',
							params:{}
						}">
							查看订单
						</router-link>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$emit('curentIndexChange', 'meIndex');
	},
	mounted() {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {}
};
</script>

<style></style>
