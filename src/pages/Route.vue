<template>
	<div class="route-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">线路</span>
		</div>
		<ul class="hotel-list">
			<li v-if="lineList.length" v-for="line in lineList" :key = "line.id">
				<div class="hotel-list-item clearfix">
					<div class="h-img"><img :src="line.litpic" /></div>
					<div class="h-info">
						<p class="h-tit">{{line.title}}</p>
						<div class="h-status">
							<img v-for="icon in line.iconlist" :src="icon.litpic" />
						</div>
						<p class="h-tip">{{line.sellpoint}}</p>
						<p class="h-ads"><a href="javascript:;">{{line.startcity}}出发</a></p>
						<div class="h-textBox">
							<p>团期：{{line.startdate}}</p>
							<!-- {{line.linenight}}晚 -->
							<p>行程：{{line.lineday}}天</p>
						</div>
					</div>
					<div v-if="line.price>0" class="h-right">
						<p class="h-price">
							<span class="h-unit">￥</span>
							<span class="h-money">{{line.price}}</span>
							起
						</p>
						<div class="h-btnBox">
							<router-link :to="'/routeDetail/' + line.id" class="h-btn">查看详情</router-link>
						</div>
					</div>
					<div v-else class="h-right">
						<p class="h-price off">电询</p>
						<div class="h-btnBox"><a href="javascript:;" class="h-btn off">电询</a></div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	components: {},
	created() {
		this.getLineList($API.getLineList, {
			// 测试 最大值为9
			page_size: 9,
			page: 1
		});
	},
	mounted() {},
	data() {
		return {
			lineList:[]
		};
	},
	computed: {},
	watch: {},
	methods: {
		getLineList(url, content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				this.lineList = this.dataDecode(res.body).content.list;
				console.log(this.dataDecode(res.body));
			});
		}
	}
};
</script>

<style></style>
