<template>
	<div class="edit wrapper">
		<template v-if="!success">
			<h1 class="title">修改密码</h1>
			<input placeholder="旧密码" type="password" class="input" v-model="pwd0" />
			<input placeholder="新密码" type="password" class="input" v-model="pwd1" />
			<input placeholder="再次输入新密码" type="password" class="input" v-model="pwd2" />
			<button class="btn btn-confirm" @click="confirmHandle">确定</button>
		</template>
		<template v-else>
			<img class="success-icon" src="../assets/images/success-icon.png" alt="" />
			<h2 class="success-txt">密码设置成功</h2>
			<p class="tip2 text-c">{{ second }}秒后返回登录页面,重新登录</p>
			<router-link class="btn btn-back" tag="button" to="/login">返回登录页</router-link>
		</template>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
			// 旧密码
			pwd0: '',
			// 新密码
			pwd1: '',
			// 确认新密码
			pwd2: '',
			// 密码修改成功
			success: false,
			// 倒计时
			second: 3
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
