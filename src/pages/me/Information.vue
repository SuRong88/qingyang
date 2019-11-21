<template>
	<div class="me-information">
		<div class="title-box"><h2 class="title">个人信息</h2></div>
		<div class="info-box flex flex-center">
			<div class="upload-box">
				<input class="upload" type="file" accept="image/*" />
				<p class="upload-desc">编辑头像</p>
			</div>
			<h2 class="nickname">用户名字</h2>
			<ul class="contact-box flex flex-ver">
				<li>
					<span class="label">手机号</span>
					<input v-model="user.phone" class="info-input" type="text" />
				</li>
				<li>
					<span class="label">用户名</span>
					<input v-model="user.name" class="info-input" type="text" />
				</li>
			</ul>
			<span class="btn-save" @click="saveHandle">保存</span>
		</div>
		<div class="safety-box">
			<h2 class="sub-title">账号安全</h2>
			<ul class="flex flex-ver">
				<li class="safety-item flex flex-center"><img class="right-icon" src="../../assets/images/time.png" alt="" /></li>
				<li class="safety-item">登录密码</li>
				<li class="safety-item"></li>
				<li class="safety-item">
					建议您定期更改密码以保护账户安全。
					<router-link tag="span" to="/edit" class="link-edit">修改</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		console.log(this.$API)
		this.$emit('curentIndexChange', 'meInformation');
	},
	mounted() {},
	data() {
		return {
			user: {
				phone: '16464',
				name: '名字啊'
			}
		};
	},
	computed: {},
	watch: {},
	methods: {
		saveHandle() {
			if (this.nullTest(this.user.phone)) {
				return this.errorToast('手机号不能为空');
			}
			if (this.nullTest(this.user.name)) {
				return this.errorToast('用户名不能为空');
			}
			if (!this.phoneTest(this.user.phone)) {
				return this.errorToast('手机号格式有误');
			}
			// do sth
		}
	}
};
</script>

<style></style>
