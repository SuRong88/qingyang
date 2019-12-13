<template>
	<div class="routeDe-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<a class="breadcrumb-item is-link" href="/hotel">线路</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">{{ lineDetail.title }}</span>
		</div>
		<div class="hotelDe-info-box clearfix">
			<div class="hotelDe-img-con fl">
				<div class="h-p-img"><img :src="lineDetail.piclist[imgList_on]" /></div>
				<div class="hotelDe-swiper-box">
					<a href="javascript:;" class="s-btn s-prev" @click="imgPrev"></a>
					<div class="hotelDe-swiper">
						<swiper :options="imgSwiperOption" ref="imgSwiper">
							<swiper-slide :class="{ on: imgList_on == index }" v-for="(item, index) in lineDetail.piclist">
								<a href="javascript:;" class="s-img" @click="imgClick(index)"><img :src="item" /></a>
							</swiper-slide>
						</swiper>
					</div>
					<a href="javascript:;" class="s-btn s-next" @click="imgNext"></a>
				</div>
				<div class="hotelDe-swiper-box" style="margin-top: 12px;">
					<a href="javascript:;" class="s-btn s-prev" style="height: 40px;" @click="calendarPrev"></a>
					<div class="calendar-swiper">
						<swiper :options="calendarSwiperOption" ref="calendarSwiper">
							<swiper-slide class="on">
								<a href="javascript:;">
									<p class="c-label">8月</p>
									<p class="c-text">¥10999起</p>
								</a>
							</swiper-slide>
							<swiper-slide>
								<a href="javascript:;">
									<p class="c-label">9月</p>
									<p class="c-text">¥10999起</p>
								</a>
							</swiper-slide>
							<swiper-slide>
								<a href="javascript:;">
									<p class="c-label">10月</p>
									<p class="c-text">¥10999起</p>
								</a>
							</swiper-slide>
							<swiper-slide class="off">
								<a href="javascript:;">
									<p class="c-label">11月</p>
									<p class="c-text">暂无团期</p>
								</a>
							</swiper-slide>
							<swiper-slide>
								<a href="javascript:;">
									<p class="c-label">12月</p>
									<p class="c-text">¥10999起</p>
								</a>
							</swiper-slide>
						</swiper>
					</div>
					<a href="javascript:;" class="s-btn s-next" style="height: 40px;" @click="calendarNext"></a>
				</div>
				<div class="calendar-box">
					<ul class="calendar-head clearfix">
						<li v-for="item in frontend.week">{{ item }}</li>
					</ul>
					<ul class="calendar-con clearfix">
						<li v-for="(item, index) in preMonthDays"></li>
						<li v-for="(item, index) in currentMonthDays">
							<p class="c-num">{{ index + 1 }}</p>
							<p class="c-price">¥10999</p>
							<p class="c-tip">余位充足</p>
						</li>
						<li v-for="(item, index) in 42 - preMonthDays - currentMonthDays"></li>
					</ul>
				</div>
			</div>
			<div class="hotelDe-info-con fr">
				<p class="h-tit">{{ lineDetail.title }}</p>
				<p class="h-des">{{ lineDetail.sellpoint }}</p>
				<div class="routeDe-info-sbox clearfix">
					<p class="r-price fl">
						价格：￥{{ lineDetail.storeprice }}
						<i></i>
						促销价：
						<span class="r-unit">￥</span>
						<span class="r-money">{{ lineDetail.price }}</span>
					</p>
					<a href="javascript:;" class="r-qr fr">
						二维码分享
						<div class="r-img"><img src="http://www.fimice.com/res/vendor/qrcode/make.php?param=http%3A%2F%2Fwww.fimice.com%2Flines%2Fshow_368.html" /></div>
					</a>
					<div class="bdsharebuttonbox fr"><a href="javascript:;" class="bds_more" data-cmd="more">分享</a></div>
				</div>
				<div class="h-textBox h-detailBox">
					<div class="detail-item flex flex-ver">
						<span class="label">出发城市:</span>
						<span class="detail-txt">{{ lineDetail.startcity }}</span>
					</div>
					<div class="detail-item flex flex-ver">
						<span class="label">出游日期:</span>
						<span class="mini-box date2">
							2019-10-21
							<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
						</span>
						<span class="tip">请提前{{ lineDetail.linebefore }}天预订</span>
					</div>
					<div class="detail-item flex flex-ver">
						<span class="label count-label">选择套餐:</span>
						<ul class="flex flex-wrap">
							<li v-if="" v-for="suit in lineDetail.suit_info" class="tc-item suit-box">
								{{ suit.suitname }}
								<div class="suit-desc" v-html="suit.description"></div>
							</li>
						</ul>
					</div>
					<div class="detail-item flex flex-ver">
						<span class="label count-label">出游人数:</span>
						<ul class="flex flex-wrap">
							<li v-for="i in 3" class="people-item flex flex-ver">
								<span class="mini-box">
									<!-- 按钮无法点击状态时  添加class 'is-disabled' -->
									<img class="icon icon1 is-disabled" src="../assets/images/value_icon01_sel.png" alt="" />
									<input class="buy-num flex-1" type="text" />
									<img class="icon icon2" src="../assets/images/value_icon02.png" alt="" />
								</span>
								<div class="price-each ml10">
									<span class="price">￥10999</span>
									/成人
								</div>
							</li>
						</ul>
					</div>
					<div class="detail-item flex flex-ver">
						<span class="label">出行天数:</span>
						<span class="detail-txt">{{ lineDetail.lineday }}天{{ lineDetail.linenight }}晚</span>
					</div>
				</div>
				<button class="btn btn-order">立即预定</button>
			</div>
		</div>
		<div class="detail-common-menu-box" id="detail-common-menu-box">
			<ul class="detail-common-menu" :class="{ on: tabFix }" id="detail-common-menu">
				<li :class="{ on: tabArray_on == index }" v-for="(item, index) in lineDetail.detail_list" :key="index" @click="toScroll('box' + index, index)">
					<a href="javascript:;" class="d-item">{{ item.chinesename }}</a>
				</li>
			</ul>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'reserved1'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">简要行程</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'jieshao'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">行程安排</p>
			<div class="route-line-box clearfix" id="route-line-box">
				<ul class="route-line-day fl" :class="{ on: routeLineFix }" id="route-line-day">
					<li :class="{ on: routeLineArray_on == index }" v-for="(item, index) in item.content">
						<a href="javascript:;" class="r-text" @click="toScrollDay('routeLineDay' + index, index)">第{{ item.day }}天</a>
					</li>
				</ul>
				<ul class="route-line-con fr" id="route-line-con">
					<li v-for="(item, index) in item.content" :id="'routeLineDay' + index">
						<p class="r-tit">
							<span>D{{ item.day }}</span>
							{{ item.title }}
						</p>
						<div class="r-item">
							<div class="r-icon"><img src="../assets/images/route-icon01.png" /></div>
							<div class="r-info">
								<div>
									<p class="r-text">{{ item.transport }}</p>
								</div>
							</div>
						</div>
						<div class="r-item">
							<div class="r-icon"><img src="@/assets/images/route-icon02.png" /></div>
							<div class="r-info">
								<div>
									<p class="r-text">早餐：{{ item.breakfirst ? item.breakfirst : '敬请自理' }}</p>
									<p class="r-text">午餐： {{ item.lunch ? item.lunch : '敬请自理' }}</p>
									<p class="r-text">晚餐： {{ item.supper ? item.supper : '敬请自理' }}</p>
								</div>
							</div>
						</div>
						<div class="r-item" v-if="item.hotel">
							<div class="r-icon"><img src="@/assets/images/route-icon03.png" /></div>
							<div class="r-info">
								<div>
									<p class="r-text">住宿： {{ item.hotel }}</p>
								</div>
							</div>
						</div>
						<div class="r-item">
							<div class="r-icon"><img src="@/assets/images/route-icon04.png" /></div>
							<div class="r-info">
								<div><p class="r-text">行程：</p></div>
								<div class="edit_textBox clearfix" v-html="item.jieshao"></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'feeinclude'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">费用包含</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'features'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">线路特色</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'reserved2'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">费用不含</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'payment'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">签约流程</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<div class="detail-common-box" v-if="lineDetail.detail_list.length && item.columnname == 'reserved3'" v-for="(item, index) in lineDetail.detail_list" :id="'box' + index">
			<p class="detail-common-tit">签证</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
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
		this.calendarInit();
		this.getLineDetail($API.getLineDetail, {
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
			// 路线详情
			lineDetail: {
				piclist: [],
				suit_info: []
			},
			frontend: {
				week: ['日', '一', '二', '三', '四', '五', '六']
			},
			currentMonthDays: 0, // 当前选择月份的天数
			preMonthDays: 0, // 需要补齐的上个月天数

			imgList: [require('@/assets/images/banner01.png'), require('@/assets/images/top-bar.png')], // 轮播图列表
			imgList_on: 0, // 当前高亮的轮播图

			tabFix: false, // tab栏是否悬浮
			// tab栏
			tabArray: ['简要行程', '行程安排', '费用包含', '线路特色', '费用不含', '签约流程', '签证'],
			tabArray_on: 0, // 当前高亮的tab

			routeLineFix: false, // 行程安排是否悬浮
			routeLineArray: [
				// 行程安排数组
				{
					day: '1'
				},
				{
					day: '2'
				},
				{
					day: '3'
				}
			],
			routeLineArray_on: 0, // 当前高亮的行程

			// banner轮播图配置
			imgSwiperOption: {
				slidesPerView: 'auto',
				spaceBetween: 6
			},

			// 日历swiper配置
			calendarSwiperOption: {
				slidesPerView: 4
			}
		};
	},
	computed: {
		imgSwiper() {
			return this.$refs.imgSwiper.swiper;
		},
		calendarSwiper() {
			return this.$refs.calendarSwiper.swiper;
		}
	},
	watch: {},
	methods: {
		// 获取路线详情
		// 酒店信息
		getLineDetail(url, content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				this.lineDetail = this.dataDecode(res.body).content;
				console.log(this.lineDetail);
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

		// 上一月份
		calendarPrev() {
			this.calendarSwiper.slidePrev();
		},

		// 下一月份
		calendarNext() {
			this.calendarSwiper.slideNext();
		},

		// 日历初始化
		calendarInit() {
			let date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			let currentMonthDays = new Date(year, month, 0).getDate(); // 当前月的天数
			let preMonthDays = new Date(date.setDate(1)).getDay(); // 需要补齐的上个月天数

			this.currentMonthDays = currentMonthDays;
			this.preMonthDays = preMonthDays;
		},

		// tab栏锚点
		toScroll(id, index) {
			let top = this.$el.querySelector('#' + id).offsetTop;
			let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
			this.wSetScroll(top - height);
			setTimeout(() => {
				this.tabArray_on = index;
			}, 100);
		},

		// 行程安排锚点
		toScrollDay(id, index) {
			let top = this.$el.querySelector('#' + id).offsetTop;
			let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
			this.wSetScroll(top - height - 30);
			setTimeout(() => {
				this.routeLineArray_on = index;
			}, 100);
		},

		// 监听滚动条滚动
		handleScroll() {
			let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset || 0;
			let height = this.$el.querySelector('#detail-common-menu').offsetHeight;
			// 判断tab栏是否悬浮
			let top = this.$el.querySelector('#detail-common-menu-box').offsetTop;
			if (scrollTop >= top) {
				this.tabFix = true;
			} else {
				this.tabFix = false;
			}

			// 改变tab栏高亮
			let item = this.$el.querySelectorAll('.detail-common-box');
			for (let i = item.length - 1; i >= 0; i--) {
				if (item[i].offsetTop <= scrollTop + height) {
					this.tabArray_on = i;
					break;
				}
			}

			// 判断行程安排是否悬浮
			let routeLineTop = this.$el.querySelector('#route-line-box').offsetTop;
			let routeLineHeight = this.$el.querySelector('#route-line-box').offsetHeight;
			let routeDayHeight = this.$el.querySelector('#route-line-day').offsetHeight;
			if (scrollTop + height + 10 >= routeLineTop && scrollTop < routeLineTop + routeLineHeight - routeDayHeight - 200) {
				this.routeLineFix = true;
			} else {
				this.routeLineFix = false;
			}

			// 改变行程高亮
			let routeLineItem = this.$el.querySelectorAll('#route-line-con li');
			for (let i = routeLineItem.length - 1; i >= 0; i--) {
				if (routeLineItem[i].offsetTop <= scrollTop + height + 30) {
					this.routeLineArray_on = i;
					break;
				}
			}
		}
	}
};
</script>

<style></style>
