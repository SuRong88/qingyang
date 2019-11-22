<template>
	<div class="car-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">租车</span>
		</div>
		<ul class="hotel-list">
			<li>
				<div class="hotel-list-item clearfix">
					<div class="h-img">
						<img src="@/assets/images/banner01.png">
					</div>
					<div class="h-info">
						<p class="h-tit">紧凑型SUV | 丰田 RAV4</p>
						<div class="h-status">
							<img src="@/assets/images/Label01.png">
							<img src="@/assets/images/Label02.png">
						</div>
						<div class="h-textBox">
							<p class="h-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/icon-car.png') + ')' }">商务车</p>
							<p class="h-bg" :style="{ backgroundImage: 'url(' + require('@/assets/images/icon-user.png') + ')' }">5</p>
						</div>
						<p class="h-tip">本田CRV，后排空间局促，行李空间较小，建议乘坐3人+2行李箱</p>
					</div>
					<div class="h-right">
						<p class="h-price"><span class="h-unit">￥</span><span class="h-money">300</span>起</p>
						<div class="h-btnBox">
							<a href="javascript:;" class="h-btn">预订</a>
						</div>
					</div>
				</div>
			</li>
			<li>
				<div class="hotel-list-item clearfix">
					<div class="h-img">
						<img src="@/assets/images/banner01.png">
					</div>
					<div class="h-info">
						<p class="h-tit">紧凑型SUV | 丰田 RAV4</p>
						<div class="h-status">
							<img src="@/assets/images/Label01.png">
							<img src="@/assets/images/Label02.png">
						</div>
						<div class="h-textBox">
							<p class="h-bg" :style="'background-image: url('+iconPath[0]+')'">商务车</p>
							<p class="h-bg" :style="'background-image: url('+iconPath[1]+')'">5</p>
							<!-- <p class="h-bg" style="background-image: url(require('../assets/images/icon-user.png'));">5</p> -->
						</div>
						<p class="h-tip">本田CRV，后排空间局促，行李空间较小，建议乘坐3人+2行李箱</p>
					</div>
					<div class="h-right">
						<p class="h-price off">电询</p>
						<div class="h-btnBox">
							<a href="javascript:;" class="h-btn off">订完</a>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		components: {
			
		},
		created() {

		},
		mounted() {

		},
		data() {
			return {
				iconPath:[
					require('../assets/images/icon-car.png'),
					require('../assets/images/icon-user.png'),
				]
			};
		},
		computed: {},
		watch: {},
		methods: {
		}
	}
</script>

<style>
</style>
