<template>
	<div class="hotels-reservation reservation wrapper">
		<div class="l">
			<div class="box box1 border8">
				<div class="title-box">
					<h2 class="title">长隆横琴湾酒店(珠海海洋王国店)</h2>
					<p class="num">
						<span class="label">产品编号:</span>
						1234
					</p>
				</div>
				<ul class="info-wrapper">
					<li class="flex flex-ver">
						<span class="label">预定房型:</span>
						大床房
					</li>
					<li class="flex flex-ver"><span class="label">预定方式:</span></li>
					<li class="flex flex-ver">
						<span class="label">入离日期:</span>
						<p class="flex flex-ver">
							<span class="mini-box date2">
								2019-10-21
								<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
							</span>
							<span class="spe"></span>
							<span class="mini-box date2">
								2019-10-21
								<img class="calendar-icon" src="../assets/images/calendar.png" alt="" />
							</span>
							<span class="count">共1晚</span>
						</p>
					</li>
					<li class="flex flex-ver">
						<span class="label">购买数量:</span>
						<span class="mini-box">
							<img class="icon icon1" src="../assets/images/value_icon01.png" alt="" />
							<input class="buy-num flex-1" type="text" />
							<img class="icon icon2" src="../assets/images/value_icon02.png" alt="" />
						</span>
					</li>
					<li class="flex">
						<span class="label"></span>
						<div class="price-info">
							<span class="date">2019/10/21(一)</span>
							<div class="bd">
								<span class="price">￥1300</span>
								<span class="desc">双早</span>
							</div>
						</div>
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
							<span class="warning-txt">
								手机号码输入有误
							</span>
						</p>
					</li>
					<li class="flex flex-ver">
						<span class="label must">验证码:</span>
						<input class="input01" type="text" />
						<span class="get-code">获取验证码</span>
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
						<span class="tourist">
							游客1
						</span>
						<li class="flex">
							<span class="label must mt6">旅客姓名:</span>
							<p class="warning-input">
								<input style="margin-right: 22px;" class="input01 " type="text" />
								<span class="warning-txt">
									...输入有误
								</span>
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
								<span class="warning-txt">
									手机号码输入有误
								</span>
							</p>
						</li>
						<li class="flex">
							<span class="label must mt6">证件类型:</span>
							<p class="type-select-box" >
								<select style="margin-right: 22px;" class="type-select" name="" id="">
									<option value="">身份证1</option>
									<option value="">身份证2</option>
									<option value="">身份证3</option>
								</select>
							</p>
							<span class="label must mt6">证件号码:</span>
							<p class="warning-input">
								<input class="input01 " type="text" />
								<span class="warning-txt">
									...输入有误
								</span>
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
			touristLists:[
				{
					gender:''
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
