<template>
	<div class="setting wrapper">
		<template v-if="!success">
			<h1 class="title">设置密码</h1>
			<input @keyup.enter="confirmHandle" placeholder="输入密码" type="password" class="input" v-model="pwd1" />
			<p class="tip">首位字母，字母+数字不少于6位</p>
			<input @keyup.enter="confirmHandle" placeholder="确认密码" type="password" class="input" v-model="pwd2" />
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
	created() {
		// console.log(this.$route.params.type)
		// (!this.$route.params.type) && this.$router.push({path:'/index'});
	},
	mounted() {},
	destroyed() {
		clearInterval(this.timer);
	},
	data() {
		return {
			pwd1: '',
			pwd2: '',
			// 密码设置成功
			success: false,
			// 倒计时
			second: 3,
			timer: null // 定时器
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 提交
		confirmHandle() {
			if (this.nullTest(this.pwd1)) {
				this.errorToast('请输入密码');
			} else if (!this.passwordTest(this.pwd1)) {
				this.errorToast('密码必须为字母与数字组合且不少于6位');
			} else if (this.pwd1 !== this.pwd2) {
				this.errorToast('两次密码不一致');
			} else {
				let type = this.$route.params.type;
				switch (type) {
					case 'register':
						this.$post($API.register, {
							password: this.pwd1,
							pToken: localStorage.pToken
						}).then(res => {
							this.loadEnd();
							this.success = true;
							this.downtime();
						});
						break;
					case 'reset':
						this.$post($API.reset, {
							password: this.pwd1,
							pToken: localStorage.pToken
						}).then(res => {
							this.loadEnd();
							this.success = true;
							this.downtime();
						});
						break;
				}
			}
		},

		// 倒计时
		downtime() {
			this.timer = setInterval(() => {
				this.second = this.second - 1;
				if (this.second <= 0) {
					clearInterval(this.timer);
					this.$router.replace({ path: '/login' });
				}
			}, 1000);
		}
	}
};
</script>

<style></style>
