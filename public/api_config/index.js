// 加密
var clinet_secret_key = 'fa06fc24ac51094e2ee82be595e8c154';
var api_envelope = {
	version: '1.0',
	body: null,
	signature: ''
};
var api_envelope_body = {
	client_id: 1,
	success: true,
	message: '',
	timestamp: '',
	content: []
};

// 本地模式
var ISLOCAL = 1;
var BASEURL = ISLOCAL ? '/api' : 'http://dz26.mrxdtech.com/api/api';
const OPTIONS = {
	// 1.示例模块
	// 2.登录注册
	//图形码
	getCaptcha: BASEURL + '/captcha/',
	//获取短信验证码
	getPhoneCode: BASEURL + '/sms',
	//验证短信验证码
	verifyPhoneCode: BASEURL + '/sms/verify',
	//登录
	login: BASEURL + '/login',
	//注册
	register: BASEURL + '/reg',
	//忘记密码
	reset: BASEURL + '/ret',
	// 3.会务信息
	//会务内容列表
	getMeetingList: BASEURL + '/meeting/detail_list',
	// 4.会员信息
	//用户信息
	getMyInfo: BASEURL + '/member/info',
	//修改密码
	editPassword: BASEURL + '/member/editPwd',
	//修改昵称
	editNickname: BASEURL + '/member/edit',
	//修改头像
	editAvatar: BASEURL + '/member/headimg',
	// 5.订单信息
	// 6.外部接口 以下接口使用的是外部api,不使用BASEURL
	// 获取路线列表
	getLineList: 'http://www.fimice.com/api/standard/line/list',
	// 获取景点列表
	getSpotList: 'http://www.fimice.com/api/standard/spot/list',
	// 获取酒店列表
	getHotelList: 'http://www.fimice.com/api/standard/hotel/list',
	// 获取路线详情
	getLineDetail: 'http://www.fimice.com/api/standard/line/detail',
	// 获取景点详情
	// 
	getSpotDetail: 'http://www.fimice.com/api/standard/spot/detail',
	// 获取酒店详情
	getHotelDetail: 'http://www.fimice.com/api/standard/hotel/detail',
	// 获取路线报价
	getLinePrice: 'http://www.fimice.com/api/standard/line/price',
	// 获取景点报价
	getSpotPrice: 'http://www.fimice.com/api/standard/spot/price',
	// 获取酒店报价
	getHotelPrice: 'http://www.fimice.com/api/standard/hotel/price'
};
window.$API = OPTIONS;
window.otherUrl = 'http://www.fimice.com/api/standard/';
// console.log($API)
