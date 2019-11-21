<template>
	<div class="register wrapper">
		<h1 class="title">用户注册</h1>
		<input placeholder="手机号码" type="text" class="input" v-model="phone" />
		<div class="code-box1">
			<input placeholder="短信验证码" type="text" class="input" v-model="code1" />
			<span class="get-code" @click="getCode">获取验证码</span>
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
		<mlayer :layerData="layerData" @close-layer="closeHandle" @layer-no="cancelHandle" @layer-yes="confirmHandle">
			<div class="code-box2">
				<input placeholder="点击验证码可更换" type="text" class="input" v-model="code2" />
				<img class="code-pic" src="../assets/images/login_pic.jpg" alt="" />
			</div>
		</mlayer>
	</div>
</template>

<script>
import mylayer from 'components/mlayer.vue';
export default {
	components: {
		mlayer(resolve) {
			return require(['@/components/mlayer'], resolve);
		}
	},
	created() {
		this.warnToast('该账号已存在，请通过找回密码或直接登录');
	},
	mounted() {},
	data() {
		return {
			phone: '',
			// 短信验证码
			code1: '',
			// 图形码
			code2: '',
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
		getCode() {
			this.layerData.isLayer = true;
		},
		closeHandle() {
			this.layerData.isLayer = false;
		},
		confirmHandle() {
			this.layerData.isLayer = false;
		},
		cancelHandle() {
			this.layerData.isLayer = false;
		},
		registerHandle() {}
	}
};
</script>

<style></style>
