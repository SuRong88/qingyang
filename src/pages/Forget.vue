<template>
	<div class="forget wrapper">
		<h1 class="title">找回密码</h1>
		<input placeholder="手机号码" type="text" class="input" v-model="phone" />
		<div class="code-box">
			<input placeholder="短信验证码" type="text" class="input" v-model="code" />
			<span class="get-code" @click="getCode">获取验证码</span>
		</div>
		<button class="btn btn-login" @click="loginHandle">登录</button>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
			phone: '',
			code: ''
		};
	},
	computed: {},
	watch: {},
	methods: {
		getCode(){},
		loginHandle() {}
	}
};
</script>

<style></style>
