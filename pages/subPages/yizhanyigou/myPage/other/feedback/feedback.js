// pages/myPage/other/feedback/feedback.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		phone: '', // 手机号
		content: '', // 反馈信息
		full: false,
		imagesNumber: 3, // 上传图片数量
		pictureList: [], // 上传图片列表
		imagesUrlList: [], // 图片上传到数据库列表
		currentType:0,
		typeList:[
			{name:'订单与支付',index:0},
			{name:'功能与意见',index:1},
			{name:'优惠券',index:2},
			{name:'佣金与收益',index:3},
			{name:'商品与购买',index:4},
			{name:'其他',index:5},
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
	// 选择问题反馈类型
	changeType(e){
			let index = e.currentTarget.dataset.index
			this.setData({
				currentType:index
			})
	
	},
	// 选择照片
	chooseImage() {
		let _self = this
		wx.chooseImage({
			count: _self.data.imagesNumber,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				let data = _self.data.pictureList
				data = data.concat(res.tempFilePaths)
				_self.setData({
					pictureList: data,
					imagesNumber: 3 - data.length
				})
				if (_self.data.imagesNumber === 0) {
					_self.setData({
						full: true
					})
				}
			}
		})
	},

	// 手机号
	changePhone(e) {
		let value = e.detail.value
		this.setData({
			phone: value
		})
	},

	// 信息内容
	changeContent(e) {
		let value = e.detail.value
		this.setData({
			content: value
		})
	},
	// 提价反馈
	postFeedback() {
		let _self = this
		// if (this.data.phone === '') {
		// 	wx.showToast({
		// 		title: '请输入手机号',
		// 		icon: 'none'
		// 	})
		// 	return false
		// }
// 		if (!(/^1[34578]\d{9}$/.test(this.data.phone))) {
// 			wx.showToast({
// 
// 				title: '手机号码有误',
// 
// 				duration: 2000,
// 
// 				icon: 'none'
// 
// 			});
// 			return false
// 		}
		if (this.data.content === '') {
			wx.showToast({
				title: '请输入反馈信息',
				icon: 'none'
			})
			return false
		}
		wx.showLoading({
			title: '提交中...',
		})

		if (this.data.pictureList[0]) {
			this.confirmUpload()
			return false
		}
		_self.postFeedbackData()
	},
	
	// 上传图片函数
	uploadImages(data) {
		return new Promise((resolve, reject) => {
			wx.uploadFile({
				url: `${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=util.uploader`,
				filePath: data,
				name: 'file',
				header: {
					'Cookie': wx.getStorageSync('cookieLogin'),
					'yzyg': 'wxxcx',
					"Content-Type": "multipart/form-data"
				},
				success: res => {
					resolve(res)
				},
				fail: res => {
					reject(res)
				}
			})
		})
	},

	// 确认上传图片
	confirmUpload() {
		let _self = this
		let imagesURl = []
		const data = _self.data.pictureList.map(item => {
			return _self.uploadImages(item)
		})
		Promise.all(data).then(res => {
			console.log(res)
			let data = []
			res.forEach(item => {
				data = data.concat(JSON.parse(item.data))
			})
			data.forEach(item => {
				imagesURl = imagesURl.concat(item.result.url)
				_self.setData({
					imagesUrlList:imagesURl
				})
			})
			_self.postFeedbackData()
		})
	},

	// 提交反馈数据
	postFeedbackData() {
		let _self = this
		app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.feedback.submit`, {
			content: _self.data.content,
			"images[0]":_self.data.imagesUrlList[0],
			"images[1]":_self.data.imagesUrlList[1],
			"images[2]":_self.data.imagesUrlList[2],
			mobile: _self.data.phone,
		}).then(res => {
			images: _self.data.imagesUrlList,
			wx.hideLoading()
			if (res.data.status === 1) {
				// _self.setData({
				// 	phone: '',
				// 	content: ''
				// })
				// setTimeout(function() {
				// 	wx.navigateBack({
				// 		delta: 1
				// 	})
				// }, 1500)
			}
			wx.showToast({
				title: res.data.result.message,
				icon: 'none'
			})
		})
	}
})
