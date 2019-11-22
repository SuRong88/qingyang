<template>
	<div class="pay-box wrapper">
		<div class="pay-head clearfix">
			<div class="p-icon fl"><img src="@/assets/images/success-icon.png" /></div>
			<p class="p-tit fl">订单支付！</p>
			<p class="p-text fl">
				请在
				<span>29:34</span>
				分钟内完成订单支付
			</p>
			<p class="p-price fr">
				支付总额
				<span class="p-unit">￥</span>
				<span class="p-money">2300</span>
			</p>
		</div>
		<div class="pay-info">
			<div class="p-item">
				<p class="p-label">订单号：</p>
				<p class="p-text">00519102310190209851</p>
			</div>
			<div class="p-item">
				<p class="p-label">产品名称：</p>
				<p class="p-text">长隆横琴湾酒店(珠海海洋王国店)</p>
			</div>
			<div class="p-item">
				<p class="p-label">产品编号：</p>
				<p class="p-text">1234</p>
			</div>
			<div class="p-item">
				<p class="p-label">提交时间：</p>
				<p class="p-text">2019年10月21日 13:31:23</p>
			</div>
			<div class="p-item">
				<p class="p-label">预订方式：</p>
				<p class="p-text">全款预订</p>
			</div>
			<div class="p-item">
				<p class="p-label">应付金额：</p>
				<p class="p-text">￥2300</p>
			</div>
		</div>
		<div class="pay-foot">
			<p class="p-stit">支付方式</p>
			<ul class="pay-payway clearfix">
				<li class="on">
					<a href="javascript:;" class="p-icon"><img src="@/assets/images/weixin.jpg" /></a>
				</li>
			</ul>
			<div class="pay-btnBox"><a href="javascript:;" class="p-btn">立即支付</a></div>
		</div>

		<!-- 弹窗 -->
		<v-mask :layerData="layerData" @layer-close="closeHandle">
			<div class="payDia-con">
				<div class="p-icon"><img src="@/assets/images/state.png" /></div>
				<p class="p-text">
					付款完成前，请不要关闭此窗口
					<br />
					完成付款后，点击下面的“已完成支付”按钮
				</p>
				<div class="p-btnBox">
					<a href="javascript:;" class="p-btn">已完成支付</a>
					<a href="javascript:;" class="p-btn">查看订单详情</a>
				</div>
			</div>
		</v-mask>
	</div>
</template>

<script>
import vMask from 'components/mask/mask2.vue';
export default {
	components: {
		vMask
	},
	created() {},
	mounted() {},
	data() {
		return {
			// 弹窗
			layerData: {
				isLayer: true, // 弹窗是否渲染
				isHeader: true, // 头部是否渲染
				isBtn: false, // 按钮是否渲染
				tit: '支付状态', // 标题内容
				yes: '确定', // 确定按钮文本
				no: '取消', // 取消按钮文本
				isNo: true, // 是否需要取消按钮
				isClose: true // 是否需要关闭按钮
			}
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 关闭弹窗
		closeHandle() {
			this.layerData.isLayer = false;
		}
	}
};
</script>

<style></style>
