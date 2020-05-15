// pages/myPage/gains/month/month.js
const app = getApp()
Page({

	/** 
	 * 页面的初始数据
	 */
	data: {
		money:'', // 收益总计
		gainsDetails: {}, // 收益详情
		currentTab: 0,
		other: [], // 其他收益
		commission: [], // 佣金收益
		agent: [], // 总代收益
		bonus_total: '', // 总代累计金额
		ljsum: '', // 佣金累计金额
		record_total: '', // 其他累计金额
		itemHeight: 100,
		swiperHeight: 600,
		headerHeight: 300,
	},

	/** 
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let self = this
    wx.createSelectorQuery().select('.header-box').boundingClientRect(function (rect) {
      console.log(rect)
      let num = rect.height
      self.setData({
        headerHeight: num 
      })
    }).exec()
		console.log(options)
		
		this.setData({
			money:options.money.split('.'),
			bonus_total: options.bonus_total.split('.'), // 总代累计
			ljsum: options.ljsum.split('.'), //  佣金累计
			record_total: options.record_total.split('.'), // 其他累计
		})
		this.getOther() // 收益
		this.getCommission() // 佣金收益
		this.getAgent() // 总代收益
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


	// 计算swiper高度
	getSwiperHeight() {
    let _self = this
    wx.pageScrollTo({
      scrollTop: 0,
    })
    wx.createSelectorQuery().selectAll('.item-s').boundingClientRect(function (rect) {
      _self.setData({
        swiperHeight: rect[_self.data.currentTab].height + 20,
      })
    }).exec()
	},
	// 跳转到账单
	jumpBill(e) {
		let event = e.currentTarget.dataset
		let pageType = event.type
		let atime = event.atime
		let etime = event.etime
		wx.navigateTo({
			url: `../bill/bill?pageType=${pageType}&atime=${atime}&etime=${etime}`
		})
	},
	// 获取其他累计收益
	getOther() {
		let _self = this
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.record_list`
		).then(res => {
			if (res.data.status === 1) {
				let data = res.data.result
				data.list.forEach(item => {
					for (let i in item) {
						if (i.indexOf('s') !== -1) {
							item[i] = item[i].split('.')
						}
					}
				})
				_self.setData({
					other: data
				})
				if (data.list[0]) {
					_self.getSwiperHeight()
				}
				return false
			}
			console.log('获取其他累计收益', res)
		})
	},
	// 获取佣金累计收益
	getCommission() {
		let _self = this
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.taobaoke.tborder_sum_list`).then(
			res => {
				if (res.data.status === 1) {
					let data = res.data.result
					data.list.forEach(item => {
						for (let i in item) {
							if (i.indexOf('s') !== -1) {
								item[i] = item[i].split('.')
							}
						}
					})
					_self.setData({
						commission: data
					})
					
						_self.getSwiperHeight()
					
					return false
				}
				console.log('获取佣金累计收益', res)
			})
	},
	// 获取总代累计收益
	getAgent() {
		let _self = this
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=abonus.bonus.order_sum_list`).then(
			res => {
				if (res.data.status === 1) {
					let data = res.data.result
					data.list.forEach(item => {
						for (let i in item) {
							if (i.indexOf('s') !== -1) {
								item[i] = item[i].split('.')
							}
						}
					})
					_self.setData({
						agent: data
					})
		
						_self.getSwiperHeight()
					
					return false
				}
				console.log('获取总代累计收益', res)
			})
	},
	swichNav: function(e) {
		var that = this;
		wx.pageScrollTo({
			scrollTop: 0,
		})
		if (this.data.currentTab === e.currentTarget.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.currentTarget.dataset.current,
			})
		}
		this.setData({
			currentTab: e.currentTarget.dataset.current,
		})
		
			this.getSwiperHeight()
		

	},
	// 滑档切换
	swiperChange: function(e) {
		var that = this;
		wx.pageScrollTo({
			scrollTop: 0,
		})
		this.setData({
			currentTab: e.detail.current,
		})
		
			this.getSwiperHeight()
		
	},
})
