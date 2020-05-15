const app = getApp()
Page({

	data: {

		// tab切换  
		currentTab: 0,
		level: 0, // 佣金收益所属层级
		page: 1, // 页码
		timeType: 2, // 收益月份 1:今日 2:本月 3 上月
		pageSize: 20, // 页面显示条数
		commission0: {
			pindex: 0,
			list: [],
			total_pages:0,
		}, // 自购佣金
		commission1: {
			pindex: 0,
			list: [],
			total_pages:0,
		}, // 一级佣金
		commission2: {
			pindex: 0,
			list: [],
			total_pages:0,
		}, // 二级佣金
		itemHeight: 100, // item盒子的高度
		getHeight: true, // 只查询一次bill-list-item 高度
		swiperHeight: 100, // swiper盒子高度 因为盒子高度撑不开 导致无法滑动 通过计算设置swiper盒子高度
		page: 1, // 常见问题页码
		totalPages: 0, // 常见问题总页码数
	},

	onLoad: function(options) {
		console.log(options)
		this.setData({
			timeType: options.timeType,
			currentTab: options.type
		})
		for (let i = 0; i < 3; i++) {
			this.getData(i)
		}
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
		let page = 0;
		let total = 0;
		switch (parseInt(this.data.currentTab)) {
			case 0:
				page = this.data.commission0.pindex
				total = this.data.commission0.total_pages
				break;
			case 1:
				page = this.data.commission1.pindex
				total = this.data.commission1.total_pages
				break;
			default:
				page = this.data.commission2.pindex
				total = this.data.commission2.total_pages
		}
		// 页面上拉触底事件的处理函数
		if (page >= page) {
			return false
		}
		this.getData(this.data.currentTab)
	},

	// tab 切换
	swichNav: function(e) {
		var that = this;
		wx.pageScrollTo({
			scrollTop: 0,
		})
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			that.setData({
				currentTab: e.target.dataset.current,
			})

			that.getItemHeight()

		}
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
		that.getItemHeight()
	},
	// 获取item 的高度
	getItemHeight() {
		let _self = this
		wx.pageScrollTo({
			scrollTop: 0,
		})
		wx.createSelectorQuery().selectAll('.item-s').boundingClientRect(function(rect) {
			_self.setData({
				swiperHeight: rect[_self.data.currentTab].height + 20,
			})
		}).exec()
	},
	// 获取我的订单数据
	getData(num) {
		let _self = this
		let page = 0;
		switch (parseInt(num)) {
			case 0:
				page = _self.data.commission0.pindex + 1
				break;
			case 1:
				page = _self.data.commission1.pindex + 1
				break;
			default:
				page = _self.data.commission2.pindex + 1
				break;
		}
		let data = {
			type: 2,
			time_type: this.data.timeType,
			level: num,
			page: page,
			pageSize: this.data.pageSize
		}
		app.http.get(
				`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.order.get_log_list`,
				data, true)
			.then(
				res => {
					console.log(res)
					if (res.data.status === 1) {
						let data = res.data.result.list
						data.forEach(item => {
							item.commission = item.commission.split('.')
						})
						switch (num) {
							case 0:
								_self.setData({
                  "commission0.list": _self.data.commission0.list.concat(data),
									"commission0.pindex": res.data.result.pindex,
									"commission0.total_pages": res.data.result.total_pages,
								})
								break;
							case 1:
								_self.setData({
                  "commission1.list": _self.data.commission1.list.concat(data),
									"commission1.pindex": res.data.result.pindex,
									"commission1.total_pages": res.data.result.total_pages,
								})
								break;
							default:
								_self.setData({
                  "commission2.list": _self.data.commission2.list.concat(data),
									"commission2.pindex": res.data.result.pindex,
									"commission2.total_pages": res.data.result.total_pages,
								})
						}
						_self.getItemHeight()
						return false
					}
					console.log('订单失败', res)
				})
	}
})
