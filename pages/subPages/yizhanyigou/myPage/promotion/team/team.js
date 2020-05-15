const app = getApp()
Page({

	data: {

		// tab切换  
		teamData: {}, // 我的团队数据
		teamData: {}, // 团队列表
		currentTab: 0,
		allList: [], // 全部订单
		agent1: {
			pindex: 0,
			totalPage: 0,
			list: []
		}, // 一级代理商
		agent2: {
			pindex: 0,
			totalPage: 0,
			list: []
		}, // 二级代理商
		agent3: {
			pindex: 0,
			totalPage: 0,
			list: []
		}, // 三级代理商
		swiperHeight: 100, // swiper
	},
	onLoad: function(options) {
		this.getData()
		for (let i = 1; i < 4; i++) {
			this.getDataList(i)
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

		// 页面上拉触底事件的处理函数
		let page = 0;
		let total = 0;
		let num = parseInt(this.data.currentTab)
		switch (num) {
			case 0:
				page = this.data.agent1.pindex
				total = this.data.agent1.totalPage
				break;
			case 1:
				page = this.data.agent2.pindex
				total = this.data.agent2.totalPage
				break;
			default:
				page = this.data.agent3.pindex
				total = this.data.agent3.totalPage
		}
		// 页面上拉触底事件的处理函数
		if (page >= page) {
			return false
		}
		this.getDataList(num)

	},
	copy(e) {
		let value = e.currentTarget.dataset.phone
		wx.setClipboardData({
			data: value,
			success: function(res) {
				wx.getClipboardData({
					success: function(res) {

					}
				})
			}
		})
	},
	// 跳转到下级团队
	jumpMember(e) {
		let ID = e.currentTarget.dataset.id
		let name = e.currentTarget.dataset.name
		wx.navigateTo({
			url: `./member/member?id=${ID}&name=${name}`
		})
	},
	// 获取我的团队数据
	getData() {
		let _self = this
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.down`, {}, true)
			.then(res => {
				if (res.data.status === 1) {
					_self.setData({
						teamData: res.data.result
					})
					console.log(_self.data.teamData)

					return false
				}
				console.log('我的团队失败', res)
			})
	},

	getDataList(num) {
		let _self = this
		let data = {

		}
		switch (num) {
			case 1:
				data = {
					level: 1,
					page: 1,
					pageSize: 20,
					type: 1
				}
				break;
			case 2:
				data = {
					level: 2,
					page: 1,
					pageSize: 20,
					type: 2
				}
				break;
			case 3:
				data = {
					type: 2,
					page: 1,
					pageSize: 20,
					type: 2
				}
				break;
		}
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.down.get_list`,
			data).then(res => {
			if (res.data.status === 1) {
				switch (num) {
					case 1:
						this.setData({
							"agent1.list": _self.data.agent1.list.concat(res.data.result.list),
							"agent1.pindex": res.data.result.pindex,
							"agent1.totalPage": res.data.result.total_pages,
						})
						break;
					case 2:
						this.setData({
							"agent2.list": _self.data.agent2.list.concat(res.data.result.list),
							"agent2.pindex": res.data.result.pindex,
							"agent2.totalPage": res.data.result.total_pages,
						})
						break;
					case 3:
						this.setData({
							"agent3.list": _self.data.agent3.list.concat(res.data.result.list),
							"agent3.pindex": res.data.result.pindex,
							"agent3.totalPage": res.data.result.total_pages,
						})
						break;
				}
				console.log(this.data.agent1)
				_self.getSwiperHeight()
				return false
			}
			console.log('团队列表失败', res)
		})
	},
	// 计算swiper高度
	getSwiperHeight() {
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

		console.log(e);

		var that = this;

		if (this.data.currentTab === e.currentTarget.dataset.current) {

			return false;

		} else {

			that.setData({
				currentTab: e.currentTarget.dataset.current,
			})
			that.getSwiperHeight()
		}

	},

	swiperChange: function(e) {

		console.log(e);

		this.setData({

			currentTab: e.detail.current,
		})
		this.getSwiperHeight()

	},
})
