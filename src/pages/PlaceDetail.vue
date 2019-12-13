<template>
	<div class="placeDe-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<a class="breadcrumb-item is-link" href="/place">景点</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">{{ spotDetail.title }}</span>
		</div>
		<div class="hotelDe-info-box clearfix">
			<div class="hotelDe-img-con fl">
				<div class="h-p-img"><img :src="spotDetail.pic_list[imgList_on]" /></div>
				<div class="hotelDe-swiper-box">
					<a href="javascript:;" class="s-btn s-prev" @click="imgPrev"></a>
					<div class="hotelDe-swiper">
						<swiper :options="imgSwiperOption" ref="imgSwiper">
							<swiper-slide :class="{ on: imgList_on == index }" v-for="(item, index) in spotDetail.pic_list">
								<a href="javascript:;" class="s-img" @click="imgClick(index)"><img :src="item" /></a>
							</swiper-slide>
						</swiper>
					</div>
					<a href="javascript:;" class="s-btn s-next" @click="imgNext"></a>
				</div>
			</div>
			<div class="hotelDe-info-con fr">
				<p class="h-tit">{{ spotDetail.title }}</p>
				<div class="h-status"><img v-if="spotDetail.icon_list.length" v-for="icon in spotDetail.icon_list" :src="icon.litpic" /></div>
				<p class="h-price">
					<span class="h-unit">￥</span>
					<span class="h-money">{{ spotDetail.price }}</span>
					起
				</p>
				<p class="h-des">{{ spotDetail.sellpoint }}</p>
				<div class="h-textBox">
					<p>开放时间：{{ spotDetail.open_time_des }}</p>
				</div>
				<p class="h-address">
					<a href="javascript:;">{{ spotDetail.address }}</a>
				</p>
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
			<div
				@click="ticketHandle(index)"
				v-for="(ticket, index) in spotDetail.suit_list"
				v-if="spotDetail.suit_list.length"
				class="place-tickit-item"
				:class="{ on: currentTicket == index }"
			>
				<div class="place-tickit-item-head clearfix">
					<div class="fl">
						<a href="javascript:;" class="p-stit">{{ ticket.title }}</a>
						<p v-if="ticket.day_before <= 0" class="p-text">当天24:00前</p>
						<p v-else class="p-text">
							提前{{ ticket.day_before }}天24:00前

							<!-- <span>{{ ticket.hour_before }}小时</span>
							<span>{{ ticket.minute_before }}分钟</span> -->
						</p>
					</div>
					<template v-if="ticket.price.price > 0">
						<router-link :to="'/LinesReservation/'+ticket.id" class="p-btn">立即预订</router-link>
						<p class="p-price">
							<span class="p-unit">￥</span>
							<span class="p-money">{{ ticket.price.price }}</span>
							起
						</p>
					</template>
					<template v-else>
						<a href="javascript:;" class="p-btn off">订完</a>
						<p class="p-price off">电询</p>
					</template>
				</div>
				<div class="place-tickit-item-con">
					<div>
						<p class="p-label">门票有效期</p>
						<p class="p-text">游客指定入园日期后{{ ticket.effective_days }}天内有效</p>
					</div>
					<div>
						<p class="p-label">取票方式</p>
						<p class="p-text">{{ ticket.get_ticket_way }}</p>
					</div>
					<div>
						<p class="p-label">退改方式</p>
						<p class="p-text" v-if="ticket.refund_restriction == 0">无条件退改</p>
						<p class="p-text" v-else-if="ticket.refund_restriction == 1">不可退改</p>
						<p class="p-text" v-else="ticket.refund_restriction == 2">有条件退改</p>
					</div>
					<div>
						<p class="p-label">门票说明</p>
						<p class="p-text" v-html="ticket.description"></p>
					</div>
				</div>
			</div>
		</div>
		<div class="detail-common-box" v-for="(introduce, index) in spotDetail.introduce_list" :key="index" :id="'box' + (index + 1)">
			<p class="detail-common-tit">{{ introduce.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="introduce.content"></div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	beforeCreate() {
		window._bd_share_main = '';
	},
	created() {
		this.getSpotDetail($API.getSpotDetail, {
			productid: this.$route.params.id || '0'
		});
	},
	mounted() {
		// 分享
		window._bd_share_config = {
			common: {
				bdSnsKey: {},
				bdText: '',
				bdMini: '2',
				bdMiniList: ['mshare', 'qzone', 'tsina', 'bdysc', 'weixin', 'tqq', 'tieba', 'douban', 'sqq', 'fx', 'copy', 'print'],
				bdPic: '',
				bdStyle: '0',
				bdSize: '16'
			},
			share: {}
		};
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
		document.getElementsByTagName('head')[0].appendChild(script);

		// 监听滚动条
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	data() {
		return {
			spotDetail: {
				pic_list: [],
				icon_list: [],
				suit_list: []
			},
			// 当前展开门票的index
			currentTicket: 0,
			imgList: [require('@/assets/images/banner01.png'), require('@/assets/images/top-bar.png')], // 轮播图列表
			imgList_on: 0, // 当前高亮的轮播图

			tabFix: false, // tab栏是否悬浮
			// tab栏
			tabArray: ['门票信息'],
			tabArray_on: 0, // 当前高亮的tab

			// banner轮播图配置
			imgSwiperOption: {
				slidesPerView: 'auto',
				spaceBetween: 6
			},
			ticketHandle(ticketIndex) {
				this.currentTicket = ticketIndex;
			}
		};
	},
	computed: {
		imgSwiper() {
			return this.$refs.imgSwiper.swiper;
		}
	},
	watch: {},
	methods: {
		// 获取景点详情
		getSpotDetail(url, content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				this.spotDetail = this.dataDecode(res.body).content;
				for (let i = 0; i < this.spotDetail.introduce_list.length; i++) {
					this.tabArray.push(this.spotDetail.introduce_list[i].chinesename);
				}
				console.log(this.dataDecode(res.body).content);
			});
		},
		// 点击轮播图
		imgClick(index) {
			this.imgList_on = index;
		},

		// 上一张轮播图
		imgPrev() {
			this.imgSwiper.slidePrev();
		},

		// 下一张轮播图
		imgNext() {
			this.imgSwiper.slideNext();
		},

		// 锚点
		toScroll(id, index) {
			let top = this.$el.querySelector('#' + id).offsetTop;
			let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
			this.wSetScroll(top - height);
			setTimeout(() => {
				this.tabArray_on = index;
			}, 100);
		},

		// 监听滚动条滚动
		handleScroll() {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
			// 判断tab栏是否悬浮
			let top = this.$el.querySelector('#detail-common-menu-box').offsetTop;
			if (scrollTop >= top) {
				this.tabFix = true;
			} else {
				this.tabFix = false;
			}

			// 改变tab栏高亮
			let item = this.$el.querySelectorAll('.detail-common-box');
			let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
			for (let i = item.length - 1; i >= 0; i--) {
				if (item[i].offsetTop <= scrollTop + height) {
					this.tabArray_on = i;
					break;
				}
			}
		}
	}
};
</script>

<style></style>
