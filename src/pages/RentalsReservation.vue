<template>
	<div class="rentals-reservation reservation wrapper">
		<div class="l">
			<div class="box box1 border8">
				<h2 class="sub-title">预订信息</h2>
				<ul class="info-wrapper">
					<li class="flex flex-ver">
						<span class="label">产品编号:</span>
						<p class="info-con">1313</p>
					</li>
					<li class="flex flex-ver">
						<span class="label">产品名称:</span>
						<p class="info-con">紧凑型SUV | 丰田 RAV4</p>
					</li>
					<li class="flex flex-ver">
						<span class="label">产品类型:</span>
						<p class="info-con">紧凑型SUV | 丰田 RAV4</p>
					</li>
					<li class="">
						<ol class="form-hd flex">
							<li class="flex-1">
								使用日期
							</li>
							<li class="flex-1">还车日期</li>
							<li class="flex-1">购买数量</li>
							<li class="flex-1">总价格</li>
						</ol>
						<ol class="form-bd flex">
							<li class="flex flex-1 flex-center flex-ver">
								<span class="mini-box date2">
									2019-10-21
									<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
								</span>
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="mini-box date2">
									2019-10-21
									<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
								</span>
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="mini-box">
									<img class="icon icon1" src="../assets/images/value_icon01.png" alt="" />
									<input class="buy-num flex-1" type="text" />
									<img class="icon icon2" src="../assets/images/value_icon02.png" alt="" />
								</span>
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="price">300</span>
							</li>
						</ol>
					</li>
				</ul>
			</div>
			<div class="box box2 border8">
				<h2 class="sub-title">联系人信息</h2>
				<ul class="info-wrapper">
					<li class="flex flex-ver">
						<span class="label must">姓名:</span>
						<input class="input01" type="text" />
					</li>
					<li class="flex">
						<span class="label must mt6">手机:</span>
						<p class="warning-input">
							<input class="input01 " type="text" />
							<span class="warning-txt">
								手机号码输入有误
							</span>
						</p>
					</li>
					<li class="flex flex-ver">
						<span class="label">邮箱:</span>
						<input class="input01" type="text" />
					</li>
					<li class="flex">
						<span class="label mt10">预订备注:</span>
						<textarea class="input01 input02" type="text"></textarea>
					</li>
				</ul>
			</div>
			<button class="btn-commit">提交订单(￥2300)</button>
		</div>
		<div class="r border8">
			<h2 class="r-title">结算信息</h2>
			<img class="order-img" src="../assets/images/car_img03.jpg" alt="">
			<ul class="detail-ul">
				<li>
					<span class="label">预订方式</span>
					<span>全款</span>
				</li>
				<li>
					<span class="label">预定日期</span>
					<span>2019-10-21</span>
				</li>
				<li>
					<span class="label">试用日期</span>
					<span>2019-10-21</span>
				</li>
				<li>
					<span class="label">景点名称</span>
					<span>珠海长隆酒店</span>
				</li>
				<li>
					<span class="label">门票类型</span>
					<span>海洋王国-成人票(一天票)</span>
				</li>
			</ul>
			<p class="price-box">
				<span>应付总额</span>
				<span class="price">300</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
		};
	},
	computed: {},
	watch: {},
	methods: {}
};
</script>

<style></style>
