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
			<span class="breadcrumb-item">{{ hotelDetail.title }}</span>
		</div>
		<div class="hotelDe-info-box clearfix">
			<div class="hotelDe-img-con fl">
				<div class="h-p-img"><img :src="hotelDetail.pic_list[imgList_on]" /></div>
				<div class="hotelDe-swiper-box">
					<a href="javascript:;" class="s-btn s-prev" @click="imgPrev"></a>
					<div class="hotelDe-swiper">
						<swiper :options="imgSwiperOption" ref="imgSwiper">
							<swiper-slide v-if="hotelDetail.pic_list.length" :class="{ on: imgList_on == index }" v-for="(item, index) in hotelDetail.pic_list">
								<a href="javascript:;" class="s-img" @click="imgClick(index)"><img :src="item" /></a>
							</swiper-slide>
						</swiper>
					</div>
					<a href="javascript:;" class="s-btn s-next" @click="imgNext"></a>
				</div>
			</div>
			<div class="hotelDe-info-con fr">
				<p class="h-tit">{{ hotelDetail.title }}</p>
				<div class="h-status">
					<p v-if="hotelDetail.icon_list.length" v-for="item in hotelDetail.icon_list">{{ item.kind }}</p>
				</div>
				<p class="h-price">
					<span class="h-unit">￥</span>
					<span class="h-money">{{ hotelDetail.price }}</span>
					起
				</p>
				<p class="h-des">
					{{ hotelDetail.sellpoint }}
					<!-- 详细标题 暂无 -->
				</p>
				<div class="h-textBox">
					<p>
						酒店星级：{{ hotelRanks[hotelDetail.hotelrankid] }}星级酒店/
						<span style="color: red;">(豪华等级待确定)</span>
					</p>
					<p>开业时间：{{ hotelDetail.opentime }}</p>
					<p>装修时间：{{ hotelDetail.decoratetime }}</p>
					<p>联系电话：{{ hotelDetail.telephone }}</p>
					<p class="hotel-address-p flex flex-ver">
						<img class="hotel-address-icon" src="@/assets/images/Hotel_icon02.png" alt="" />
						<span>{{ hotelDetail.address }}</span>
					</p>
				</div>

				<div class="clearfix">
					<div class="bdsharebuttonbox fl"><a href="javascript:;" class="bds_more" data-cmd="more">分享</a></div>
				</div>
			</div>
		</div>
		<div class="detail-common-menu-box" id="detail-common-menu-box">
			<ul class="detail-common-menu" :class="{ on: tabFix }" id="detail-common-menu">
				<li :class="{ on: tabArray_on == index }" v-for="(item, index) in hotelDetail.introduce_list" :key="index" @click="toScroll('box' + index, index)">
					<a href="javascript:;" class="d-item">{{ item.columnname == 'service' ? '设施服务' : item.chinesename }}</a>
				</li>
			</ul>
		</div>
		<div class="detail-common-box" id="box0">
			<p class="detail-common-tit">房型列表</p>
			<div class="detail-common-item" v-if="hotelDetail.suit_list.length" v-for="(room, roomIndex) in hotelDetail.suit_list">
				<div class="hotel-list-item clearfix">
					<div class="h-img" @click="showLayer(roomIndex)">
						<img v-if="room.piclist.length" :src="room.piclist[0]" />
						<div
							v-else
							style="height: 64px; background: url(http://www.fimice.com//uploads/2017/1025/4497624f5ab2fa9bdd1ec5fb2600f6f2_200x107.png) center center/contain no-repeat; background-color: #e7e7e7;"
						></div>
					</div>
					<div class="h-info">
						<p class="h-tit">{{ room.roomname }}</p>
						<div class="h-textBox">
							<p>{{ room.roomstyle }}</p>
							<p>{{ room.breakfirst }}</p>
						</div>
					</div>
					<!-- 可订 -->
					<div v-if="room.price > 0" class="h-right">
						<p class="h-price">
							<span class="h-unit">￥</span>
							<span class="h-money">{{ room.price }}</span>
							起
						</p>
						<div class="h-btnBox"><router-link :to="'/hotelsReservation/' + roomIndex" class="h-btn">立即预订</router-link></div>
					</div>
					<!-- 订完 -->
					<div v-else class="h-right">
						<p class="h-price off">电询</p>
						<div class="h-btnBox"><a href="javascript:;" class="h-btn off">订完</a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 附加费用 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'e_content_1'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 酒店详细 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'content'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 设施服务 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'service'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">设施服务</p>
			<div class="detail-common-item">
				<p class="detail-common-stit">网络设施</p>
				<div class="detail-type">
					<p v-if="hotelDetail.servicelist.length && service == '2'" v-for="service in hotelDetail.servicelist">{{ serviceTypes[service] }}</p>
				</div>
			</div>
			<div class="detail-common-item">
				<p class="detail-common-stit">酒店设施</p>
				<div class="detail-type">
					<p v-if="hotelDetail.servicelist.length && service != '2'" v-for="service in hotelDetail.servicelist">{{ serviceTypes[service] }}</p>
				</div>
			</div>
		</div>
		<!-- 服务项目 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'fuwu'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 交通指南 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'traffic'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 注意事项 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'notice'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 周边景点 -->
		<div
			v-if="hotelDetail.introduce_list.length && item.columnname == 'aroundspots'"
			v-for="(item, index) in hotelDetail.introduce_list"
			class="detail-common-box"
			:id="'box' + index"
		>
			<p class="detail-common-tit">{{ item.chinesename }}</p>
			<div class="edit_textBox clearfix" v-html="item.content"></div>
		</div>
		<!-- 房型说明弹窗 -->
		<v-mask :layerData="layerData" @layer-close="closeHandle">
			<div class="hotelDia-con">
				<div class="hotelDia-info-box clearfix">
					<div class="h-img fl"><img v-if="currentRoom.piclist.length" :src="currentRoom.piclist[0]" /></div>
					<div class="h-info fr text-l">
						<p class="h-tit">{{ currentRoom.roomname || '未知' }}</p>
						<p class="h-text">
							窗户：{{ currentRoom.roomwindow || '未知' }}
							<i>|</i>
							餐标：{{ currentRoom.breakfirst || '未知' }}
							<i>|</i>
							宽带：{{ currentRoom.computer || '未知' }}
						</p>
						<p class="h-text">
							面积：{{ currentRoom.roomarea ? currentRoom.roomarea + '㎡' : '未知' }}
							<i style="padding-left: 70px;"></i>
							楼层：{{ currentRoom.roomfloor || '未知' }}
						</p>
						<p class="h-text">床型：{{ currentRoom.roomstyle || '未知' }}</p>
					</div>
				</div>
				<div class="hotelDia-item text-l">
					<p class="h-stit">房间设施</p>
					<div class="detail-type">
						<p v-for="item in currentRoom.servicelist">{{ serviceList[item] }}</p>
					</div>
				</div>
				<div class="hotelDia-item text-l">
					<p class="h-stit">其它说明</p>
					<div class="edit_textBox clearfix" v-html="currentRoom.description"></div>
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
	created() {
		this.getHotelDetail($API.getHotelDetail, {
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
			// 酒店详情信息
			hotelDetail: {
				pic_list: [],
				icon_list: [],
				introduce_list: [],
				suit_list: [
					{
						piclist: []
					}
				],
				introduce_list: [],
				servicelist: []
			},
			imgList_on: 0, // 当前高亮的轮播图
			// 酒店星级
			hotelRanks: {
				'2': '二',
				'3': '三',
				'4': '四',
				'5': '五'
			},
			// 设施服务
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
			// 房间的服务
			serviceList: {
				'4': '拖鞋',
				'5': '24小时热水'
			},
			// 弹窗房间的roomIndex
			roomIndex: 0,
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
				isLayer: false, // 弹窗是否渲染
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
		},
		currentRoom() {
			return this.hotelDetail.suit_list[this.roomIndex];
		}
	},
	watch: {},
	methods: {
		// 酒店信息
		getHotelDetail(url, content) {
			let data = this.dataHandle(url, content);
			this.$post(url, data).then(res => {
				this.hotelDetail = this.dataDecode(res.body).content;
				// servicelist字符串处理为数组
				this.hotelDetail.servicelist = this.hotelDetail.servicelist != null ? this.hotelDetail.servicelist.split(',') : [];
				this.hotelDetail.introduce_list.unshift({
					columnname: 'roomlist',
					chinesename: '房型列表',
					content: ''
				});
				for (let i = 0; i < this.hotelDetail.suit_list.length; i++) {
					this.hotelDetail.suit_list[i].servicelist = this.hotelDetail.suit_list[i].servicelist.split(',') || [];
				}
				console.log(this.dataDecode(res.body));
			});
		},
		// 展示弹窗
		showLayer(roomIndex = 0) {
			this.layerData.isLayer = true;
			this.roomIndex = roomIndex;
		},
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
