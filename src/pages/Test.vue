<template>
	<!-- 测试页面 -->
	<div class="detail wrapper">
		<h1 class="title">测试接口页面</h1>
		<pre ref='pre'></pre>
	</div>
</template>

<script>
export default {
	created() {
		this.getHotelList($API.getHotelList, {
			pagesize: 20,
			page: 1
		});
	},
	mounted() {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	methods: {
		getHotelList(url,content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				console.log(this.dataDecode(res.body));
				// console.log(this.dataDecode(res.body).content.list);
				// this.$refs.pre.innerHTML = JSON.stringify(this.dataDecode(res.body).content.list)
			});
		},

	}
};
</script>

<style></style>
