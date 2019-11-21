<template>
	<div class="me-detail">
		<div class="title-box mb20"><h2 class="title">订单详情</h2></div>
		<div class="state-box border mb20">
			<div class="l">
				<p class="state">待支付</p>
				<p class="tip flex flex-ver  mt12">
					<img class="clock-icon" src="../../assets/images/time.png" alt="" />
					请在
					<span class="downtime">29:34</span>
					分钟内完成订单支付，超时订单将自动关闭。
				</p>
			</div>
			<div class="r">
				<!-- 已关闭的时候添加类型'is-close' -->
				<p class="text-r">
					应付总额:
					<span class="price">899.00</span>
				</p>
				<p class="flex flex-ver  mt12">
					<span class="btn-cancel">取消订单</span>
					<span class="btn-pay">立即付款</span>
				</p>
			</div>
		</div>
		<div class="info-box info-box01 border mb20">
			<div class="info-title">
				订单信息
				<span class="info-title-desc">订单编号：GP6366132944968359936</span>
			</div>
			<!-- 1.酒店订单 -->
			<ul class="info-bd">
				<li class="info-bd-item flex flex-ver">
					<span class="label">预定酒店:</span>
					<span class="txt">长隆横琴湾酒店(珠海海洋王国店)</span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">下单时间:</span>
					<span class="txt"></span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">入离时间:</span>
					<span class="txt flex flex-ver">
						2019-10-21（周一）
						<span class="spe"></span>
						2019-10-22（周二） 共1晚
					</span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">付款方式:</span>
					<span class="txt"></span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">预订房型:</span>
					<span class="txt"></span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">预订数量:</span>
					<span class="txt"></span>
				</li>
				<li class="info-bd-item flex">
					<span class="label">价格信息:</span>
					<div class="price-info">
						<span class="date">2019/10/21(一)</span>
						<div class="bd">
							<span class="price">￥1300</span>
							<span class="desc">双早</span>
						</div>
					</div>
				</li>
			</ul>
			<!-- 2.景点订单/租车订单 -->
			<div class="sub-box">
				<div class="sub-main">
					<ul class="sub-hd flex flex-ver">
						<li class="flex3 ">产品名称</li>
						<li class="flex1 text-c">使用日期</li>
						<li class="flex1 text-c">还车日期</li>
						<li class="flex1 text-c">单价</li>
						<li class="flex1 text-c">数量</li>
						<li class="flex1 text-c">总价格</li>
					</ul>
					<ul class="sub-bd flex flex-ver">
						<li class="flex3 sub-bd-item">紧凑型SUV | 丰田 RAV4</li>
						<li class="flex1 text-c sub-bd-item">2019-10-24</li>
						<li class="flex1 text-c sub-bd-item">2019-10-24</li>
						<li class="flex1 text-c sub-bd-item">￥600</li>
						<li class="flex1 text-c sub-bd-item">1</li>
						<li class="flex1 text-c sub-bd-item"><span class="price">22</span></li>
					</ul>
				</div>
			</div>
			<!-- 3.线路订单 -->
			<div class="sub-box">
				<div class="sub-main">
					<ul class="sub-hd flex flex-ver">
						<li class="flex1 text-c">名称</li>
						<li class="flex1 text-c">会员零售价</li>
						<li class="flex1 text-c">数量</li>
						<li class="flex1 text-c">总价格</li>
					</ul>
					<ul class="sub-bd flex flex-ver">
						<li class="flex1 text-c sub-bd-item">成人</li>
						<li class="flex1 text-c sub-bd-item">2019-10-24</li>
						<li class="flex1 text-c sub-bd-item">1</li>
						<li class="flex1 text-c sub-bd-item"><span class="price">22</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="info-box info-box02 border mb20">
			<div class="info-title">联系人信息</div>
			<ul class="info-bd">
				<li class="info-bd-item flex flex-ver">
					<span class="label">联系人:</span>
					<span class="txt">某某人</span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">手机号码:</span>
					<span class="txt"></span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">电子邮箱:</span>
					<span class="txt">12</span>
				</li>
				<li class="info-bd-item flex flex-ver">
					<span class="label">预定备注:</span>
					<span class="txt">备注信息</span>
				</li>
			</ul>
		</div>
		<div class="info-box info-box03 border mb20">
			<div class="info-title">游客信息</div>
			<ul class="info-bd">
				<li class="info-bd-item">
					<p class="t flex flex-ver">
						<span class="icon">游客1</span>
						<span class="name">某某人</span>
					</p>
					<ol class="b flex">
						<li class="flex3 flex flex-ver">
							<span class="label">手机号码:</span>
							18377470139
						</li>
						<li class="flex2 flex flex-ver">
							<span class="label">性别:</span>
							男
						</li>
						<li class="flex2 flex flex-ver">
							<span class="label">证件类型:</span>
							身份证
						</li>
						<li class="flex3 flex flex-ver">
							<span class="label">证件号码:</span>
							110101199003073474
						</li>
					</ol>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$emit('curentIndexChange', 'meDetail');
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
