<template>
	<div class="guideline-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">攻略</span>
		</div>
		<ul class="guideline-list">
			<li>
				<router-link :to="{ path: '/guidelineDetail/1' }" class="clearfix">
					<div class="g-img fl">
						<img src="@/assets/images/banner01.png">
					</div>
					<div class="g-info">
						<p class="g-tit">横琴湾酒店|尽享休闲~带你了解横琴湾酒店!~ </p>
						<p class="g-des">长隆横琴湾酒店88间客房各具海洋特色，独立观景阳台尽享开阔景观，或纵览中国南海汪洋无际的壮丽海景，或眺望长隆海洋王国与马戏城全貌。10间风味各异的餐厅及餐吧众星罗列，宾客可在此品尝到西方及泛亚洲各式美食。宽敞灵活的会议场地，专业齐备的会议设施与殷勤周到的服务，呈现出色超群的会议新体验。特色设施…</p>
						<p class="g-time">2019-10-16</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link :to="{ path: '/guidelineDetail/1' }" class="clearfix">
					<div class="g-img">
						<img src="@/assets/images/banner01.png">
					</div>
					<div class="g-info">
						<p class="g-tit">龙厉风行，长隆之秀 - 珠海长隆剧院</p>
						<p class="g-des">全新原创《龙秀》即将上映 颠覆你的视觉想象</p>
						<p class="g-time">2019-10-16</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link :to="{ path: '/guidelineDetail/1' }" class="clearfix">
					<div class="g-img">
						<img src="@/assets/images/banner01.png">
					</div>
					<div class="g-info">
						<p class="g-tit">横琴湾酒店|尽享休闲~带你了解横琴湾酒店!~ </p>
						<p class="g-des">长隆横琴湾酒店88间客房各具海洋特色，独立观景阳台尽享开阔景观，或纵览中国南海汪洋无际的壮丽海景，或眺望长隆海洋王国与马戏城全貌。10间风味各异的餐厅及餐吧众星罗列，宾客可在此品尝到西方及泛亚洲各式美食。宽敞灵活的会议场地，专业齐备的会议设施与殷勤周到的服务，呈现出色超群的会议新体验。特色设施…</p>
						<p class="g-time">2019-10-16</p>
					</div>
				</router-link>
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
