<template>
	<div class="login wrapper">
		<h1 class="title">用户登录</h1>
		<input placeholder="手机号" type="text" class="input" v-model="phone" />
		<input placeholder="密码" type="password" class="input" v-model="pwd" />
		<div class="code-box">
			<input placeholder="验证码" type="text" class="input" v-model="code" />
			<img class="code-pic" src="../assets/images/code.png" alt="" />
		</div>
		<button class="btn btn-login" @click="loginHandle">登录</button>
		<div class="others">
			<router-link class="forget-txt" to="/forget">找回密码</router-link>
			<span class="spe"></span>
			<span class="tip">还没有注册账号?</span>
			<router-link class="register-txt" to="/register">立即注册</router-link>
		</div>
		<div class="tel-box">
			<img src="../assets/images/tel-icon.png" alt="" class="tel-icon">
			<span class="tel-txt">客服热线：</span>
			<span class="tel">400-0000-000</span>
		</div>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
			phone: '',
			pwd: '',
			code: ''
		};
	},
	computed: {},
	watch: {},
	methods: {
		loginHandle() {}
	}
};
</script>

<style></style>
