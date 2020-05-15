// pages/myPage/other/collection/collection.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		collection: [], // 收藏列表
		removeSwitch: false, // 删除状态
		selectionNumber: 0, // 选中数量
		selectAll: false, // 全选状态
		page:1, // 常见问题页码
		totalPages:0, // 常见问题总页码数
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getCollection()

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
		this.getCollection()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
	// 删除商品
	removeGoods() {
		let _self = this
		console.log('remove')
		let goodsIDList = []
		this.data.collection.forEach(item => {
			if (item.removeSwitch) {
				goodsIDList.push(item.id)
			}
		})
		if(goodsIDList.length===0){
			wx.showToast({
				title:'请选中删除的商品',
				icon:'none'
			})
		return false
		}
		app.http.get(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.removecollection`, {
				ids: goodsIDList
			}).then(res => {
				if(res.data.status===1){
					_self.setData({
						collection:[]
					})
					_self.getCollection()
					return false
				}
				console.log('删除商品失败',res)
		})
		if (this.data.selectionNumber === goodsIDList.length) {
			this.setData({
				removeSwitch: false
			})
		}
	},
	// 完成
	overRemove() {
		let data = this.data.collection
		data.forEach(item=>{
			item.removeSwitch = false
		})
		this.setData({
			removeSwitch: false
		})
	},
	// 删除商品选择状态
	changeRemove(e) {
	console.log('1')
		let index = e.currentTarget.dataset.index
		let data = this.data.collection
		data[index].removeSwitch = !data[index].removeSwitch
		if (!data[index].removeSwitch) {
			this.setData({
				selectAll: false,
				selectionNumber: this.data.selectionNumber - 1
			})
		} else {
			this.setData({
				selectionNumber: this.data.selectionNumber + 1
			})
		}
		if (this.data.selectionNumber === data.length) {
			this.setData({
				selectAll: !this.data.selectAll
			})
		}
		this.setData({
			collection: data
		})
	},
	// 全选
	selectAll() {
		let data = this.data.collection
		let number = data.length

		this.setData({
			selectAll: !this.data.selectAll
		})

		data.forEach(item => {
			if (this.data.selectAll) {
				item.removeSwitch = true
			} else {
				item.removeSwitch = false
			}
		})
		this.setData({
			collection: data
		})
		if (!this.data.selectAll && this.data.selectionNumber === 4) {
			this.setData({
				selectionNumber: 0
			})
		}
		if (this.data.selectAll) {
			console.log(number)
			this.setData({
				selectionNumber: number
			})
		}

	},
	// 触摸事件开始
	handleTouchStart: function(e) {
		this.startTime = e.timeStamp;
		//console.log(" startTime = " + e.timeStamp);  
	},

	// 触摸事件结束
	handleTouchEnd: function(e) {
		this.endTime = e.timeStamp;
		//console.log(" endTime = " + e.timeStamp);  
	},

	// 打开删除商品界面
	openRemove() {
		console.log('长按')
		if (this.data.removeSwitch) {
			return false
		}
		this.setData({
			removeSwitch: true
		})
	},

	// 获取收藏列表
	getCollection() {
		let _self = this
		app.http.post(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_listcolletion`, {
			page:_self.data.page
			}, true).then(
			res => {
				if (res.data.status === 1) {
					let data = res.data.result.list
					data.forEach(item => {
						item.removeSwitch = false
						item.json_datas = JSON.parse(item.json_datas.replace(/\\/g, ''))
					})
					_self.setData({
						collection: _self.data.collection.concat(data),
						selectionNumber: 0,
						page: res.data.result.pindex,
						totalPages: res.data.result.total_pages
					})
					return false
				}
				console.log('收藏列表', res)
			})
	},
	// 去逛逛
	jumpIndex() {
		wx.switchTab({
			url: '/pages/index/index',
		})
	},
	// 跳转商品详情
	jumpDetails(event) {
		if (this.data.removeSwitch) {
			return false
		}
		if (this.endTime - this.startTime < 350) {
			console.log("点击");
			app.shopDeatail(event)
		}
	},
})
