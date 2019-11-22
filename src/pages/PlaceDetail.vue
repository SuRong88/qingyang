<template>
	<div class="placeDe-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<a class="breadcrumb-item is-link" href="/place">
				景点
			</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">珠海长隆海洋王国</span>
		</div>
		<div class="hotelDe-info-box clearfix">
			<div class="hotelDe-img-con fl">
				<div class="h-p-img">
					<img :src="imgList[imgList_on]">
				</div>
				<div class="hotelDe-swiper-box">
					<a href="javascript:;" class="s-btn s-prev" @click="imgPrev"></a>
					<div class="hotelDe-swiper">
						<swiper :options="imgSwiperOption" ref="imgSwiper">
			                <swiper-slide :class="{ on: imgList_on == index }" v-for="(item, index) in imgList">
			                    <a href="javascript:;" class="s-img" @click="imgClick(index)">
			                    	<img :src="item">
			                    </a>
			                </swiper-slide>
			            </swiper>
					</div>	
					<a href="javascript:;" class="s-btn s-next" @click="imgNext"></a>
				</div>
			</div>
			<div class="hotelDe-info-con fr">
				<p class="h-tit">珠海长隆海洋王国</p>
				<div class="h-status">
					<img src="@/assets/images/Label01.png">
					<img src="@/assets/images/Label02.png">
				</div>
				<p class="h-price"><span class="h-unit">￥</span><span class="h-money">1300</span>起</p>
				<p class="h-des">汇聚动感机动游戏，珍稀动物展馆，大型剧场表演，餐饮，购物等综合娱乐体验</p>
				<div class="h-textBox">
					<p>开放时间：10:00-20:30</p>
				</div>
				<p class="h-ads"><a href="javascript:;">广东珠海珠海市横琴新区富祥湾</a></p>
				<div class="clearfix">
					<div class="bdsharebuttonbox fl"><a href="javascript:;" class="bds_more" data-cmd="more">分享</a></div>
				</div>
			</div>
		</div>
		<div class="detail-common-menu-box" id="detail-common-menu-box">
			<ul class="detail-common-menu" :class="{ on: tabFix }" id="detail-common-menu">
				<li :class="{ on: tabArray_on == index }" v-for="(item, index) in tabArray" :key="index" @click="toScroll('box' + index, index)">
					<a href="javascript:;" class="d-item">{{ item }}</a>
				</li>
			</ul>
		</div>
		<div class="detail-common-box" id="box0">
			<p class="detail-common-tit">门票信息</p>
			<div class="place-tickit-item on">
				<div class="place-tickit-item-head clearfix">
					<div class="fl">
						<a href="javascript:;" class="p-stit">单票 --【日游】澳门环岛成人票</a>
						<p class="p-text">提前1天23:00前</p>
					</div>
					<a href="javascript:;" class="p-btn">立即预订</a>
					<p class="p-price"><span class="p-unit">￥</span><span class="p-money">1300</span>起</p>
				</div>
				<div class="place-tickit-item-con">
					<div>
						<p class="p-label">门票有效期</p>
						<p class="p-text">游客指定入园日期后1天内有效</p>
					</div>
					<div>
						<p class="p-label">取票方式</p>
						<p class="p-text">订单支付后您会收到一条有取票凭证码的短信，凭短信至景区门口的取票机上或售票处验证取票入园，如在出发前一天仍未收到短信，请速致电客服</p>
					</div>
					<div>
						<p class="p-label">退改方式</p>
						<p class="p-text">不可退改</p>
					</div>
					<div>
						<p class="p-label">门票说明</p>
						<p class="p-text">1，【费用包含】全票1张<br />2，【费用不含】不含发票和门票以外的消费</p>
					</div>
				</div>
			</div>
			<div class="place-tickit-item">
				<div class="place-tickit-item-head clearfix">
					<div class="fl">
						<a href="javascript:;" class="p-stit">单票 --【日游】澳门环岛成人票</a>
						<p class="p-text">提前1天23:00前</p>
					</div>
					<a href="javascript:;" class="p-btn off">订完</a>
					<p class="p-price off">电询</p>
				</div>
				<div class="place-tickit-item-con">
					<div>
						<p class="p-label">门票有效期</p>
						<p class="p-text">游客指定入园日期后1天内有效</p>
					</div>
					<div>
						<p class="p-label">取票方式</p>
						<p class="p-text">订单支付后您会收到一条有取票凭证码的短信，凭短信至景区门口的取票机上或售票处验证取票入园，如在出发前一天仍未收到短信，请速致电客服</p>
					</div>
					<div>
						<p class="p-label">退改方式</p>
						<p class="p-text">不可退改</p>
					</div>
					<div>
						<p class="p-label">门票说明</p>
						<p class="p-text">1，【费用包含】全票1张<br />2，【费用不含】不含发票和门票以外的消费</p>
					</div>
				</div>
			</div>
		</div>
		<div class="detail-common-box" id="box1">
			<p class="detail-common-tit">预订须知</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box2">
			<p class="detail-common-tit">景点介绍</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p><p>富文本内容</p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		components: {
			
		},
		beforeCreate (){
	        window._bd_share_main = "";
	    },
		created() {

		},
		mounted() {
			// 分享
			window._bd_share_config={"common":{"bdSnsKey":{},"bdText":'',"bdMini":"2","bdMiniList":["mshare","qzone","tsina","bdysc","weixin","tqq","tieba","douban","sqq","fx","copy","print"],"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};
	        var script = document.createElement ("script")
	        script.type = "text/javascript";
	        script.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5);
	        document.getElementsByTagName("head")[0].appendChild(script);

	        // 监听滚动条
	        window.addEventListener('scroll', this.handleScroll);
		},
		destroyed (){
	        window.removeEventListener('scroll', this.handleScroll);
	    },
		data() {
			return {

				imgList: [require("@/assets/images/banner01.png"), require("@/assets/images/top-bar.png")],	// 轮播图列表
				imgList_on: 0,	// 当前高亮的轮播图

				tabFix: false,	// tab栏是否悬浮
				// tab栏
				tabArray: ['门票信息', '预订须知', '景点介绍'],
				tabArray_on: 0,		// 当前高亮的tab

				// banner轮播图配置
	            imgSwiperOption: {
	                slidesPerView: "auto",
	                spaceBetween: 6
	            },
			};
		},
		computed: {
			imgSwiper() {
	            return this.$refs.imgSwiper.swiper
	        },
		},
		watch: {},
		methods: {

			// 点击轮播图
			imgClick (index){
				this.imgList_on = index;
			},

			// 上一张轮播图
			imgPrev (){
				this.imgSwiper.slidePrev();
			},

			// 下一张轮播图
			imgNext (){
				this.imgSwiper.slideNext();
			},

			// 锚点
	        toScroll (id, index){
	            let top = this.$el.querySelector('#' + id).offsetTop;
	            let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
	            this.wSetScroll(top - height);
	            setTimeout(() => {
	            	this.tabArray_on = index;
	            }, 100);
	        	
	        },

	        // 监听滚动条滚动
	        handleScroll (){
	        	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
	        	// 判断tab栏是否悬浮
	            let top = this.$el.querySelector('#detail-common-menu-box').offsetTop;
	            if(scrollTop >= top){
	            	this.tabFix = true;
	            }else{
	            	this.tabFix = false;
	            }

	        	// 改变tab栏高亮
	            let item = this.$el.querySelectorAll('.detail-common-box');
	            let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
	            for(let i=item.length-1; i>=0; i--){
	                if(item[i].offsetTop <= scrollTop + height){
	                    this.tabArray_on = i;
	                    break;
	                }
	            }
	        },
		}
	}
</script>

<style>
</style>
