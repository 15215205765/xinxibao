// pages/myPage/promotion/course/course.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		list: [], // 教程列表
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getData()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {
		this.videoContext = wx.createVideoContext('myVideo')
		console.log(this.videoContext)
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
	// 获取新手教程
	getData() {
		app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=article.list.getlist`, {
			cateid: 3
		}).then(res => {
			if (res.data.status === 1) {
				let data = res.data.result.list
				data.forEach(item => {
					item.videoCtx = wx.createVideoContext(`video${item.id}`)
					item.videoMask = true
				})
				this.setData({
					list: data
				})

				console.log(this.data.list)
				return false
			}
			console.log('获取教程失败', res)
		})
	},
	play(e) {
		console.log(e)
	},

	// 播放视频
	videoPlay(e) {
		let index = e.currentTarget.dataset.index
		console.log(index);
		let data = this.data.list
		data.forEach(item => {
			item.videoCtx.pause()
			item.videoMask = true
		})
		data[index].videoCtx.play()
		data[index].videoCtx.requestFullScreen({
			direction:0
		})
		data[index].videoMask = false
		this.setData({
			list:data
		})
	},

	// 视频播放结束
	overVideo(e) {
		console.log(e)
		let index = e.currentTarget.dataset.index
		let data = this.data.list
		data[index].videoMask = true
		data[index].videoMask.exitFullScreen()
		this.setData({
			list:data
		})
	}
})
