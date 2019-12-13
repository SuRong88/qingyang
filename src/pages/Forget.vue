<template>
	<div class="forget wrapper">
		<h1 class="title">找回密码</h1>
		<input @keyup.enter="loginHandle" placeholder="手机号码" type="text" class="input" v-model="phone" />
		<div class="code-box">
			<input @keyup.enter="loginHandle" placeholder="短信验证码" type="text" class="input" v-model="code1" />
			<span class="get-code" :class="{ waiting: phonecode.phoneFlag == 1 }" @click="getCode">{{ phonecode.phoneText }}</span>
		</div>
		<button class="btn btn-login" @click="loginHandle">登录</button>
		<v-mask :layerData="layerData" @layer-close="closeHandle" @layer-no="cancelHandle" @layer-yes="confirmHandle">
			<div class="code-box2">
				<input @keyup.enter="confirmHandle" placeholder="点击验证码可更换" type="text" class="input" v-model="code2" />
				<img @click="getCodeImg" class="code-pic" :src="code2ImgPath" alt="" />
			</div>
		</v-mask>
	</div>
</template>

<script>
export default {
	components: {
		vMask(resolve) {
			return require(['@/components/mask/mask.vue'], resolve);
		}
	},
	created() {},
	mounted() {},
	data() {
		return {
			phone: '13682779015',
			// 短信验证码
			code1: '',
			// 图形码
			code2: '',
			// 图形码src
			code2ImgPath: '',
			// 倒计时
			phonecode: {
				phoneText: '获取验证码',
				phoneFlag: 0,
				time: 0
			},
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
			this.getCodeImg();
			this.layerData.isLayer = true;
		},
		// 获取图形验证码
		getCodeImg() {
			this.code2ImgPath = $API.getCaptcha + 'retsms?t=' + Math.random();
		},
		closeHandle() {
			this.layerData.isLayer = false;
		},
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
				type: 'ret'
			})
				.then(res => {
					this.setTime(this, 110);
					this.code0 = res.data;
					this.layerData.isLayer = false;
				})
				.catch(err => {
					this.code2 = '';
					this.getCodeImg();
					this.errorToast('图像验证码有误');
				});
		},
		cancelHandle() {
			this.layerData.isLayer = false;
		},

		// 提交
		loginHandle() {
			if (this.nullTest(this.phone)) {
				this.errorToast('请输入手机号码');
			} else if (!this.phoneTest(this.phone)) {
				this.errorToast('手机号码格式错误');
			} else if (this.nullTest(this.code1)) {
				this.errorToast('请输入短信验证码');
			} else {
				this.$post($API.verifyPhoneCode, {
					phone: this.phone,
					code: this.code1,
					type: 'ret'
				}).then(res => {
					localStorage.pToken = res.data;
					this.loadEnd();
					this.$router.push({ path: '/setting/reset' });
				});
			}
		}
	}
};
</script>

<style></style>
