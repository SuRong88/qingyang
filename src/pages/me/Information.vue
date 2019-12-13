<template>
    <div class="me-information">
        <div class="title-box"><h2 class="title">个人信息</h2></div>
        <div class="info-box flex flex-center">
            <div class="upload-box" :style="'background-image:url(' + userInfo.headimgurl + ')'">
                <input @change="uploadAvatar" class="upload" type="file" accept="image/*" />
                <p class="upload-desc">编辑头像</p>
            </div>
            <h2 class="nickname">{{ userInfo.nickname }}</h2>
            <ul class="contact-box flex flex-ver">
                <li>
                    <span class="label">手机号</span>
                    <input readonly :value="userInfo.mobile" class="info-input" type="text" />
                </li>
                <li>
                    <span class="label">用户名</span>
                    <input v-model="userInfo.nickname" class="info-input" type="text" />
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
import lrz from 'lrz';
export default {
    created() {
        this.$emit('curentIndexChange', 'meInformation');
        this.getUserInfo();
    },
    mounted() {},
    data() {
        return {
            editAvatar: false,
            userInfo: {
                nickname: '',
                mobile: '',
                headimgurl: require('@/assets/images/avatar.png'),
                openid: ''
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 上传头像
        uploadAvatar(e) {
            this.editAvatar = true;
            const file = e.target.files || e.dataTransfer.files;
            let target = file[0];
            lrz(target, {
                // width: 87
            })
                .then(rst => {
                    this.userInfo.headimgurl = rst.base64;
                })
                .catch(err => {
                    this.errorToast('转码失败 请重试');
                });
        },

        // 获取用户信息
        getUserInfo() {
            this.$get($API.getMyInfo).then(res => {
                this.userInfo = res.data;
                !this.userInfo.headimgurl && (this.userInfo.headimgurl = require('@/assets/images/avatar.png'));
            });
        },
        // 头像
        saveAvatar() {
            return this.$post($API.editAvatar, {
                name: Date.parse(new Date()),
                base64: this.userInfo.headimgurl
            });
        },
        // 昵称
        saveNickName() {
            return this.$put($API.editNickname, {
                nickname: this.userInfo.nickname
            });
        },
        //保存修改信息
        saveHandle() {
            if (this.nullTest(this.userInfo.nickname)) {
                return this.errorToast('用户名不能为空');
            }
            if (this.editAvatar) {
                this.axiosAll([this.saveAvatar(), this.saveNickName()])
                    .then(ress => {
                        this.editAvatar = false;
                        this.successToast('保存成功！');
                        // 当前页用户信息
                        this.getUserInfo();
                        // vuex用户信息
                        this.getMyInfo();
                    })
                    .catch(() => {
                        this.editAvatar = false;
                        this.errorToast('保存失败！');
                    });
            } else {
                this.axiosAll([this.saveNickName()])
                    .then(ress => {
                        this.successToast('保存成功！');
                        // 当前页用户信息
                        this.getUserInfo();
                        // vuex用户信息
                        this.getMyInfo();
                    })
                    .catch(() => {
                        this.errorToast('保存失败！');
                    });
            }
        }
    }
};
</script>

<style></style>
