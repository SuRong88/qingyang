<template>
	<div class="setting wrapper">
		<template v-if="!success">
			<h1 class="title">设置密码</h1>
			<input placeholder="输入密码" type="password" class="input" v-model="pwd1" />
			<p class="tip">首位字母，字母+数字不少于6位</p>
			<input placeholder="确认密码" type="password" class="input" v-model="pwd2" />
			<button class="btn btn-confirm" @click="confirmHandle">确定</button>
		</template>
		<template v-else>
			<img class="success-icon" src="../assets/images/success-icon.png" alt="">
			<h2 class="success-txt">密码设置成功</h2>
			<p class="tip2 text-c">
				{{second}}秒后返回登录页面,重新登录
			</p>
			<router-link class="btn btn-back" tag="button" to="/login">
				返回登录页
			</router-link>
		</template>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
			pwd1: '',
			pwd2: '',
			// 密码设置成功
			success: true,
			// 倒计时
			second:3
		};
	},
	computed: {},
	watch: {},
	methods: {
		confirmHandle() {}
	}
};
</script>

<style></style>
