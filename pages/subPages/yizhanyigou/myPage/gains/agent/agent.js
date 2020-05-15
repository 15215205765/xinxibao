const app = getApp()
Page({

	data: {

		// tab切换  
		currentTab: 0,
		pageSize: 20, // 页面显示条数
		region: {
			pindex: 0,
			list:[],
			totalPage:0
		}, // 区域佣金收益
		subordinate: {
			pindex: 0,
			list:[],
			totalPage:0
		}, // 下级总代收益
		swiperHeight: 100, // swiper盒子高度 因为盒子高度撑不开 导致无法滑动 通过计算设置swiper盒子高度
	},

	onLoad: function(options) {
		this.setData({
			currentTab: options.type
		})
		this.getRegion() // 区域佣金收益
		this.getsubordinate() // 总代收益
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
		let page = 0
		let total = 0
		if (parseInt(this.data.currentTab) === 0) {
			page = this.data.region.pindex
			total = this.data.region.totalPage
		} else {
			page = this.data.subordinate.pindex
			total = this.data.subordinate.totalPage
		}
		if (page >= total) {
			return false
		}
		if (parseInt(this.data.currentTab) === 0) {
			this.getRegion()
		}else{
			this.getsubordinate()
		}
		this.getBill()
		// 页面上拉触底事件的处理函数
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
	// 获取区域佣金
	getRegion() {
		let _self = this
		let data = {
			time_type: 3,
			level: 0,
			type: 3,
			order_type: 2,
			page: _self.data.region.pindex + 1,
			pageSize: 20,
		}
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.order.get_log_list`,
			data, true).then(res => {
				console.log(res)
			let data = res.data.result.list
			data.forEach(item => {
				item.commission = item.commission.split('.')
			})
			_self.setData({
				"region.list": _self.data.region.list.concat(data),
				"region.pindex": res.data.result.pindex,
				"region.totalPage": res.data.result.total_pages,
			})
				_self.getItemHeight()
		})
	},
	// 获取下级佣金
	getsubordinate() {
		let _self = this
		let data = {
			time_type: 3,
			level: 1,
			type: 3,
			page: _self.data.subordinate.pindex + 1,
			group: 1,
			pageSize: 20,
		}
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.order.get_log_list`,
			data, true).then(res => {
			let data = res.data.result.list
			data.forEach(item => {
				item.commission = item.commission.split('.')
			})
			_self.setData({
				"subordinate.list": _self.data.subordinate.list.concat(data),
				"subordinate.pindex": res.data.result.pindex,
				"subordinate.totalPage": res.data.result.total_pages,
			})
			_self.getItemHeight()
		})
	}
})
