<template>
	<div class="edit wrapper">
		<template v-if="!success">
			<h1 class="title">修改密码</h1>
			<input @keyup.enter="confirmHandle" placeholder="旧密码" type="password" class="input" v-model="pwd0" />
			<input @keyup.enter="confirmHandle" placeholder="新密码" type="password" class="input" v-model="pwd1" />
			<input @keyup.enter="confirmHandle" placeholder="再次输入新密码" type="password" class="input" v-model="pwd2" />
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
			second: 3,
			// 定时器
			timer: null
		};
	},
	computed: {},
	watch: {},
	methods: {
		// 确认修改
		confirmHandle() {
			if (this.nullTest(this.pwd0)) {
				this.errorToast('请输入旧密码');
			} else if (!this.passwordTest(this.pwd0)) {
				this.errorToast('密码必须为字母与数字组合且不少于6位');
			} else if (this.nullTest(this.pwd1)) {
				this.errorToast('请输入新密码');
			} else if (!this.passwordTest(this.pwd1)) {
				this.errorToast('密码必须为字母与数字组合且不少于6位');
			} else if (this.pwd1 !== this.pwd2) {
				this.errorToast('两次密码不一致');
			} else {
				this.$put($API.editPassword, {
					oldpwd: this.pwd0,
					password: this.pwd1
				})
					.then(res => {
						this.$store.commit('SET_MYINFO', {});
						this.success = true;
						this.downtime();
					})
					.catch(err => {
						this.errorToast(err.data.msg);
					});
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
	},
	destroyed() {
		clearInterval(this.timer);
	}
};
</script>

<style></style>
