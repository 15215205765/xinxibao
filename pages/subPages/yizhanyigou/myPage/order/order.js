const app = getApp()
Page({

	data: {
		currentTab: 0, // tab切换  
		allList: [], // 全部订单
		invalidList: [], // 失效订单
		paymentList: [], // 已付款订单
		statementList: [], // 已结算订单
		money: 0, // 已为你节省多少元
		headerHidden: false,
		data: {},
		number: '', // 订单号
		page: 1, // 页码
		information: {}, // 个人信息
		totalPages: 0, // 总页码数
		swiperHeight: 100, // swiper盒子高度 因为盒子高度撑不开 导致无法滑动 通过计算设置swiper盒子高度
	},
	
	onLoad: function(options) {
		console.log(options)
		this.setData({
			currentTab: options.type,
			information: wx.getStorageSync('personal').member_info
		})
		let data = wx.getStorageSync('personal').save_sum
		if (data === "0.00") {
			this.setData({
				headerHidden: false
			})
		} else {
			this.setData({
				headerHidden: true,
				money: data
			})
		}
		
		this.getData()
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
		if (this.data.page >= this.data.totalPages) {
			return false
		}
		this.setData({
			page: this.data.page + 1
		})
		this.getData()
		// 页面上拉触底事件的处理函数
	},
	hiddenHeader() {
		this.setData({
			headerHidden: false
		})
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
	swichNav: function(e) {
		var that = this;
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		}
		this.setData({
			currentTab: e.target.dataset.current,
		})
		this.getItemHeight()
	},

	swiperChange: function(e) {
		this.setData({
			currentTab: e.detail.current,
		})
		this.getItemHeight()
	},

	// 处理图片加载失败设置默认图片
	errImg(e) {
		let type = e.currentTarget.dataset.type
		let index = e.currentTarget.dataset.index
		switch (type) {
			case '0':
			this.allList[index].picurl = '/images/faill.jpg'
				break;
			case '1':
			this.paymentList[index].picurl = '/images/faill.jpg'
				break;
			case '2':
			this.statementList[index].picurl = '/images/faill.jpg'
				break;
			default:
			this.invalidList[index].picurl = '/images/faill.jpg'
				break;
		}
	},
	// 获取我的订单数据
	getData() {
		let _self = this
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.taobaoke.tborderlist`, {
				page: _self.data.page
			}, '加载中...').then(res => {
			if (res.data.status === 1) {
				_self.setData({
					allList: res.data.result.list,
					page: res.data.result.pindex,
					data: res.data.result,
					totalPages: res.data.result.total_pages
				})
				_self.getItemHeight()
				if (_self.data.allList) {
					_self.data.allList.forEach(item => {
						switch (item.orderzt) {
							case '订单失效':
								_self.setData({
									invalidList: _self.data.invalidList.concat(item)
								})
								break;
							case '订单付款':
								_self.setData({
									paymentList: _self.data.paymentList.concat(item)
								})
								break;
							case '订单结算':
								_self.setData({
									statementList: _self.data.statementList.concat(item)
								})
								break;
						}
					})

				}
				console.log(_self.data.paymentList)
				return false
			}
			console.log('订单失败', res)
		})
	},
	change(e) {
		let value = e.detail.value
		this.setData({
			number: value
		})
	},

	// 找回订单
	query() {
		console.log('jjj')
		if (this.data.number === '') {
			wx.showToast({
				title: '请输入订单编号',
				icon: 'none'
			})
			return false
		}
		app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.bind.back_tkorder`, {
			tk_number: this.data.number,
		}, '查询中...').then(res => {
			if (res.data.status === 1) {}
			wx.showToast({
				title: res.data.result.message,
				icon: 'none'
			})
		})
	},
	copyNumber(e) {
		wx.setClipboardData({
			data: e.currentTarget.dataset.text,
			success: function(res) {
				wx.getClipboardData({
					success: function(res) {
						wx.showToast({
							title: '复制成功'
						})
					}
				})
			}
		})
	}
})
