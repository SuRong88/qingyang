<template>
	<div class="register wrapper">
		<h1 class="title">用户注册</h1>
		<input @keyup.enter="registerHandle" placeholder="手机号码" type="text" class="input" v-model="phone" />
		<div class="code-box1">
			<input @keyup.enter="registerHandle" placeholder="短信验证码" type="text" class="input" v-model="code1" />
			<span class="get-code" :class="{ waiting: phonecode.phoneFlag == 1 }" @click="getCode">{{ phonecode.phoneText }}</span>
		</div>
		<button class="btn btn-register" @click="registerHandle">注册</button>
		<div class="others">
			<span class="tip">已有账号?</span>
			<router-link class="login-txt" to="/login">立即登录</router-link>
		</div>
		<!-- <div class="warning" v-show="warning">
			该账号已存在，请通过找回密码或直接登录
		</div> -->
		<div class="tel-box">
			<img src="../assets/images/tel-icon.png" alt="" class="tel-icon" />
			<span class="tel-txt">客服热线：</span>
			<span class="tel">400-0000-000</span>
		</div>
		<v-mask :layerData="layerData" @layer-close="closeHandle" @layer-no="cancelHandle" @layer-yes="confirmHandle">
			<div class="code-box2">
				<input @keyup.enter="confirmHandle" placeholder="点击验证码可更换" type="text" class="input" v-model="code2" />
				<img @click="changeCaptcha" class="code-pic" :src="code2ImgPath" alt="" />
			</div>
		</v-mask>
	</div>
</template>

<script>
// import vMask from 'components/mask/mask.vue';
export default {
	components: {
		vMask(resolve) {
			return require(['@/components/mask/mask.vue'], resolve);
		}
	},
	created() {
		// this.warnToast('该账号已存在，请通过找回密码或直接登录');
	},
	mounted() {},
	data() {
		return {
			phone: '',
			phonecode: {
				phoneText: '获取验证码',
				phoneFlag: 0,
				time: 0
			},
			// 输入 短信验证码
			code1: '',
			// 图形码
			code2: '',
			// 图形码src
			code2ImgPath: '',
			// 图形码模态框
			layerData: {
				isLayer: false, // 弹窗是否渲染
				isHeader: true, // 头部是否渲染
				isBtn: true, // 按钮是否渲染
				tit: '输入图像验证码', // 标题内容
				yes: '确定', // 确定按钮文本
				no: '取消', // 取消按钮文本
				isNo: true, // 是否需要取消按钮
				isClose: true // 是否需要关闭按钮
			}
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 手机验证码
		getCode() {
			if (this.phonecode.phoneFlag != 0) {
				return;
			}
			if (this.nullTest(this.phone)) {
				return this.errorToast('手机号码不能为空');
			}
			if (!this.phoneTest(this.phone)) {
				return this.errorToast('手机号码格式有误');
			}
			this.changeCaptcha();
			this.layerData.isLayer = true;
		},
		// 关闭弹窗
		closeHandle() {
			this.code2 = '';
			this.layerData.isLayer = false;
		},
		// 确定弹窗
		confirmHandle() {
			if (this.nullTest(this.code2)) {
				return this.errorToast('图形码不能为空');
			}
			if (!this.codeTest1(this.code2)) {
				return this.errorToast('图形码格式有误');
			}
			this.$post($API.getPhoneCode, {
				phone: this.phone,
				code: this.code2,
				type: 'reg'
			})
				.then(res => {
					this.setTime(this);
					this.layerData.isLayer = false;
				})
				.catch(err => {
					this.code2 = '';
					this.changeCaptcha();
					this.errorToast('图像验证码有误');
				});
		},
		// 关闭弹窗
		cancelHandle() {
			this.code2 = '';
			this.layerData.isLayer = false;
		},
		// 图形码
		changeCaptcha() {
			this.code2 = '';
			this.code2ImgPath = $API.getCaptcha + 'regsms?t=' + Date.parse(new Date());
		},
		// 注册
		registerHandle() {
			if (this.nullTest(this.phone)) {
				return this.errorToast('手机号码不能为空');
			}
			if (!this.phoneTest(this.phone)) {
				return this.errorToast('手机号码格式有误');
			}
			if (this.nullTest(this.code1)) {
				return this.errorToast('短信验证码不能为空');
			}
			if (!this.codeTest2(this.code1)) {
				return this.errorToast('短信验证码格式有误');
			}
			this.$post($API.verifyPhoneCode, {
				phone: this.phone,
				code: this.code1,
				type: 'reg'
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
					localStorage.pToken = res.data;
					this.loadEnd();
					this.$router.push({ path: '/setting/register' });
				})
				.catch(err => {
					this.errorToast('短信验证码错误');
				});
		}
	}
};
</script>

<style lang="less">
.register {
	.layer_con {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
