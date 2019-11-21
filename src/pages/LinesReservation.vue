<template>
	<div class="lines-reservation reservation wrapper">
		<div class="l">
			<div class="box box1 border8">
				<div class="title-box">
					<h2 class="title">可自选双人或3人套餐玩遍海洋王国，看马戏，入住期间享横琴湾水世界一次入园</h2>
					<p class="num">
						<span class="label">产品编号:</span>
						1234
					</p>
				</div>
				<ul class="info-wrapper">
					<li class="flex flex-ver">
						<span class="label">预定套餐:</span>
						2天海洋王国游玩
					</li>
					<li class="flex flex-ver">
						<span class="label">预定方式:</span>
						全额预订
					</li>

					<li class="flex flex-ver">
						<span class="label">出发日期:</span>
						<span class="mini-box date2">
							2019-10-21
							<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
						</span>
					</li>
					<li class="flex"><span class="label">价格明细</span></li>
					<li>
						<ol class="form-hd flex">
							<li class="flex-1">人群/补差</li>
							<li class="flex-1">单价</li>
							<li class="flex-1">购买数量</li>
							<li class="flex-1">小计</li>
						</ol>
						<ol class="form-bd flex">
							<li class="flex flex-1 flex-center flex-ver">
								老人
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="price">300</span>
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="mini-box">
									<img class="icon icon1" src="../assets/images/value_icon01.png" alt="" />
									<input class="buy-num flex-1" type="text" />
									<img class="icon icon2" src="../assets/images/value_icon02.png" alt="" />
								</span>
							</li>
							<li class="flex flex-1 flex-center flex-ver">
								<span class="price">300</span>
							</li>
						</ol>
					</li>
				</ul>
			</div>
			<div class="box box2 border8">
				<h2 class="sub-title">联系人信息</h2>
				<ul class="info-wrapper">
					<li class="flex flex-ver">
						<span class="label must">姓名:</span>
						<input class="input01" type="text" />
					</li>
					<li class="flex">
						<span class="label must mt6">手机号码:</span>
						<p class="warning-input">
							<input class="input01 " type="text" />
							<span class="warning-txt">手机号码输入有误</span>
						</p>
					</li>
					<li class="flex flex-ver">
						<span class="label must">验证码:</span>
						<input class="input01" type="text" />
					</li>
					<li class="flex flex-ver">
						<span class="label">邮箱:</span>
						<input class="input01" type="text" />
					</li>
					<li class="flex">
						<span class="label mt10">预订备注:</span>
						<textarea class="input01 input02" type="text"></textarea>
					</li>
				</ul>
			</div>
			<div class="box box3 border8">
				<h2 class="sub-title">旅客信息</h2>
				<div class="info-wrapper">
					<ul class="tourist-item">
						<span class="tourist">游客1</span>
						<li class="flex">
							<span class="label must mt6">旅客姓名:</span>
							<p class="warning-input">
								<input style="margin-right: 22px;" class="input01 " type="text" />
								<span class="warning-txt">...输入有误</span>
							</p>
							<span class="label must mt6">旅客性别:</span>
							<p class="gender flex">
								<span class="gender-item ">男</span>
								<span class="gender-item is-select">女</span>
							</p>
						</li>
						<li class="flex">
							<span class="label must mt6">手机号码:</span>
							<p class="warning-input">
								<input class="input01 " type="text" />
								<span class="warning-txt">手机号码输入有误</span>
							</p>
						</li>
						<li class="flex">
							<span class="label must mt6">证件类型:</span>
							<p class="type-select-box">
								<select style="margin-right: 22px;" class="type-select" name="" id="">
									<option value="">身份证1</option>
									<option value="">身份证2</option>
									<option value="">身份证3</option>
								</select>
							</p>
							<span class="label must mt6">证件号码:</span>
							<p class="warning-input">
								<input class="input01 " type="text" />
								<span class="warning-txt">...输入有误</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<button class="btn-commit">提交订单(￥2300)</button>
		</div>
		<div class="r border8">
			<h2 class="r-title">结算信息</h2>
			<ul class="detail-ul">
				<li>
					<span class="label">预订方式</span>
					<span>全款</span>
				</li>
				<li>
					<span class="label">预定日期</span>
					<span>2019-10-21</span>
				</li>
				<li>
					<span class="label">试用日期</span>
					<span>2019-10-21</span>
				</li>
				<li>
					<span class="label">景点名称</span>
					<span>珠海长隆酒店</span>
				</li>
				<li>
					<span class="label">门票类型</span>
					<span>海洋王国-成人票(一天票)</span>
				</li>
			</ul>
			<p class="price-box">
				<span>应付总额</span>
				<span class="price">300</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	created() {},
	mounted() {},
	data() {
		return {
			touristLists: [
				{
					gender: ''
				}
			]
		};
	},
	computed: {},
	watch: {},
	methods: {}
};
</script>

<style></style>
