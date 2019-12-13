<template>
	<div class="hotel-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">酒店</span>
		</div>
		<ul class="hotel-list">
			<li v-for="(item, index) in hotelList" :key="index" v-if="hotelList.length > 0">
				<div class="hotel-list-item clearfix">
					<div class="h-img"><img :src="item.litpic" /></div>
					<div class="h-info">
						<p class="h-tit">{{ item.title }}</p>
						<div class="h-status"><img v-for="(label, labelIndex) in item.iconlist" :key="labelIndex" v-if="item.iconlist.length > 0" :src="label.litpic" /></div>
						<div class="h-type">
							<p v-for="(service, serviceIndex) in item.servicelist" :key="serviceIndex" v-if="item.servicelist.length > 0">{{ switchServiceType(service) }}</p>
						</div>
						<p class="h-address"><a href="javascript:;">{{item.address}}</a></p>
					</div>
					<!--价格不为0可以预定， 价格为0为电询 -->
					<div v-if="item.price > 0" class="h-right">
						<p class="h-price">
							<span class="h-unit">￥</span>
							<span class="h-money">{{ item.price }}</span>
							起
						</p>
						<div class="h-btnBox">
							<router-link :to="'/hotelDetail/' + item.id" class="h-btn">查看详情</router-link>
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
		this.getHotelList($API.getHotelList, {
			// 测试 最大值为9
			page_size: 9,
			page: 1
		});
	},
	mounted() {},
	data() {
		return {
			serviceTypes: {
				'2': '酒店各处提供wifi',
				'7': '西式餐厅',
				'8': '中式餐厅',
				'9': '残疾人设施',
				'10': '室外游泳池',
				'11': '室内游泳池',
				'12': '会议室',
				'13': '健身房',
				'14': '练歌房',
				'15': 'SPA'
			},
			hotelList: []
		};
	},
	computed: {},
	watch: {},
	methods: {
		getHotelList(url, content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				this.hotelList = this.dataDecode(res.body).content.data;
				// servicelist字符串处理为数组
				for (let i = 0; i < this.hotelList.length; i++) {
					this.hotelList[i].servicelist = this.hotelList[i].servicelist != null ? this.hotelList[i].servicelist.split(',') : [];
				}
				console.log(this.dataDecode(res.body));
				// console.log(this.dataDecode(res.body).content.list);
			});
		},
		switchServiceType(id) {
			console.log(typeof id);
			return this.serviceTypes[id];
		}
	}
};
</script>

<style></style>
