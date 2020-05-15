// pages/search/serach.js.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		url: 'www.baidu.com', // 查看教程链接
		hotSearchList: [], // 热门搜搜
		searchContent: '' // 搜索内容
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getHotsearch() // 获取热门搜搜
		this.getUrl() // 获取查看教程链接
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
	// 获取热门搜索
	getHotsearch() {
		wx.request({
			url: 'http://haodanku.shuyu.cqyanyu.com.cn/hot_key/apikey/quweihuimall',
			method: 'GET',
			data: {},
			success: (res) => {
				if (res.data.msg = 'SUCCESS') {
					for (let i = 0; i <= 9; i++) {
						this.setData({
							hotSearchList: this.data.hotSearchList.concat(res.data.data[i])
						})
					}
				} else {
					console.log(res)
				}
			}
		})
	},
	// 获取查看教程链接
	getUrl() {
		wx.request({
			url: 'http://yzyg.dev.cqyanyu.com.cn/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=article&aid=9',
			method: 'GET',
			data: {},
			success: (res) => {
				if (res.data.msg = 'SUCCESS') {
					this.setData({
						url: res.data.result.article.article_linkurl
					})
					console.log(this.data.url);
				}
			}
		})
	},
	// 跳转查看教程
	jumpCourse() {
		wx.navigateTo({
			url: `../course/course?url=${this.data.url}`
		})
	},
	// 跳转搜索详情页面
	jumpSearchDetails(event) {
		let tagName = event.currentTarget.dataset.name
		if(tagName){
			this.setData({
				searchContent:tagName
			})
		}
		if (this.data.searchContent === '') {
			wx.showToast({
				title: '请输入搜索内容',
				icon: 'none',
				duration: 2000
			})
			return false
		}
		wx.navigateTo({
			url: `../searchDetails/searchDetails?shopName=${this.data.searchContent}`
		})
		console.log(this.data.searchContent);
	},
	// 获取输入框内容
	getValue(e) {
		this.setData({
			searchContent: e.detail.value
		})
	}
})
