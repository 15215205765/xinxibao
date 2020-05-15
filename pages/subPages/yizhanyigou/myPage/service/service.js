const app = getApp()
Page({

	data: {
		currentTab: 0, //tab 切换
		questionList: [], // 常见问题列表
		customerPhone: '', // 手机号
		customerWeChat: '', // 复制微信号
		swiperHeight: 100, // swiper高度
		page: 1, // 常见问题页码
		totalPages: 0, // 常见问题总页码数
	},

	swichNav: function(e) {
		var that = this;
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current,
			})
			this.getSwiperHeight()
		}
	},

	swiperChange: function(e) {
		this.setData({
			currentTab: e.detail.current,
		})
		this.getSwiperHeight()
	},

	onLoad: function(options) {

		this.getQuestion()

	},

	onReady: function() {

		// 生命周期函数--监听页面初次渲染完成

	},

	onShow: function() {

		// 生命周期函数--监听页面显示

	},

	onHide: function() {

		// 生命周期函数--监听页面隐藏

	},

	onUnload: function() {

		// 生命周期函数--监听页面卸载

	},

	onPullDownRefresh: function() {

		// 页面相关事件处理函数--监听用户下拉动作

	},

	onReachBottom: function() {

		// 页面上拉触底事件的处理函数
		if (this.data.page >= this.data.totalPages) {
			return false
		}
		this.setData({
			page: this.data.page + 1
		})
		this.getQuestion()
	},

	getSwiperHeight() {
		let _self = this
		wx.createSelectorQuery().selectAll('.item-s').boundingClientRect(function(rect) {
			_self.setData({
				swiperHeight: rect[_self.data.currentTab].height,
			})
		}).exec()
	},
	// 复制客服联系方式
	customerCopy(e) {
		console.log(e)
		let text = ''
		let data = e.currentTarget.dataset.type
		switch (data) {
			case '1':
				break;
			default:
				data = this.data.customerPhone
		}
		wx.setClipboardData({
			data: data,
			success(res) {
				wx.getClipboardData({
					success(res) {
						console.log(res.data) // data
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		})
	},
	// 跳转解决方案
	jumpSolution(e) {
		let ID = e.currentTarget.dataset.id
		console.log(ID)
		wx.navigateTo({
			url: `./solution/solution?articleID=${ID}`
		})
	},

	// 获取常见问题

	getQuestion() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=article.list.getlist`, {
			aid: 8,
			page: _self.data.page
		}).then(res => {
			if (res.data.status === 1) {
				_self.setData({
					questionList: _self.data.questionList.concat(res.data.result.list),
					customerPhone: res.data.result._W.shopset.shop.phone,
					customerWeChat: res.data.result._W.shopset.shop.wxservice,
					page: res.data.result.pindex,
					totalPages: res.data.result.total_pages
				})
				_self.getSwiperHeight()
				return false
			}
			console.log('常见问题', res)
		})
	}
})
