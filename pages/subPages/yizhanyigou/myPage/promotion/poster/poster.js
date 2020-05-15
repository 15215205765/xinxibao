// pages/myPage/promotion/poster/poster.js

import {
  base64src
} from '../../../../../../utils/bast64.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posterList: [], // 海报图片
    codeImg: '', // 我的二维码
    code: 'kkkk', // 邀请码
    current: 0,
    posterPictrue: '', // 背景临时图片
    codePicture: '', // 二维码临时图片
    canvasImg: '', // 
    saveImgBtnHidden: true,
    openSettingBtnHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCode()

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
  // 拉取授权框
  authorization() {
    wx.showModal({
      title: '提示',
      content: '授权后才能保存至相册',
      showCancel: false,
      success: res => {
        wx.openSetting({
          success(settingData) {
            console.log("settingData", settingData)
            if (settingData.authSetting['scope.writePhotosAlbum']) {
              wx.showModal({
                title: '提示',
                content: '获取权限成功,再次保存图片即可',
                showCancel: false
              })
            } else {
              wx.showModal({
                title: '提示',
                content: '获取权限失败，将无法保存到相册',
                showCancel: false
              })
            }
          },
          fail(failData) {
            console.log("failData", failData)
          },
          complete(finishData) {
            console.log("finishData", finishData)
          }
        })
      },
    })
  },
  // 保存图片
  savePoster() {
    let control = true
    wx.getSetting({
      success: function(res) {
        console.log(res)
        if (!res.authSetting['scope.writePhotosAlbum']) {
          _self.authorization
          control = false
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    if (!control) {
      return false
    }
    let _self = this
    wx.showLoading({
      title: '保存中',
    })
    wx.downloadFile({
      url: _self.data.posterList[_self.data.current],
      success: res => {
        _self.setData({
          posterPictrue: res.tempFilePath
        })
        this.drawPoster()
        setTimeout(() => {
          // 将生成的canvas图片，转为真实图片
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            canvasId: 'firstCanvas',
            success: function(res) {
              _self.setData({
                canvasImg: res.tempFilePath
              })
              wx.saveImageToPhotosAlbum({
                filePath: _self.data.canvasImg,
                success(res) {
                  wx.hideLoading()
                  wx.showToast({
                    title: '保存成功'
                  })
                  console.log(res)
                },
                fail(res) {
                  wx.hideLoading()
                  wx.showToast({
                    title: '保存失败',
                    icon: 'none'
                  })
                  console.log(res)
                }
              })
            },
            fail: function(res) {}
          })
        }, 500)
      }
    })
  },

  // 绘画canvas
  drawPoster() {
    var context = wx.createCanvasContext('firstCanvas')
    context.drawImage(this.data.posterPictrue, 0, 0, 264, 464, );
    context.drawImage(this.data.codeImg, 92, 310, 80, 80);
    context.setFontSize(8)
    // context.textAlign = "center"
    context.fillStyle = "#333";
    context.fillText(` 邀请码下载:${this.data.code}`, 95, 405);
    context.draw()
  },

  // 获取我的二维码
  getCode() {
    let _self = this
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member`).then(res => {
      if (res.data.status === 1) {
        _self.setData({
          posterList: res.data.result._W.shopset.shop.share_poster,
          code: res.data.result.member_info.invite_code
        })
        console.log(this.data.posterList)
        return false
      }
      console.log('获取海报图失败', res)
    })
    app.http.get(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=commission.appdown.qr`).then(res => {
      if (res.data.status === 1) {
        let data = res.data.result.qrcode
        data = data.replace(/[\r\n]/g, "")
        //  console.log(data)
        //  data = wx.arrayBufferToBase64(data)
        _self.setData({
          codeImg: data
        })
        base64src(_self.data.codeImg, res => {
          console.log(res) // 返回图片地址，直接赋值到image标签即可
          _self.setData({
            codeImg: res
          })
        });
        //  data = wx.base64ToArrayBuffer(data)
        //  var aa = wx.getFileSystemManager();
        //  aa.writeFile({
        //    filePath: wx.env.USER_DATA_PATH + '/test.png',
        //    data: data,
        //    encoding: 'base64',
        //    success: res => {

        //     //  wx.saveImageToPhotosAlbum({
        //     //    filePath: wx.env.USER_DATA_PATH + '/test.png',
        //     //    success: function (res) {
        //     //      wx.showToast({
        //     //        title: '保存成功',
        //     //      })
        //     //    },
        //     //    fail: function (err) {
        //     //      wx.showToast({
        //     //        title: '授权后才能正常使用海报邀请功能',

        //     //        icon:'none'
        //     //      })
        //     //    }
        //     //  })
        //      console.log(res)
        //    }, fail: err => {
        //      console.log(err)
        //    }
        //  })
        console.log(this.data.codeImg)
        return false
      }
      console.log('获取二维码失败', res)
    })
  },
  change(e) {
    this.setData({
      current: e.detail.current
    })
  },


})