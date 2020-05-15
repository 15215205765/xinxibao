//index.js
//获取应用实例
const app = getApp()
Page({
	data: {
		showSkeleton: true, // 分类导航骨架屏
		shopSkeleton: true, // 商品列表骨架屏
		backTop: true, // 返回顶部
		classifyNavTop: false, // 一级分类导航栏
		shopNavTop: false, // 京东 拼多多
		searchBox: false, //
		navData: [], // 一级分类菜单
		moreText: '加载中...', // 加载更多提示文本
		statusBarHeight: app.globalData.statusBarHeight, // 手机状态栏高度
		capsuleHeight: app.globalData.capsuleHeight, // 头部标题高度 与胶囊对齐
		headerBoxHeight: 0, // header-box 标签高度
		page: 1, // 商品分页
		shopTop: 0, // 切换商品来源顶部距离
		menuTop: 0, // 一级分类导航栏顶部距离
		typeName: '', // 分类名称
		shopType: 'J', // 一级分类商品来源
		selectType: 'A', // 精选商品来源
		lastSelectType:'A', // 上一次
		classifyList: [],
		recommendList: [], // 精选推荐
		// 分类列表
		shopList: [], // 商品列表
		mid: null, // 用户id
		shopTypeList: [ // 商品来源列表
			{
				name: "京东",
				type: "J"
			},
			{
				name: "拼多多",
				type: "P"
			}
		],
		shopHeight: 80,
		currentTab: 0,
		navScrollLeft: 0
	},
  back() {
    wx.navigateBack({
      delta: 100
    })
  },
	//事件处理函数
	onLoad: function() {
		
		let that = this
		this.getClassficationList() // 获取分类数据列表
		this.getSelectlist() // 获取精选推荐

		// 获取header-box 高度
		wx.createSelectorQuery().select('.header-box').boundingClientRect(function(rect) {
			that.setData({
				headerBoxHeight: rect.height
			})
		}).exec()

		this.animation = wx.createAnimation() // 创建切换商品来源吸顶动画
	},

	/**
	 * 生命周期函数--监听页面显示
	 */

	onShow: function() {
		// this.copy() // 调用剪切版复制内容 进行智能搜索
		if (wx.getStorageSync('personal')) {
			this.setData({
				mid: wx.getStorageSync('personal').member_info.id
			})
		}
	},

	// 调用剪切版复制内容 进行智能搜索
	copy() {
		let _self = this
		wx.getClipboardData({
			success(res) {
				let data = wx.getStorageSync('search') || ''
				if (res.data === data) {
					return false
				}
				if (res.data !== '' && typeof res.data === 'string' && res.data.toString().length < 66) {
					wx.setStorageSync('search', res.data)
					_self.setData({
						searchContent: res.data,
						searchBox: true
					})
				}
			}
		})
	},

	onShareAppMessage: function(e) {
		let data = e.target.dataset
		console.log(e)
		return {
			title: data.title,
			desc: '',
			imageUrl: data.imgurl,
      path: `pages/subPages/yizhanyigou/shopDetails/details?id=${data.id}&type=${data.type}&is_yxk=${data.is_yxk}&activityid=${data.activityid}&mid=${this.data.mid}` // 路径，传递参数到指定页面。
		}
	},
	// 获取滚动条当前位置
	onPageScroll: function(e) {
		app.debounce(this.translate(e), 20)
		if(this.data.currentTab===0){
			app.debounce(this.clearnMask(),50)
		}
		
	},
	// 获取分类数据
	getClassficationList() {
		let that = this
		wx.request({
			url: `${app.globalData.javaUrl}/super_classify`,
			data: {
				apikey: "quweihuimall",
				cid: 0
			},
			success: function(res) {
				if (res.data.msg === "SUCCESS") {
					// let data = res.data.general_classify
					let data = [{
						main_name: "精选",
						data: []
					}]
					data = data.concat(res.data.general_classify)
					that.setData({
						navData: data,
						typeName: res.data.general_classify[0].main_name
					})
					// 筛选一级分类
					that.getClassify()
					// 获取商品列表
					that.getShop()
					// 分类数据存入缓存   
					wx.setStorage({
						key: 'classify',
						data: data,
					})
					return false
				}
				console.log('获取分类列表失败', res)
			}
		})
	},

	// 固定切换商品来源动画
	translate: function(e) {
		if (e.scrollTop > this.data.shopTop - this.data.headerBoxHeight) {
			this.animation.translate(0, this.data.shopHeight).step()
			this.setData({
				backTop: false,
				shopNavTop: true,
				animation: this.animation.export()
			});
		} else {
			this.animation.translate(0, -this.data.shopHeight).step()
			this.setData({
				backTop: true,
				shopNavTop: false,
				animation: this.animation.export()
			});
		}
	},
	
	// 清除蒙版
	clearnMask(){
		let data = this.data.recommendList
		data.forEach(item=>{
			item.collect = false
		})
		this.setData({
			recommendList:data
		})
	},
	// 确定智能搜索
	confirmSearch() {
		wx.navigateTo({
			url: `/pages/searchDetails/searchDetails?shopName=${this.data.searchContent}`
		})
		this.setData({
			searchBox: false
		})
	},

	// 取消智能搜索
	cancelSearch() {
		this.setData({
			searchBox: false
		})
	},

	jump: app.jump(function() {
		wx.navigateTo({
			url: '../search/search'
		})
	}, 2000),

	// 页面触底加载更多
	// loade more when page reach window bottom
	onReachBottom() {
		
		if (this.data.page === 0) {
			console.log('没有更多内容了')
			return false
		}
		
		if (this.data.currentTab === 0) {
			this.getSelectlist()
		} else {
			this.getShop()
		}
	},

	// 获取分类列表
	getClassify() {
		let that = this
		let list = [{
			main_name: "精选"
		}]
		let num = 9
		that.data.navData[that.data.currentTab].data.forEach(item => {
			list = list.concat(item.info);
		})
		if (list.length < 9) {
			num = list.length;
		}
		that.setData({
			classifyList: [],
			showSkeleton: false,
		})
		for (let i = 0; i < num; i++) {
			that.setData({
				classifyList: that.data.classifyList.concat(list[i])
			})
		}
	},

	// 跳转分类详情
	jumpClassifyDetails(event) {

		let type = parseInt(event.currentTarget.dataset.type) + 1

		if (type == 1000) {
			type = 0
		}

		wx.navigateTo({
			url: `../classifyDetails/classifyDetails?classifyID=${this.data.currentTab}&type=${type}`
		})
	},

	getBoxHeight() {
		setTimeout(()=>{
			let that = this
			// 获取切换商品来源盒子距离顶部的距离
			wx.createSelectorQuery().select('#shopTop').boundingClientRect(function(rect) {
				// console.log(rect)
				that.setData({
					shopHeight: rect.height
				})
			}).exec()
			wx.createSelectorQuery().select('#shopType').boundingClientRect(function(rect) {
				// console.log(rect)
				that.setData({
					shopTop: rect.top,
				})
			}).exec()
		},1000)
	},

	// 一级分类菜单切换
	switchNav(event) {
		var cur = event.currentTarget.dataset.current; // navbar 下标
		var type = event.currentTarget.dataset.type; // 商品分类名称
		if (this.data.currentTab == cur) {
			return false;
		}
		wx.pageScrollTo({
			scrollTop: 0,
			duration: 0
		})
		this.setData({
			currentTab: cur,
			page: 1,
			shopSkeleton: true,
			backTop:true,
			shopNavTop:false,
			shopList: [],
		})
		//每个tab选项宽度占1/5
		var singleNavWidth = this.data.windowWidth / 6;
		//tab选项居中                            
		this.setData({
			navScrollLeft: (cur - 3) * singleNavWidth,
			typeName: type,
		})

		let that = this
		let list = []
		let num = 9

		that.data.navData[that.data.currentTab].data.forEach(item => {
			list = list.concat(item.info);
		})

		if (list.length < 9) {
			num = list.length;
		}

		that.setData({
			classifyList: [],
		})

		for (let i = 0; i < num; i++) {
			that.setData({
				classifyList: that.data.classifyList.concat(list[i])
			})
		}

		if (this.data.shopTop === 0) {
			this.getBoxHeight()
		}

		this.getShop() //获取商品列表
	},



	// 回到顶部
	goTop() {
		if (wx.pageScrollTo) {
			wx.pageScrollTo({
				scrollTop: 0
			})
		} else {
			wx.showModal({
				title: '提示',
				content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
			})
		}
	},

	// 跳转搜索页面
	jumpSearch() {
		wx.navigateTo({
			url: '../search/search'
		})
	},

	// 精选切换商品来源
	selectChangeType(e) {
		var type = e.currentTarget.dataset.type;
		
		if(type===this.data.lastSelectType){
			return false
		}
		
		wx.pageScrollTo({
			scrollTop: 0,
		})
		
		this.setData({
			selectType: type,
			lastSelectType:type,
			page: 1,
			recommendList: []
		}, () => {
			this.getSelectlist()
		})
	},
	// 获取精选
	getSelectlist() {
		app.http.get(
				`${app.globalData.javaUrl}/recommend/apikey/quweihuimall/min_id/${this.data.page}/shoptype/${this.data.selectType}`
			)
			.then(res => {
				if (res.data.msg === 'SUCCESS') {

					// 如果用户登录了 就查询收藏列表
					if (wx.getStorageSync('personal')) {
						this.getCollection()
					}

					if (res.data.min_id === 0) {
						this.setData({
							moreText: '没有更多商品了'
						})
					} else {
						this.setData({
							moreText: '加载中...'
						})
					}
					
					// 删除淘宝天猫商品
					let data = res.data.data
					for (let i = data.length-1; i>= 0; i--) {
						if (data[i].shoptype === 'C' || data[i].shoptype === 'B') {
							data.splice(i, 1)
						}
						data[i].collect = false
						data[i].collected = false
						data[i].itemendprice = Math.floor(data[i].itemendprice * 100) / 100
						data[i].tkmoney = Math.floor(data[i].tkmoney * 100) / 100
					}
					
					this.setData({
						recommendList: this.data.recommendList.concat(data),
						page: res.data.min_id
					})
				}
				// console.log(res)
			})
	},

	// 收藏商品
	collectGoods(e) {
		let _self = this
		let index = e.detail.currentTarget.dataset.index
		let num = this.data.recommendList[index].collected ? 1 : 0
		let goodsID = this.data.recommendList[index].itemid
		app.http.post(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.togglecollection`, {
				id: goodsID,
				iscollection: num,
				json_datas: JSON.stringify(_self.data.recommendList[index]),
			}, '加载中...').then(res => {
			if (res.data.status === 1) {
				let recommendList = this.data.recommendList
				recommendList[index].collected = !recommendList[index].collected
				this.setData({
					recommendList: recommendList
				})
				setTimeout(() => {
					recommendList[index].collect = false
					this.setData({
						recommendList: recommendList
					})
				}, 200)
				return false
			}
			console.log('收藏失败', res)
		})
	},

	getIndex(e) {
		let index = e.detail.currentTarget.dataset.index
		let data = this.data.recommendList
		console.log(index)
		data[index].collect = true
		this.setData({
			recommendList: data
		})
	},

	// 获取收藏列表
	getCollection() {
		let _self = this
		app.http.post(
			`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.favorite.get_listcolletion`, {
				page: 1
			}).then(
			res => {
				if (res.data.status === 1) {
					console.log(res)
					let list = res.data.result.list
					let recommendList = _self.data.recommendList
					recommendList.forEach(item => {
						list.some(listItem => {
							if (item.itemid === parseInt(listItem.goodsid)) {
								console.log(item.itemid)
								item.collected = true
								return false
							}
						})
					})
					_self.setData({
						recommendList: recommendList
					})
					return false
				}
				console.log('收藏列表', res)
			})
	},

	// 切换商品来源
	changeType(event) {
		var type = event.currentTarget.dataset.type;
		if (this.data.shopType === type) {
			return
		}
		this.setData({
			shopType: type,
			shopList: [],
			page: 1,
			shopSkeleton: true
		})
		wx.pageScrollTo({
			scrollTop: 0
		})
		this.getShop()
	},
	// 获取商品列表
	getShop() {
		let _self = this
		// wx.showLoading({
		//   title: '加载中'
		// })
		let url = ''
		if (this.data.typeName == '鞋品') {
			url =
				`${app.globalData.javaUrl}/supersearch/apikey/quweihuimall/keyword/%25E9%259E%258B/back/20/min_id/${this.data.page}/tb_p/1/sort/0/is_coupon/1/shoptype/${
this.data.shopType}`
		} else {
			url =
				`${app.globalData.javaUrl}/supersearch/apikey/quweihuimall/keyword/${encodeURIComponent(
        encodeURIComponent(this.data.typeName)
      )}/back/20/min_id/${this.data.page}/tb_p/1/sort/0/is_coupon/1/shoptype/${
this.data.shopType}`
		}
		wx.request({
			url: url,
			method: 'GET',
			success: function(res) {
				// wx.hideLoading()
				if (res.data.msg === 'SUCCESS') {
					if (res.data.min_id === 0) {
						_self.setData({
							moreText: '没有更多商品了'
						})
					} else {
						_self.setData({
							moreText: '加载中...'
						})
					}
					let data = res.data.data
					data.forEach(item => {
						if (item.itemendprice % 1 === 0) {
							item.itemendprice = item.itemendprice + '.00'
						} else {
							item.itemendprice = Math.floor(item.itemendprice * 100) / 100
							item.itemendprice = item.itemendprice.toString().split('.')
							if (item.itemendprice[1].length === 1) {
								item.itemendprice = item.itemendprice[0] + '.' + item.itemendprice[1] + '0'
							} else {
								item.itemendprice = item.itemendprice[0] + '.' + item.itemendprice[1]
							}
						}
						if (item.itemprice % 1 === 0) {
							item.itemprice = item.itemprice + '.00'
						} else {
							item.itemprice = Math.floor(item.itemprice * 100) / 100
							item.itemprice = item.itemprice.toString().split('.')
							if (item.itemprice[1].length === 1) {
								item.itemprice = item.itemprice[0] + '.' + item.itemprice[1] + '0'
							} else {
								item.itemprice = item.itemprice[0] + '.' + item.itemprice[1]
							}
						}
						// item.itemendprice = Number(item.itemendprice.toString().match(/^\d+(?:\.\d{0,2})?/));
					})
					_self.setData({
						shopList: _self.data.shopList.concat(data),
						page: res.data.min_id,
						shopSkeleton: false
					})
				}
			}
		})
	},
	// 跳转商品详情
	jumpDetails(event) {
		app.shopDeatail(event)
	},
	// 跳转同类商品
	jumpSimilar(event) {
		app.shopDeatail(event)
	}
})
