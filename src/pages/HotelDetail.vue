<template>
	<div class="hotelDe-box wrapper">
		<div class="breadcrumb-box">
			<a class="breadcrumb-item is-link" href="/index">
				<img class="icon" src="@/assets/images/home-icon.png" alt="" />
				首页
			</a>
			<i class="el-icon-arrow-right"></i>
			<a class="breadcrumb-item is-link" href="/hotel">酒店</a>
			<i class="el-icon-arrow-right"></i>
			<span class="breadcrumb-item">长隆横琴湾酒店(珠海海洋王国店)</span>
		</div>
		<div class="hotelDe-info-box clearfix">
			<div class="hotelDe-img-con fl">
				<div class="h-p-img"><img :src="imgList[imgList_on]" /></div>
				<div class="hotelDe-swiper-box">
					<a href="javascript:;" class="s-btn s-prev" @click="imgPrev"></a>
					<div class="hotelDe-swiper">
						<swiper :options="imgSwiperOption" ref="imgSwiper">
							<swiper-slide :class="{ on: imgList_on == index }" v-for="(item, index) in imgList">
								<a href="javascript:;" class="s-img" @click="imgClick(index)"><img :src="item" /></a>
							</swiper-slide>
						</swiper>
					</div>
					<a href="javascript:;" class="s-btn s-next" @click="imgNext"></a>
				</div>
			</div>
			<div class="hotelDe-info-con fr">
				<p class="h-tit">长隆横琴湾酒店(珠海海洋王国店)</p>
				<div class="h-status">
					<p>热门</p>
					<p>限时特惠</p>
				</div>
				<p class="h-price">
					<span class="h-unit">￥</span>
					<span class="h-money">1300</span>
					起
				</p>
				<p class="h-des">长隆横琴湾酒店——动人心魄的奇妙海豚旗舰店，妙想童趣等您来探索！</p>
				<div class="h-textBox">
					<p>酒店星级：五星级酒店/豪华</p>
					<p>开业时间：2014年开业</p>
					<p>装修时间：2018</p>
					<p>联系电话：0756-2998888</p>
				</div>
				<p class="h-ads"><a href="javascript:;">珠海市横琴新区富祥湾</a></p>
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
			<p class="detail-common-tit">房型列表</p>
			<div class="detail-common-item">
				<div class="hotel-list-item clearfix">
					<div class="h-img"><img src="@/assets/images/banner01.png" /></div>
					<div class="h-info">
						<p class="h-tit">长隆横琴湾酒店(珠海海洋王国店)</p>
						<div class="h-textBox">
							<p>双床1.5米</p>
							<p>单早</p>
						</div>
					</div>
					<div class="h-right">
						<p class="h-price">
							<span class="h-unit">￥</span>
							<span class="h-money">1300</span>
							起
						</p>
						<div class="h-btnBox"><a href="javascript:;" class="h-btn">立即预订</a></div>
					</div>
				</div>
			</div>
			<div class="detail-common-item">
				<div class="hotel-list-item clearfix">
					<div class="h-img"><img src="@/assets/images/banner01.png" /></div>
					<div class="h-info">
						<p class="h-tit">长隆横琴湾酒店(珠海海洋王国店)</p>
						<div class="h-textBox">
							<p>双床1.5米</p>
							<p>单早</p>
						</div>
					</div>
					<div class="h-right">
						<p class="h-price">
							<span class="h-unit">￥</span>
							<span class="h-money">1300</span>
							起
						</p>
						<div class="h-btnBox"><a href="javascript:;" class="h-btn">立即预订</a></div>
					</div>
				</div>
			</div>
			<div class="detail-common-item">
				<div class="hotel-list-item clearfix">
					<div class="h-img"><img src="@/assets/images/banner01.png" /></div>
					<div class="h-info">
						<p class="h-tit">长隆横琴湾酒店(珠海海洋王国店)</p>
						<div class="h-textBox">
							<p>双床1.5米</p>
							<p>单早</p>
						</div>
					</div>
					<div class="h-right">
						<p class="h-price off">电询</p>
						<div class="h-btnBox"><a href="javascript:;" class="h-btn off">订完</a></div>
					</div>
				</div>
			</div>
		</div>
		<div class="detail-common-box" id="box1">
			<p class="detail-common-tit">附加费用</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box2">
			<p class="detail-common-tit">酒店详细</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box3">
			<p class="detail-common-tit">设施服务</p>
			<div class="detail-common-item">
				<p class="detail-common-stit">网络设施</p>
				<div class="detail-type"><p>酒店各处提供wifi</p></div>
			</div>
			<div class="detail-common-item">
				<p class="detail-common-stit">酒店设施</p>
				<div class="detail-type">
					<p>西式餐厅</p>
					<p>中式餐厅</p>
					<p>残疾人设施</p>
					<p>室外游泳池</p>
					<p>室内游泳池</p>
					<p>会议室</p>
					<p>健身房</p>
				</div>
			</div>
		</div>
		<div class="detail-common-box" id="box4">
			<p class="detail-common-tit">服务项目</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box5">
			<p class="detail-common-tit">交通指南</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box6">
			<p class="detail-common-tit">注意事项</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
			</div>
		</div>
		<div class="detail-common-box" id="box7">
			<p class="detail-common-tit">周边景点</p>
			<div class="edit_textBox clearfix">
				<!-- 富文本 -->
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
				<p>富文本内容</p>
			</div>
		</div>

		<!-- 房型说明弹窗 -->
		<v-mask :layerData="layerData" @layer-close="closeHandle">
			<div class="hotelDia-con">
				<div class="hotelDia-info-box clearfix">
					<div class="h-img fl"><img src="@/assets/images/banner01.png" /></div>
					<div class="h-info fr text-l">
						<p class="h-tit">商务房大床房</p>
						<p class="h-text">
							窗户：有窗
							<i>|</i>
							餐标：双早
							<i>|</i>
							宽带：WIFI
						</p>
						<p class="h-text">
							面积：未知
							<i style="padding-left: 70px;"></i>
							楼层：未知
						</p>
						<p class="h-text">床型：双床1.5米</p>
					</div>
				</div>
				<div class="hotelDia-item text-l">
					<p class="h-stit">房间设施</p>
					<div class="detail-type">
						<p>拖鞋</p>
						<p>24小时热水</p>
					</div>
				</div>
				<div class="hotelDia-item text-l">
					<p class="h-stit">其它说明</p>
					<div class="edit_textBox clearfix">
						<!-- 富文本 -->
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
						<p>富文本内容</p>
					</div>
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
	beforeCreate() {
		window._bd_share_main = '';
	},
	created() {},
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
			imgList: [
				require('@/assets/images/banner01.png'),
				require('@/assets/images/top-bar.png'),
				require('@/assets/images/banner01.png'),
				require('@/assets/images/top-bar.png'),
				require('@/assets/images/banner01.png'),
				require('@/assets/images/top-bar.png')
			], // 轮播图列表
			imgList_on: 0, // 当前高亮的轮播图

			tabFix: false, // tab栏是否悬浮
			// tab栏
			tabArray: ['房型列表', '附加费用', '酒店详细', '酒店设施', '服务项目', '交通指南', '注意事项', '周边景点'],
			tabArray_on: 0, // 当前高亮的tab

			// banner轮播图配置
			imgSwiperOption: {
				slidesPerView: 'auto',
				spaceBetween: 6
			},
			// 弹窗
			layerData: {
				isLayer: true, // 弹窗是否渲染
				isHeader: true, // 头部是否渲染
				isBtn: false, // 按钮是否渲染
				tit: '房型说明', // 标题内容
				yes: '确定', // 确定按钮文本
				no: '取消', // 取消按钮文本
				isNo: true, // 是否需要取消按钮
				isClose: true // 是否需要关闭按钮
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
		// 关闭弹窗
		closeHandle() {
			this.layerData.isLayer = false;
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
