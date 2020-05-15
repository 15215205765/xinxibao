// pages/myPage/gains/month/month.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		money: '200.60', // 收益总计
		type: 1, // 收益月份 1:今日 2:本月 3:上月(不传未全部)
		gainsDetails: {}, // 收益详情
		gainsExplan: '新增订单佣金同步需等5-10分钟，提现规则详见说明', // 简短说明收益情况文字
	},

	/** 
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let type = options.type

		let title = ""
		let content = ""
		switch (type) {
			case '1':
				title = '今日收益'
				content = "新增订单佣金同步需等5-10分钟，提现规则详见说明"
				break;
			case '2':
				title = '本月收益'
				content = "本月收益下下月25号后可以提现，详见说明"
				break;
			default:
				title = '上月收益'
				content = "上月收益再本月25号可以提现，详见说明"
		}
		wx.setNavigationBarTitle({
			title: title,
		})
		this.setData({
			type: type,
			money: options.money,
			gainsExplan: content
		})
		this.getGainsDetails()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	// 跳转到说明
	jumpExplain() {
		let aid = 0
			switch (this.data.type) {
				case '1':
					aid = 11
					break;
				case '2':
					aid = 12
					break;
				default:
					aid = 13

			}
		wx.navigateTo({
			url: `../explain/explain?aid=${aid}`
		})
	},
	// 调转到佣金收益明细
	jumpCommission(e) {
		let type = e.currentTarget.dataset.type
		if (!type) {
			type = 0
		}
		wx.navigateTo({
			url: `../commission/commission?type=${type}&timeType=${this.data.type}`
		})
	},
	// 跳转到总代收益
	jumpAgent(e) {
		let type = e.currentTarget.dataset.type
		if (!type) {
			type = 0
		}
		wx.navigateTo({
			url: `../agent/agent?type=${type}`
		})
	},
	// 跳转其他收益明细
	jumpBill() {
		wx.navigateTo({
			url: `../bill/bill?pageType=5&timeType=${this.data.type}`
		})
	},
	// 获取收益详情
	getGainsDetails() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.taobaoke.profit`, {
			type: _self.data.type
		}).then(res => {
			if (res.data.status === 1) {
				let data = res.data.result
				_self.setData({
					gainsDetails: res.data.result
				})
				return false
			}
			console.log('收益接口失败', res)
		})
	}
})
