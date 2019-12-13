<template>
	<div class="login wrapper">
		<h1 class="title">用户登录</h1>
		<input @keyup.enter="loginHandle" placeholder="手机号" type="text" class="input" v-model="phone" />
		<input @keyup.enter="loginHandle" placeholder="密码" type="password" class="input" v-model="pwd" />
		<div class="code-box">
			<input @keyup.enter="loginHandle" placeholder="验证码" type="text" class="input" v-model="code" />
			<img @click="getCodeImg" class="code-pic" :src="codeImg" alt="" />
		</div>
		<button class="btn btn-login" @click="loginHandle">登录</button>
		<div class="others">
			<router-link class="forget-txt" to="/forget">找回密码</router-link>
			<span class="spe"></span>
			<span class="tip">还没有注册账号?</span>
			<router-link class="register-txt" to="/register">立即注册</router-link>
		</div>
		<div class="tel-box">
			<img src="../assets/images/tel-icon.png" alt="" class="tel-icon" />
			<span class="tel-txt">客服热线：</span>
			<span class="tel">400-0000-000</span>
		</div>
	</div>
</template>

<script>
export default {
	beforeCreate() {
		// console.log(this)
		// console.log(this.$data)
		// console.log(this.test)
	},
	created() {
		// console.log(this.codeImg)
		// console.log(this.$data.codeImg)
		// 深拷贝
		// console.log(JSON.parse(JSON.stringify(this.$data)));
		this.getCodeImg();
		this.$store.commit("CLEAN_MYINFO");
	},
	mounted() {},
	data() {
		return {
			test:'hahaha',
			codeImg: '', // 图形验证码
			phone: '13682779015',
			pwd: '',
			code: ''
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 获取图形验证码
		getCodeImg() {
			this.codeImg = $API.getCaptcha + 'login?t=' + Math.random();
		},

		// 提交
		loginHandle() {
			if (this.nullTest(this.phone)) {
				this.errorToast('请输入手机号');
			} else if (this.nullTest(this.pwd)) {
				this.errorToast('请输入密码');
			} else if (this.nullTest(this.code)) {
				this.errorToast('请输入验证码');
			} else {
				this.$post($API.login, {
					account: this.phone,
					password: this.pwd,
					code: this.code
				}).then(
					res => {
						localStorage.token = res.data;
						this.getMyInfo();
						this.loadEnd();
						this.$router.replace({ path: '/index' });
					},
					err => {
						this.errorToast(err.data.msg);
						this.getCodeImg();
					}
				);
			}
		}
	}
};
</script>

<style></style>
