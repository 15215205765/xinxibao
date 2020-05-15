const app = getApp()
Component({
	options: {
		multipleSlots: true // 在组件定义时的选项中启用多slot支持
	},
	
	/**
	 * 组件的属性列表
	 */
	properties: {
		// 是否为首页精选商品列表 
		isIndex: {
			type: Boolean,
		},
		skeletonFlag:{
			type:Boolean
		},
		goodsList: {
			type: Array,
			value: []
		}
	},

	/**
	 * 组件的初始数据
	 */
		attached(){
			if(!wx.getStorageSync('personal')){
				this.setData({
					flag:false
				})
			}
		},
	data: {
		flag: true,
	},
	
	/**
	 * 组件的方法列表
	 */
	methods: {
		
		openCollectBox(e){
				 this.triggerEvent('myevent',e)
		},
	
		collectGoods(e){
			this.triggerEvent('collectGoods',e)
		},
		
		jumpDetails(event) {
			if (this.endTime - this.startTime < 350) {
				console.log("点击");
				app.shopDeatail(event)
			}
		},
		
		// touch events start
		handleTouchStart: function(e) {
			this.startTime = e.timeStamp;
		},
		
		// touch events end
		handleTouchEnd: function(e) {
			this.endTime = e.timeStamp;
		},
	}

})
