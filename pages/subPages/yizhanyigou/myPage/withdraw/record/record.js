const app = getApp()
Page({

	data: {

		// tab切换  
		currentTab: 0,
		pageNumber: 0,
		loading:false,
		recordList: [], // 提现记录列表
		type: 1, // 1 其他 2 佣金 3 总代
		swiperHeight: 100, // swiper盒子高度 因为盒子高度撑不开 导致无法滑动 通过计算设置swiper盒子高度
	},

	swichNav: function(e) {
		let index = parseInt(e.target.dataset.current)
		if (this.data.currentTab === index) {
			return false;
		}
		this.setData({
			type: index,
			recordList:[],
		})
		this.getRecord()
	},

	onLoad: function(options) {
		this.setData({
			type:parseInt(options.type)
		})
		this.getRecord()
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
	},

	// 获取记录
	getRecord() {
		let _self = this
		let url = ''
		let data = {
			page: this.data.pageNumber,
			// status: this.data.type
		}
		wx.showLoading({
			title:'加载中...'
		})
		this.setData({
			loading:true
		})
		switch (_self.data.type) {
			case 2:
				url = `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.log.get_list_tb`
				break;
			case 1:
				url = `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.log.get_list`
				break;
			default:
				url = `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=abonus.log.get_list`
		}
		app.http.get(url, data).then(res => {
			wx.hideLoading()
			this.setData({
				loading:false
			})
			if (res.data.status === 1) {
				let data = res.data.result
				console.log(data)
				_self.setData({
					recordList: data.list
				})
				return false
			}
			// console.log(`提现记录${num}`, res)
		})
	}
})
