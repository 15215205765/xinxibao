// pages/classifyDetails/classifyDetails.js
	const app =  getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentTab: 0, // 分类列表选中索引值
		classifyIndex: 0, // 缓存分类数据索引值
		classList: [{
			son_name: '全部'
		}], // 商品分类列表
		coupon: 0, // 1为只看有券商品
		typeName: '', // 商品名称
		page: 1, // 商品分页
		backTop: true, // 返回顶部图标
		shopType: "J", // 商品来源
		shopList:[], // 商品列表
		title:'', // 商品一级分类名称
		navScrollLeft:0,
		headerHeight:0, // header标签高度
		navbarList: [{ // 商品来源列表
				name: "京东",
				type: "J"
			},
			{
				name: "拼多多",
				type: "P"
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		console.log(options)
		let that = this
		this.setData({
			currentTab: parseInt(options.type),
			classifyIndex: parseInt(options.classifyID)
		})
		wx.getSystemInfo({
			success: (res) => {
				this.setData({
					pixelRatio: res.pixelRatio,
					windowHeight: res.windowHeight,
					windowWidth: res.windowWidth
				})
			},
		})
		
		 // 获取切换商品来源盒子距离顶部的距离
		wx.createSelectorQuery().select('.header').boundingClientRect(function(rect) {
			that.setData({
				headerHeight: rect.height
			})
		}).exec()
		// //每个tab选项宽度占1/5
		var singleNavWidth = this.data.windowWidth / 6;
		//tab选项居中                            
		this.setData({
			navScrollLeft: (this.data.currentTab - 2) * singleNavWidth,
		})
		console.log(this.data.windowWidth);
		 console.log(this.data.navScrollLeft)
		this.getClassifyData() // 获取分类数据
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
// 一级分类菜单切换
	switchNav(event) {
		var cur = event.currentTarget.dataset.current; // navbar 下标
		var type = event.currentTarget.dataset.type; // 商品分类名称
		console.log(type);
		if (this.data.currentTab == cur) {
			return false;
		} else {
			this.setData({
				currentTab: cur,
				page:1,
				shopList:[],
			})
		}
		//每个tab选项宽度占1/5
		var singleNavWidth = this.data.windowWidth/6;
		//tab选项居中                            
		this.setData({
			navScrollLeft: (cur - 2) * singleNavWidth,
			typeName: type
		})
		console.log(this.data.navScrollLeft)
		this.getShop() //获取商品列表

	},
	// 触底加载更多
	onReachBottom(){
		this.getShop()
	},
	
	// 页面滑动监听
	onPageScroll: function(e) {
		if (e.scrollTop > 600) {
			this.setData({
				backTop: false
			})
		} else {
			this.setData({
				backTop: true
			})
		}
	},
	// 切换商品来源
	changeType(e) {
		let type = e.currentTarget.dataset.type
		if (this.data.shopType === type) {
			return false
		}
		this.setData({
			shopType: type,
			page: 1,
			shopList: []
		})
		this.getShop()
	},
	
	// 返回顶部
	goTop() {
		app.goTop()
	},
	
	// 只看有券商品
	onlyCoupon() {
		this.setData({
			page: 1,
			shopList: [],
		})
		if (this.data.coupon === 0) {
			this.setData({
				coupon: 1,
				shopList: [],
			})
		} else {
			this.setData({
				coupon: 0,
				shopList: [],
			})
		}
		this.getShop()
	},
	
	// 获取商品列表
	getShop() {
		let _self = this
		if (_self.data.currentTab === 0) {
			_self.setData({
				typeName: _self.data.title
			})
		}
		wx.showLoading({
			title:'加载中'
		})
		wx.request({
			url: `http://haodanku.shuyu.cqyanyu.com.cn/supersearch/apikey/quweihuimall/keyword/${encodeURIComponent(
            encodeURIComponent(_self.data.typeName)
          )}/back/20/min_id/${_self.data.page}/tb_p/1/sort/0/is_coupon/${
            _self.data.coupon
          }/shoptype/${_self.data.shopType}`,
			method: 'GET',
			data: {},
			success: (res) => {
				console.log(res)
				wx.hideLoading()
				if(res.data.msg==='SUCCESS'){
					_self.setData({
						shopList:_self.data.shopList.concat(res.data.data),
						page:res.data.min_id
					})
				}
			}
		})
	},
	// 跳转商品详情
	jumpDetails(event) {
		app.shopDeatail(event)
	},
	// 获取缓存分类数据
	getClassifyData() {
		let _self = this
		wx.getStorage({
			key: 'classify',
			success: function(res) {
				let classifyData = res.data[_self.data.classifyIndex];
				// 设置页面标题
				wx.setNavigationBarTitle({
					title: classifyData.main_name
				})
				_self.setData({
					title:classifyData.main_name
				})
				let list = []

				classifyData.data.forEach(item => {
					list = list.concat(item.info)
				})

				_self.setData({
					classList:_self.data.classList.concat(list)
				})
				// 分类名称
				if (_self.data.currentTab === 0) {
					_self.setData({
						typeName: classifyData.main_name
					})
				} else {
					_self.setData({
						typeName: _self.data.classList[_self.data.currentTab].son_name
					})
				}
				
				_self.getShop()
			},
		})
	},
})
