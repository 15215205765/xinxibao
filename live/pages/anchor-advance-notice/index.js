var _extends = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, _live = require("../../../api/live.js"), _dialog = require("../../vant/dialog/dialog"), _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var app = getApp();

Page({
    data: {
        parameter: {
            navbar: "1",
            return: "1",
            title: "开播预告",
            color: !0,
           
            class: "0"
        },
        formData: {
            title: "",
            cover: "",
            start_at: "",
            intro: "",
            cate_id:''
        },
        index: 0,
        livetype:[],
        fileList: [],
        data_show: !1,
        minData: 0
    },
    onLoad:function(){
      this.liveInfo();
    },
  onShow: function(t) {
        var a = this.data.formData;
    a.start_at = this.timeTransform(new Date().getTime()), this.setData({
            formData: a,
            minData: new Date().getTime()
        });
    
    this.getCatetory();
    },
    liveInfo:function(){
      wx.showLoading(),(0, _live.getAnchorLiveInfo)().then(function (t) {
        if(t.data.live.live_status==1){
          wx.redirectTo({
            url: '/live/pages/live_nostart/index?live_id='+t.data.live.id,
          })
        }
         wx.hideLoading();
      }).catch(function (t) {
        return wx.hideLoading()
      });
    },
  bindPickerChange:function(e){
    var page = this;
    var livetype = page.data.livetype;
    var cate_id = livetype[e.detail.value].id;
    var t = page.data.formData; 
    t.cate_id = cate_id;
    this.setData({
      index: e.detail.value,
      formData: t
    })
  },
    getNameValue: function(t) {
        var a = this.data.formData;
        a.title = t.detail.value, this.setData({
            formData: a
        });
    },
    getIntroValue: function(t) {
        var a = this.data.formData;
        a.intro = t.detail.value, this.setData({
            formData: a
        });
    },
    onDataShow: function(t) {
        this.setData({
            data_show: !this.data.data_show
        });
    },
    onDataClose: function() {
        this.setData({
            data_show: !1
        });
    },
    onData: function(t) {},
    timeTransform: function(t) {
        var a, e = new Date(t);
        return a = e.getFullYear() + "-" + ((e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-") + ((e.getDate() < 10 ? "0" + e.getDate() : e.getDate()) + " ") + ((e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":") + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()), 
        console.log(3333333, a), a;
    },
    onConfirmDate: function(t) {
        var a = this.timeTransform(t.detail), e = this.data.formData;
        e.start_at = a, this.setData({
            data_show: !this.data.data_show,
            formData: e
        });
    },
    afterRead: function(t) {
      console.log(t);
        var n = this, r = t.file;
        wx.uploadFile({
            url: app.globalData.url + "/common/upload/image",
            filePath: r[0].path,
            name: "image",
            formData: {
                filename: "image"
            },
            success: function(t) {
                var a = JSON.parse(t.data), e = n.data.formData, i = n.data.fileList, o = void 0 === i ? [] : i;
                o.push(_extends({}, r, {
                    url: a.url
                })), e.cover = a.data.url, console.log(111111, a), console.log(111111, e), n.setData({
                    fileList: o,
                    formData: e
                });
            }
        });
    },
  startUpload: function () {
    var a = this;
   
        wx.chooseImage({
          count: 1,
          sourceType: 'album',
          sizeType: 'original',
          success: function(e){
console.log(e)
  var detail = {
    file:e.tempFiles
  }
            a.afterRead(detail)
          },
          fail: function(e){
            console.log(e)
          }
        });
          
       
  },
    onDeleteImg: function(t) {
        var a = this.data.fileList;
        console.log(111111, a), console.log(111111, t.detail.index);
        for (var e = 0; e < a.length; e++) e == t.detail.index && a.splice(e, 1);
        this.setData({
            fileList: a
        });
    },
    getCatetory: function () {
      var a = this;
      var s = a.data.formData;
      (0, _live.getCatetory)().then(function (t) {
        s.cate_id = t.data.lists[0].id;
        a.setData({
          livetype: t.data.lists,
          formData:s
        });
      });
    },
    onChange: function(t) {
        var a = t.detail;
        a.picker, a.value, a.index;
    },
    onPickerConfirm: function(t) {
        var a = t.detail, e = (a.picker, a.value), i = (a.index, this.data.value);
        i[this.data.current_index].value = e, i[this.data.current_index].err_msg = this.inputErrMsg(i[this.data.current_index]), 
        this.setData({
            value: i,
            current_index: "",
            picker_show: !this.data.picker_show
        }), this.doSetFormData();
    },
    onDateClose: function() {
        this.setData({
            data_show: !this.data.data_show
        });
    },
    onCancelDate: function() {
        this.setData({
            data_show: !this.data.data_show
        });
    },
    submit_notice: function(t) {
        return this.data.formData.title ? this.data.formData.cover ? this.data.formData.start_at ? this.data.formData.intro ? void (0, 
        _live.createLiveNotice)(this.data.formData).then(function(t) {
          wx.showModal({
            title: '温馨提示',
            content: t.msg,
            showCancel:false,
            success(res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: "/pages/mainPages/userCenter/userCenter"
                });
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
            // _dialog2.default.confirm({
            //     title: "温馨提示",
            //     message: t.msg,
            //   confirmButtonText: "创建成功"
            // }).then(function() {
            //     wx.redirectTo({
            //       url: "/pages/mainPages/userCenter/userCenter"
            //     });
            // }).catch(function() {
                
            // });
        }).catch(function(t) {
            return app.Tips({
                title: t
            });
        }) : app.Tips({
            title: "请填写预告简介"
        }) : app.Tips({
            title: "请选择时间"
        }) : app.Tips({
            title: "请上传预告封面"
        }) : app.Tips({
            title: "请填写预告标题"
        });
    },
    gopages: function() {
        wx.redirectTo({
            url: "/live/pages/anchor-goods/index"
        });
    }
});