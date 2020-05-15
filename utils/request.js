function getData(url, data = {}, loading) {
	let header = {}
	if (wx.getStorageSync("cookieLogin")) {
		header.Cookie = wx.getStorageSync("cookieLogin")
		header.yzyg = 'wxxcx'
		header["Content-Type"] = "application/json"
	}
	return new Promise((resolve, reject) => {
    
		if (loading) {
			let title = '加载中...'
			if (typeof loading === 'string') {
				title = loading
			}
			wx.showLoading({
				title: title,
			})
		}

		wx.request({
			url: url,
			data: data,
			method: 'GET',
			header: header,
			success: function(res) {
				if (loading) {
					wx.hideLoading()
				}
				if (res.data.status === 4) {
					wx.showModal({
					  title: '提示',
					  content: '使用该功能请先登录',
					  success (res) {
					    if (res.confirm) {
							setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/mainPages/login/minLogin',
								})
							}, 1000)
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					  }
					})
				}
				resolve(res)
			},
			fail: function() {
				if (loading) {
					wx.hideLoading()
				}
				reject(res)
			}
		})
	})
}


function postData(url, data, loading) {
	let header = {}
	if (wx.getStorageSync("cookieLogin")) {
		header.Cookie = wx.getStorageSync("cookieLogin")
		header.yzyg = 'wxxcx'
		header["Content-Type"] = "application/x-www-form-urlencoded"
	}
	return new Promise((resolve, reject) => {
		if (loading) {
			let title = '加载中...'
			if (typeof loading === 'string') {
				title = loading
			}
			wx.showLoading({
				title: title,
			})
		}
		wx.request({
			url: url,
			data: data,
			method: 'POST',
			header: header,
			success: function(res) {
				if (loading) {
					wx.hideLoading()
				}
				if (res.data.status === 4) {
					wx.showModal({
					  title: '提示',
					  content: '使用该功能请先登录',
					  success (res) {
					    if (res.confirm) {
							setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/mainPages/login/minLogin',
								})
							}, 1000)
					    } else if (res.cancel) {
					      console.log('用户点击取消')
					    }
					  }
					})
				}
				resolve(res)
			},
			fail: function() {
				if (loading) {
					wx.hideLoading()
				}
				reject(res)
			}
		})
	})
}

module.exports = {
	req: getData, //暴露一个方法
	post: postData
}
