// pages/myPage/agent/agent.js
const app  = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      name:'', // 姓名
      content:'', //个人基本情况
      address:'', // 意向代理地址
      phone:'' // 手机号
    },
    region: ['广东省', '广州市', '海珠区'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 提交申请
  submit(){
    let _self = this
    console.log(this.data.form)
    if(this.data.form.name===''){
      wx.showToast({
        title: '请输入姓名',
        icon:'none'
      })
      return false
    } else if (this.data.form.phone === '') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      })
      return false
    } else if (!(/^1[34578]\d{9}$/.test(this.data.form.phone))) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
      return false
    } else if(this.data.form.address === ''){
      wx.showToast({
        title: '请选择意向代理代理区域',
        icon: 'none'
      })
      return false
    }else if(this.data.form.content === ''){
      wx.showToast({
        title: '请输入个人基本信息',
        icon: 'none'
      })
      return false
    }
    app.http.post(`${app.globalData.phpUrl}/app/app.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=member.feedback.abonus_sub`,{
      content: _self.data.form.content,
      mobile: _self.data.form.phone,
      name: _self.data.form.name,
      areas: _self.data.form.address,
    }).then(res=>{
        if(res.data.status===1){
          setTimeout(function(){
            wx.navigateBack()
          },1000)
        }
        this.setData({
          'form.address': '',
          'form.content': '',
          'form.phone': '',
          'form.name': '',
        })
        wx.showToast({
          title:res.data.result.message,
          icon:'none'
        })
    })
  },
  // 选择意向代理区域
  bindRegionChange: function (e) {
    let data = e.detail.value
    let address = ''
    data.forEach(item=>{
      console.log(item)
      address += item
    })
    console.log(address)
    this.setData({
      'form.address': address
    })
  },

  inputContent(e){
    let data = e.detail.value
    this.setData({
      'form.content':data
    })
  },
   inputName(e) {
    let data = e.detail.value
    this.setData({
      'form.name':data
    })
  },
   inputPhone(e) {
    let data = e.detail.value
    this.setData({
      'form.phone': data
    })
  }
})