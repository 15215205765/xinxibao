// pages/myPage/gains/bill/bill.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		pageType: '', // 页面类型
		page:1, // 页码
		totalPages:0, // 总页码数
		billList: [], // 账单数据
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		console.log(options)
		let pageType = options.pageType
		let pageTitle = '' // 页面标题
		switch (pageType) {
			case '1':
				pageTitle = '明细'
				break;
			case '4':
				pageTitle = '下级总代收益'
				break;
			case '3':
				pageTitle = '区域佣金收益'
				break;
			default:
				pageTitle = '其他收益'
		}
		wx.setNavigationBarTitle({
			title: pageTitle,
		})
		if (options.etime) {
			this.setData({
				etime: options.etime,
				atime: options.atime
			})
		}
		if (options.timeType) {
			this.setData({
				timeType: options.timeType,
			})
		}
		this.setData({
			pageType: options.pageType,
		})
		this.getBill()
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
		if (this.data.page >= this.data.totalPages) {
			return false
		}
		this.setData({
			page: this.data.page + 1
		})
		this.getBill()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	// 获取账单数据
	getBill() {
		// 累计明细不传
		// type3 group1 level1 atime atime 下级总代
		// order_type2 type3 type3 // 区域总代
		// type4 // 其他累计
		let _self = this
		let data = {}
		switch (_self.data.pageType) {
			case '1':
				data = {

				}
				break;
			case '2':
				data = {
					type: 4,
					etime: this.data.etime,
					atime: this.data.atime
				}
				break;
			case '3':
				data = {
					order_type: 2,
					type: 3,
					etime: this.data.etime,
					atime: this.data.atime
				}
				break;
			case '5':
				data = {
					type: 4,
					time_type: this.data.timeType
				}
				break;
			default:
				data = {
					type: 3,
					level: 1,
					group: 1,
					etime: this.data.etime,
					atime: this.data.atime
				}
		}
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.order.get_log_list`, data,
			true
		).then(res => {
			if (res.data.status === 1) {
				let data = res.data.result
				data.list.forEach(item => {
					item.commission = item.commission.split('.')
				})
				_self.setData({
					billList:_self.data.billList.concat(res.data.result.list),
					page: res.data.result.pindex,
					totalPages: res.data.result.total_pages
				})
				return false
			}
			console.log('佣金收益明细', res)
		})
	}
})
