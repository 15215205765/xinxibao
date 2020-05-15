(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/subPages/createCommodity/index"], {
    "237b": function(t, e, o) {
      "use strict";
      var s, a = function() {
          var t = this,
            e = t.$createElement,
            o = (t._self._c, t.__map(t.presettagsList, function(e, o) {
              var s = t.goodsInfo.goods.tag.indexOf(e.id);
              return {
                $orig: t.__get_orig(e),
                g0: s
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: o
            }
          })
        },
        i = [];
      o.d(e, "b", function() {
        return a
      }), o.d(e, "c", function() {
        return i
      }), o.d(e, "a", function() {
        return s
      })
    },
    "23a2": function(t, e, o) {
      "use strict";
      (function(t) {
        o("f466");
        s(o("66fd"));
        var e = s(o("695c"));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, o("543d")["createPage"])
    },
    5913: function(t, e, o) {
      "use strict";
      var s = o("8314"),
        a = o.n(s);
      a.a
    },
    "695c": function(t, e, o) {
      "use strict";
      o.r(e);
      var s = o("237b"),
        a = o("f535");
      for (var i in a) "default" !== i && function(t) {
        o.d(e, t, function() {
          return a[t]
        })
      }(i);
      o("5913");
      var n, d = o("f0c5"),
        r = Object(d["a"])(a["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], n);
      e["default"] = r.exports
    },
    "819a": function(t, e, o) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s, a = n(o("a34a")),
          i = n(o("3099"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }

        function d(t, e, o) {
          return e in t ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = o, t
        }

        function r(t, e, o, s, a, i, n) {
          try {
            var d = t[i](n),
              r = d.value
          } catch (g) {
            return void o(g)
          }
          d.done ? e(r) : Promise.resolve(r).then(s, a)
        }

        function g(t) {
          return function() {
            var e = this,
              o = arguments;
            return new Promise(function(s, a) {
              var i = t.apply(e, o);

              function n(t) {
                r(i, s, a, n, d, "next", t)
              }

              function d(t) {
                r(i, s, a, n, d, "throw", t)
              }
              n(void 0)
            })
          }
        }
        var u = function() {
            return o.e("components/template/inputPop").then(o.bind(null, "8519"))
          },
          c = function() {
            return o.e("components/template/PopManager").then(o.bind(null, "b696"))
          },
          f = function() {
            return Promise.all([o.e("common/vendor"), o.e("pages/subPages/createCommodity/w-picker/w-picker")]).then(o.bind(null, "9ea4"))
          },
          l = {
            components: {
              inputPop: u,
              PopManager: c,
              wPicker: f
            },
            data: function() {
              return {
                priceText: "",
                closetimeText: "",
                submitType: 0,
                bengF: "0",
                adopt: !0,
                publicList: ["name", "price", "oldprice", "num"],
                rushList: ["retainage", "op_one_limit"],
                fightgroupList: ["peoplenum", "grouptime", "op_one_limit", "aloneprice"],
                bargainList: ["helplimit", "dayhelpcount", "onlytimes", "joinlimit"],
                slectDis: null,
                statusText: "",
                startValue: [],
                endValue: [],
                endtimeText: "请选择结束时间",
                starttimeText: "请选择开始时间",
                optionsShow: !1,
                specList: [],
                specsText: "单规格",
                specsShow: !1,
                ruleShow: !1,
                cateLists: [],
                status: 0,
                statusList: [{
                  id: 0,
                  name: "下架"
                }, {
                  id: 1,
                  name: "上架"
                }],
                cutoffstatusText: "请选择截止时间类型",
                cutoffstatus: 0,
                cutoffstatusList: [{
                  id: 0,
                  name: "固定时间"
                }, {
                  id: 1,
                  name: "购买后有效期"
                }],
                expresseText: "请选择快递模板",
                express: 0,
                expressList: [],
                usestatusText: "请选择消费方式",
                usestatusList: [{
                  id: 0,
                  name: "到店消费"
                }, {
                  id: 1,
                  name: "快递上门"
                }, {
                  id: 2,
                  name: "同时支持快递与核销"
                }],
                presettagsText: "",
                presettagsArrary: [],
                presettagsList: [],
                presettagsType: "bottom",
                presettagsShow: !1,
                thumb: "",
                thumbs: [],
                cateText: "请选择商品分类",
                cateList: [],
                goodsNameText: "请输入商品名称",
                returnTexts: "",
                showTitleText: "",
                inputShow: !1,
                inputShowType: "center",
                typeList: [],
                type: 0,
                cate: [0],
                cateTwo: [0, 0],
                goodsInfo: {
                  type: "",
                  storeid: "",
                  id: "",
                  goods: {}
                },
                phoneHight: null,
                scrollHeight: null,
                typeText: "抢购",
                id: "",
                startTime: "",
                endTime: "",
                graceEditorMenuShow1: !1,
                graceEditorTitle1: "",
                graceEditorItems1: [],
                graceEditorFoucsIndex1: 0,
                graceEditorMenuShow: !1,
                graceEditorTitle: "",
                graceEditorItems: [],
                graceEditorFoucsIndex: 0,
                isSpecBox: !1
              }
            },
            onLoad: function(e) {
              var o = this;
              t.getSystemInfo({
                success: function(t) {
                  o.phoneHight = t.windowHeight + "px", o.scrollHeight = t.windowHeight - 30 + "px", o.secollSpecHeight = t.windowHeight - 180 + "px"
                }
              }), e.type ? o.slectDis = !0 : o.slectDis = !1, o.goodsInfo.type = e.type, o.goodsInfo.storeid = t.getStorageSync("checkStoreid"), o.goodsInfo.id = e.id, o.init(o.goodsInfo.type, t.getStorageSync("checkStoreid"), o.goodsInfo.id)
            },
            computed: {},
            methods: (s = {
              handlepeoplenum: function(e) {
                var o = this;
                console.info("peoplenum", Number(o.goodsInfo.goods.peoplenum)), Number(o.goodsInfo.goods.peoplenum) < 2 && (t.showToast({
                  icon: "none",
                  title: "拼团人数最小为2",
                  duration: 2e3
                }), o.goodsInfo.goods.peoplenum = 2)
              },
              handleprice: function(t) {
                var e = this;
                e.goodsInfo.goods.price = e.goodsInfo.goods.price.match(/^\d*(\.?\d{0,2})/g)[0] || null
              },
              handlealoneprice: function(t) {
                var e = this;
                e.goodsInfo.goods.aloneprice = e.goodsInfo.goods.aloneprice.match(/^\d*(\.?\d{0,2})/g)[0] || null
              },
              handleoldprice: function(t) {
                var e = this;
                e.goodsInfo.goods.oldprice = e.goodsInfo.goods.oldprice.match(/^\d*(\.?\d{0,2})/g)[0] || null
              },
              handleretainage: function(t) {
                var e = this;
                e.goodsInfo.goods.retainage = e.goodsInfo.goods.retainage.match(/^\d*(\.?\d{0,2})/g)[0] || null
              },
              dataTimeShow1: function() {
                var t = this;
                t.$refs.dateTime.show()
              },
              dataTimeShow2: function() {
                var t = this;
                t.$refs.dateTime1.show()
              },
              dataTimeShow3: function() {
                var t = this;
                t.$refs.dateTime2.show()
              },
              checkStar: function(t) {
                var e = this;
                e.starttimeText = t.result, e.goodsInfo.goods.starttime = e.getDataTime(t.result)
              },
              checkEnd: function(t) {
                var e = this;
                e.endtimeText = t.result, e.goodsInfo.goods.endtime = e.getDataTime(t.result)
              },
              checkClose: function(t) {
                var e = this;
                e.closetimeText = t.result, e.goodsInfo.goods.cutofftime = e.getDataTime(t.result)
              },
              getDataTime: function(t) {
                var e = new Date(t),
                  o = e.getTime();
                return o
              },
              getTimeData: function(t) {
                var e = new Date(t),
                  o = e.getFullYear().toString() + "-",
                  s = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1).toString() + "-",
                  a = (e.getDate() + 1 < 10 ? "0" + e.getDate() : e.getDate()).toString() + " ",
                  i = (e.getHours() + 1 < 10 ? "0" + e.getHours() : e.getHours()).toString() + ":",
                  n = (e.getMinutes() + 1 < 10 ? "0" + e.getMinutes() : e.getMinutes()).toString() + ":",
                  d = (e.getSeconds() + 1 < 10 ? "0" + e.getSeconds() : e.getSeconds()).toString(),
                  r = e.getFullYear().toString(),
                  g = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1).toString(),
                  u = (e.getDate() + 1 < 10 ? "0" + e.getDate() : e.getDate()).toString(),
                  c = (e.getHours() + 1 < 10 ? "0" + e.getHours() : e.getHours()).toString(),
                  f = (e.getMinutes() + 1 < 10 ? "0" + e.getMinutes() : e.getMinutes()).toString(),
                  l = (e.getSeconds() + 1 < 10 ? "0" + e.getSeconds() : e.getSeconds()).toString(),
                  p = [];
                return p.push(r), p.push(g), p.push(u), p.push(c), p.push(f), p.push(l), {
                  label: o + s + a + i + n + d,
                  value: p
                }
              },
              closeOptions: function() {
                var t = this;
                t.optionsShow = !1, t.isSpecBox = !1
              },
              optionsPopShow: function() {
                var t = this;
                t.optionsShow = !0, t.isSpecBox = !0
              },
              submitSpecs: function() {
                for (var e = this, o = 0; o < e.specList.length; o++) {
                  if ("" == e.specList[o].title || 0 == e.specList[o].items.length) return !1, void t.showToast({
                    icon: "none",
                    title: "请填写规格名称",
                    duration: 2e3
                  });
                  if ("" != e.specList[o].title || 0 != e.specList[o].items.length)
                    for (var s = 0; s < e.specList[o].items.length; s++)
                      if ("" != e.specList[o].items[s].title) !0;
                      else if ("" == e.specList[o].items[s].title) return !1, void t.showToast({
                    icon: "none",
                    title: "请填写规格名称",
                    duration: 2e3
                  })
                }

                function a(t) {
                  var o = JSON.stringify(t),
                    s = new e.$util.Base64,
                    a = s.encode(o);
                  return a
                }
                var n = a(e.specList),
                  d = [];
                d = e.goodsInfo.goods.options && 0 != e.goodsInfo.goods.options.length ? a(e.goodsInfo.goods.options) : [];
                var r = {
                  spec: n,
                  options: d
                };
                i.default._post_form("&p=Store&do=specToOption", r, function(t) {
                  e.goodsInfo.goods.options = t.data
                }), e.goodsInfo.goods.spec = JSON.parse(JSON.stringify(e.specList)), 0 != e.goodsInfo.goods.spec.length ? (e.goodsInfo.goods.optionstatus = 1, e.specsText = "多规格") : 0 == e.goodsInfo.goods.spec.length && (e.goodsInfo.goods.optionstatus = 0, e.specsText = "单规格"), e.specsShow = !1, e.isSpecBox = !1
              },
              addBranchSpecs: function(t) {
                var e = this;
                console.info("specList", e.specList);
                var o = {
                  id: 0,
                  title: ""
                };
                e.specList[t].items.push(o)
              },
              addSpecs: function() {
                var t = this,
                  e = {
                    id: 0,
                    title: "",
                    items: []
                  };
                t.specList.push(e)
              },
              closeSpecs: function() {
                var t = this;
                t.specList = JSON.parse(JSON.stringify(t.goodsInfo.goods.spec)), t.specsShow = !1, t.isSpecBox = !1
              },
              specsPopShow: function() {
                var t = this;
                t.specsShow = !0, t.isSpecBox = !0
              },
              pushRule: function() {
                var t = this,
                  e = {
                    rule_pice: "",
                    rule_start: "",
                    rule_end: ""
                  };
                t.goodsInfo.goods.rules.push(e)
              },
              closeRule: function() {
                var t = this;
                t.ruleShow = !1
              },
              rulePopShow: function() {
                var t = this;
                t.ruleShow = !0
              },
              submitTest: function(e) {
                var o = !0;
                return "" == e && (o = !1, t.showToast({
                  icon: "none",
                  title: "请完善商品信息",
                  duration: 2e3
                })), o
              },
              saveGoods: function() {
                var t = this;
                if (t.bengF = 1, 1 !== t.submitType) {
                  var e = {
                    aloneprice: t.goodsInfo.goods.aloneprice,
                    type: t.goodsInfo.type,
                    storeid: t.goodsInfo.storeid,
                    id: t.goodsInfo.id || "",
                    name: t.goodsInfo.goods.name,
                    unit: t.goodsInfo.goods.unit,
                    cateid: t.goodsInfo.goods.cateid,
                    starttime: t.goodsInfo.goods.starttime,
                    endtime: t.goodsInfo.goods.endtime,
                    thumb: t.goodsInfo.goods.thumb,
                    thumbs: t.goodsInfo.goods.thumbs,
                    optionstatus: t.goodsInfo.goods.optionstatus,
                    price: t.goodsInfo.goods.price,
                    oldprice: t.goodsInfo.goods.oldprice,
                    retainage: t.goodsInfo.goods.retainage,
                    appointment: t.goodsInfo.goods.appointment,
                    tag: t.goodsInfo.goods.tag,
                    op_one_limit: t.goodsInfo.goods.op_one_limit,
                    num: t.goodsInfo.goods.num,
                    usestatus: t.goodsInfo.goods.usestatus,
                    expressid: t.goodsInfo.goods.expressid,
                    cutoffstatus: t.goodsInfo.goods.cutoffstatus,
                    cutofftime: t.goodsInfo.goods.cutofftime,
                    cutoffday: t.goodsInfo.goods.cutoffday,
                    describe: t.goodsInfo.goods.describe,
                    detail: t.goodsInfo.goods.detail,
                    status: t.goodsInfo.goods.status,
                    spec: t.goodsInfo.goods.spec,
                    options: t.goodsInfo.goods.options,
                    rules: t.goodsInfo.goods.rules,
                    helplimit: t.goodsInfo.goods.helplimit,
                    dayhelpcount: t.goodsInfo.goods.dayhelpcount,
                    joinlimit: t.goodsInfo.goods.joinlimit,
                    onlytimes: t.goodsInfo.goods.onlytimes,
                    grouptime: t.goodsInfo.goods.grouptime,
                    peoplenum: t.goodsInfo.goods.peoplenum
                  };
                  "0" == e.optionstatus || "1" == e.optionstatus && (e.spec = s(e.spec), e.options = s(e.options)), "bargain" == e.type && 0 != e.rules.length && (e.rules = s(e.rules)), console.log(t.publicList);
                  for (var o = 0; o < t.publicList.length; o++)
                    if (t.adopt = t.submitTest(e[t.publicList[o]]), 0 == t.adopt) return void console.info("请求终止");
                  t.submitType = 1, i.default._post_form("&p=Store&do=saveGoods", e, function(e) {
                    0 === e.errno && i.default.showSuccess("保存成功", function() {
                      t.submitType = 0, i.default.navigationTo({
                        url: "pages/subPages/merchant/merchantOrder/merchantOrder"
                      })
                    })
                  })
                }

                function s(e) {
                  var o = JSON.stringify(e),
                    s = new t.$util.Base64,
                    a = s.encode(o);
                  return a
                }
              },
              changeCateTwo: function(t) {
                var e = this;
                console.info("value", t.detail.value), e.goodsInfo.goods.cateid = e.cateList[t.detail.value[0]].id;
                var o = e.cateLists[1];
                e.goodsInfo.goods.cateid = o[t.detail.value[1]].id, "暂无分类" == o[t.detail.value[1]].name ? e.cateText = e.cateList[t.detail.value[0]].name : e.cateText = e.cateList[t.detail.value[0]].name + "|" + o[t.detail.value[1]].name
              },
              cleanSpecs: function(t, e) {
                console.info("indexss", e);
                var o = this;
                if (void 0 != e) {
                  console.info(1);
                  for (var s = 0; s < o.specList.length; s++)
                    if (s == t)
                      for (var a = 0; a < o.specList[s].items.length; a++) a == e && o.specList[s].items.splice(s, 1)
                } else {
                  console.info(2);
                  for (var i = 0; i < o.specList.length; i++) i == t && o.specList.splice(i, 1)
                }
              },
              changeStatus: function(t) {
                var e = this;
                e.status = t.detail.value, e.statusText = e.statusList[t.detail.value].name, e.goodsInfo.goods.status = e.statusList[t.detail.value].id, console.info(e.status), console.info(e.statusText), console.info(e.goodsInfo.goods.status)
              },
              changeCutoffstatus: function(t) {
                var e = this;
                e.cutoffstatus = t.detail.value, e.cutoffstatusText = e.cutoffstatusList[t.detail.value].name, e.goodsInfo.goods.cutoffstatus = e.cutoffstatusList[t.detail.value].id
              },
              changeExpress: function(t) {
                var e = this;
                e.expresse = t.detail.value, e.expresseText = e.expressList[t.detail.value].name, e.goodsInfo.goods.expressid = e.expressList[t.detail.value].id
              },
              changeUsestatus: function(t) {
                var e = this;
                e.goodsInfo.goods.usestatus = e.usestatusList[t.detail.value].id, e.usestatusText = e.usestatusList[t.detail.value].name
              },
              checkPresettags: function(t) {
                var e = this;
                if (e.presettagsText = "", -1 != e.goodsInfo.goods.tag.indexOf(t.id))
                  for (var o = 0; o < e.goodsInfo.goods.tag.length; o++) e.goodsInfo.goods.tag[o] == t.id && (e.goodsInfo.goods.tag.splice(o, 1), e.presettagsArrary.splice(o, 1));
                else e.goodsInfo.goods.tag.push(t.id), e.presettagsArrary.push(t.title);
                if (0 == e.presettagsArrary.length) e.presettagsText = "请选择标签";
                else if (0 != e.presettagsArrary.length)
                  for (var s = 0; s < e.presettagsArrary.length; s++) s != e.presettagsArrary.length - 1 ? e.presettagsText += e.presettagsArrary[s] + "|" : s == e.presettagsArrary.length - 1 && (e.presettagsText += e.presettagsArrary[s])
              },
              closePresettags: function() {
                var t = this;
                t.presettagsShow = !1
              },
              showPresettagsPop: function() {
                var t = this;
                t.presettagsShow = !0
              },
              closeImg: function(t, e) {
                var o = this;
                if (1 == t) o.thumb = "", o.goodsInfo.goods.thumb = "";
                else if (2 == t)
                  for (var s = 0; s < o.thumbs.length; s++) s == e && (o.thumbs.splice(s, 1), o.goodsInfo.goods.thumbs.splice(s, 1))
              },
              updataImg: function(t) {
                var e = this;
                wx.chooseImage({
                  count: 6,
                  sourceType: ["album", "camera"],
                  success: function() {
                    var o = g(a.default.mark(function o(s) {
                      var n, d;
                      return a.default.wrap(function(o) {
                        while (1) switch (o.prev = o.next) {
                          case 0:
                            console.info(s), n = 0;
                          case 2:
                            if (!(n < s.tempFilePaths.length)) {
                              o.next = 11;
                              break
                            }
                            return o.next = 5, i.default._upLoad(s.tempFilePaths[n]);
                          case 5:
                            d = o.sent, 1 == t && (e.thumb = d.data.img, e.goodsInfo.goods.thumb = d.data.img), 2 == t && (e.thumbs.push(d.data.img), e.goodsInfo.goods.thumbs.push(d.data.img));
                          case 8:
                            n++, o.next = 2;
                            break;
                          case 11:
                          case "end":
                            return o.stop()
                        }
                      }, o, this)
                    }));

                    function s(t) {
                      return o.apply(this, arguments)
                    }
                    return s
                  }()
                })
              },
              changeCutofftime: function(t) {
                var e = this;
                e.goodsInfo.goods.cutofftime = t.detail.value
              },
              changeCate: function(t) {
                var e = this;
                e.cate = t.detail.value, e.goodsInfo.goods.cateid = e.cateList[t.detail.value].id, e.cateText = e.cateList[t.detail.value].name
              },
              returnText: function(t) {
                var e = this;
                e.goodsInfo.goods.name = t, "" != t ? e.goodsNameText = t : "" == t && (e.goodsNameText = "请输入商品名称"), e.inputShow = !1
              },
              showInput: function(t) {
                var e = this;
                e.showTitleText = t, e.inputShow = !0
              },
              closeInputPop: function() {
                var t = this;
                t.inputShow = !1
              },
              changeType: function(t) {
                var e = this;
                e.cateLists = [], e.presettagsArrary = [], e.goodsInfo.cateid = "", e.type = t.detail.value, e.goodsInfo.type = e.typeList[t.detail.value].value, e.cate = 0, e.cateTwo = [0, 0], e.cateText = "请选择商品分类", e.startValue = [], e.endValue = [], e.createGoods(e.goodsInfo.type || "", e.goodsInfo.storeid || "", e.goodsInfo.id || "")
              },
              init: function(t, e, o) {
                var s = this;
                s.createGoods(t, e, o)
              },
              createGoods: function(t, e, o) {
                var s = this;
                console.info("type", t);
                var a = {
                  type: s.goodsInfo.type || t || "",
                  storeid: s.goodsInfo.storeid || e || "",
                  id: s.goodsInfo.id || o || ""
                };
                i.default._post_form("&p=Store&do=createGoods", a, function(e) {
                  if (s.goodsInfo["goods"] = e.data.goods, 0 == s.typeList.length)
                    for (var o = 0; o < e.data.type.length; o++) {
                      var a = "";
                      "rush" == e.data.type[o] ? a = "抢购" : "groupon" == e.data.type[o] ? a = "团购" : "fightgroup" == e.data.type[o] ? a = "拼团" : "bargain" == e.data.type[o] && (a = "砍价");
                      var i = {
                        name: a,
                        value: e.data.type[o]
                      };
                      s.typeList.push(i)
                    }
                  if (t)
                    for (var n = 0; n < s.typeList.length; n++) t == s.typeList[n].value && (s.type = n, s.goodsInfo.type = s.typeList[n].value);
                  else if (void 0 == t) return console.info("type"), s.type = 0, console.info("typeList", s.typeList), s.goodsInfo.type = s.typeList[0].value, void s.createGoods(s.typeList[0].value, s.storeid, s.id);
                  s.goodsInfo.goods.starttime = 1e3 * e.data.goods.starttime, s.goodsInfo.goods.endtime = 1e3 * e.data.goods.endtime, s.goodsInfo.goods.cutofftime = 1e3 * e.data.goods.cutofftime, s.thumb = e.data.goods.thumb, s.thumbs = JSON.parse(JSON.stringify(e.data.goods.thumbs));
                  var d = JSON.stringify(e.data.goods.spec);
                  if (s.specList = JSON.parse(d), s.cateList = e.data.cate, s.presettagsList = e.data.presettags, s.expressList = e.data.express, "" == e.data.goods.name ? s.goodsNameText = "请输入商品名称" : "" != e.data.goods.name && (s.goodsNameText = e.data.goods.name), e.data.cate.length > 0 && (s.cate = 0, s.goodsInfo.goods.cateid = e.data.cate[0].id, s.cateText = e.data.cate[0].name), "" == e.data.goods.starttime) s.goodsInfo.goods.starttime = "", s.starttimeText = "请选择开始时间", s.startValue = [];
                  else if ("" != e.data.goods.starttime) {
                    s.starttimeText = s.getTimeData(e.data.goods.starttime).label;
                    for (var r = s.getTimeData(e.data.goods.starttime).value, g = 0; g < r.length; g++) s.startValue.push(r[g]);
                    console.info("startValue", s.startValue)
                  }
                  if ("" == e.data.goods.endtime) s.goodsInfo.goods.endtime = "", s.endtimeText = "请选择结束时间", s.endValue = [];
                  else if ("" != e.data.goods.endtime) {
                    s.endtimeText = s.getTimeData(e.data.goods.endtime).label;
                    for (var u = s.getTimeData(e.data.goods.endtime).value, c = 0; c < u.length; c++) s.endValue.push(u[c])
                  }
                  if ("" == e.data.goods.cutofftime ? (s.goodsInfo.goods.cutofftime = "", s.closetimeText = "请选择截止时间", s.endValue = []) : "" != e.data.goods.endtime && (s.closetimeText = s.getTimeData(e.data.goods.cutofftime).label), "0" != e.data.goods.optionstatus ? s.specsText = "多规格" : "0" == e.data.goods.optionstatus && (s.specsText = "单规格"), 0 == s.goodsInfo.goods.tag.length) s.presettagsText = "请选择标签";
                  else if (0 != s.goodsInfo.goods.tag.length) {
                    for (var f = 0; f < e.data.goods.tag.length; f++)
                      for (var l = 0; l < s.presettagsList.length; l++) e.data.goods.tag[f] == s.presettagsList[l].id && s.presettagsArrary.push(s.presettagsList[l].title);
                    for (var p = 0; p < s.presettagsArrary.length; p++) p != s.presettagsArrary.length - 1 ? s.presettagsText += s.presettagsArrary[p] + "|" : p == s.presettagsArrary.length - 1 && (s.presettagsText += s.presettagsArrary[p])
                  }
                  if ("" == e.data.goods.usestatus ? (s.goodsInfo.goods.usestatus = s.usestatusList[0].id, s.usestatusText = s.usestatusList[0].name, console.info("usestatus", s.goodsInfo.goods.usestatus), console.info("usestatusText", s.usestatusText)) : "" != e.data.goods.usestatus && (s.goodsInfo.goods.usestatus = e.data.goods.usestatus, s.usestatusText = s.usestatusList[e.data.goods.usestatus].name), 0 == e.data.goods.cutoffstatus ? (s.goodsInfo.goods.cutoffstatus = 0, s.cutoffstatus = 0, s.cutoffstatusText = s.cutoffstatusList[s.cutoffstatus].name) : 1 == e.data.goods.cutoffstatus && (s.goodsInfo.goods.cutoffstatus = 1, s.cutoffstatus = 1, s.cutoffstatusText = s.cutoffstatusList[s.cutoffstatus].name), "" == e.data.goods.expressid) s.express = 0, s.goodsInfo.goods.expressid = s.expressList[0].id, s.expresseText = s.expressList[0].name;
                  else if ("" != e.data.goods.expressid)
                    for (var h = 0; h < s.expressList.length; h++) e.data.goods.expressid == s.expressList[h].id && (s.express = h, s.goodsInfo.goods.expressid = s.expressList[h].id, s.expresseText = s.expressList[h].name);
                  if (console.info("statusList", s.statusList), "" == e.data.goods.status) s.goodsInfo.goods.status = s.statusList[0].id, s.statusText = s.statusList[0].name, s.status = 0;
                  else if ("" != e.data.goods.status) {
                    var m = Number(e.data.goods.status);
                    s.goodsInfo.goods.status = s.statusList[m].id, s.statusText = s.statusList[m].name, s.status = m
                  }
                  "rush" != e.data.goods.type && "rush" != s.goodsInfo.type || (s.priceText = "抢购价"), "groupon" != e.data.goods.type && "groupon" != s.goodsInfo.type || (s.priceText = "团购价"), "fightgroup" != e.data.goods.type && "fightgroup" != s.goodsInfo.type || (s.priceText = "组团价"), "bargain" != e.data.goods.type && "bargain" != s.goodsInfo.type || (s.priceText = "底价")
                })
              },
              showGraceEditorMenu1: function() {
                this.graceEditorMenuShow1 = !0
              },
              graceEditorAddItem1: function(e) {
                var o = this;
                this.graceEditorMenuShow1 = !1;
                var s = e.currentTarget.dataset.type;
                "img" == s ? t.chooseImage({
                  success: function(t) {
                    for (var e = t.tempFilePaths, a = 0; a < e.length; a++) o.graceEditorItems1.push({
                      type: s,
                      content: e[a],
                      status: "needUpload"
                    })
                  }
                }) : "link" == s ? this.graceEditorItems1.push({
                  type: s,
                  content: "http://"
                }) : this.graceEditorItems1.push({
                  type: s,
                  content: ""
                })
              },
              graceEditorInput1: function(t) {
                var e = t.currentTarget.dataset.index,
                  o = t.detail.value;
                "" != o ? this.graceEditorItems1[e].content = o : this.graceEditorItems1.splice(e, 1)
              },
              deleteItem1: function(e) {
                var o = this,
                  s = e.currentTarget.dataset.index;
                t.showModal({
                  title: "提示",
                  content: "确定要删除项目吗?",
                  success: function(t) {
                    t.confirm && o.graceEditorItems1.splice(s, 1)
                  }
                })
              },
              submit: function() {
                for (var t = [], e = 0; e < this.graceEditorItems1.length; e++) "img" == this.graceEditorItems1[e].type && "needUpload" == this.graceEditorItems1[e].status && t.push(e);
                t.length > 0 ? this.upLoadImg1(0, t) : this.getDataAndSubmit1()
              },
              getDataAndSubmit1: function() {
                "" != this.graceEditorTitle1 ? this.graceEditorItems1.length < 1 ? t.showToast({
                  title: "请填写内容",
                  icon: "none"
                }) : (console.log("标题 : " + this.graceEditorTitle1), console.log("内容 : " + this.graceEditorItems1), console.log("内容 : " + JSON.stringify(this.graceEditorItems1))) : t.showToast({
                  title: "请填写标题",
                  icon: "none"
                })
              },
              upLoadImg1: function(e, o) {
                var s = this;
                t.showLoading({
                  title: "图片上传中"
                });
                t.uploadFile({
                  url: "https://unidemo.dcloud.net.cn/upload",
                  filePath: s.graceEditorItems1[o[e]].content,
                  fileType: "image",
                  name: "data",
                  success: function(t) {
                    console.log(t), t = JSON.parse(t.data), s.graceEditorItems1[o[e]].content = "上传成功服务器返回的图片地址,根据api情况自己写", e++, e < o.length ? s.upLoadImg1(e, o) : s.getDataAndSubmit1()
                  },
                  complete: function() {
                    t.hideLoading()
                  }
                })
              },
              gotoInfo: function() {
                t.navigateTo({
                  url: "./editerInfo"
                })
              },
              showGraceEditorMenu: function() {
                this.graceEditorMenuShow = !0
              },
              graceEditorAddItem: function(e) {
                var o = this;
                this.graceEditorMenuShow = !1;
                var s = e.currentTarget.dataset.type;
                "img" == s ? t.chooseImage({
                  success: function(t) {
                    for (var e = t.tempFilePaths, a = 0; a < e.length; a++) o.graceEditorItems.push({
                      type: s,
                      content: e[a],
                      status: "needUpload"
                    })
                  }
                }) : "link" == s ? this.graceEditorItems.push({
                  type: s,
                  content: "http://"
                }) : this.graceEditorItems.push({
                  type: s,
                  content: ""
                })
              },
              graceEditorInput: function(t) {
                var e = t.currentTarget.dataset.index,
                  o = t.detail.value;
                "" != o ? this.graceEditorItems[e].content = o : this.graceEditorItems.splice(e, 1)
              },
              deleteItem: function(e) {
                var o = this,
                  s = e.currentTarget.dataset.index;
                t.showModal({
                  title: "提示",
                  content: "确定要删除项目吗?",
                  success: function(t) {
                    t.confirm && o.graceEditorItems.splice(s, 1)
                  }
                })
              }
            }, d(s, "submit", function() {
              for (var t = [], e = 0; e < this.graceEditorItems.length; e++) "img" == this.graceEditorItems[e].type && "needUpload" == this.graceEditorItems[e].status && t.push(e);
              t.length > 0 ? this.upLoadImg(0, t) : this.getDataAndSubmit()
            }), d(s, "getDataAndSubmit", function() {
              "" != this.graceEditorTitle ? this.graceEditorItems.length < 1 ? t.showToast({
                title: "请填写内容",
                icon: "none"
              }) : (console.log("标题 : " + this.graceEditorTitle), console.log("内容 : " + this.graceEditorItems), console.log("内容 : " + JSON.stringify(this.graceEditorItems))) : t.showToast({
                title: "请填写标题",
                icon: "none"
              })
            }), d(s, "upLoadImg", function(e, o) {
              var s = this;
              t.showLoading({
                title: "图片上传中"
              });
              t.uploadFile({
                url: "https://unidemo.dcloud.net.cn/upload",
                filePath: s.graceEditorItems[o[e]].content,
                fileType: "image",
                name: "data",
                success: function(t) {
                  console.log(t), t = JSON.parse(t.data), s.graceEditorItems[o[e]].content = "上传成功服务器返回的图片地址,根据api情况自己写", e++, e < o.length ? s.upLoadImg(e, o) : s.getDataAndSubmit()
                },
                complete: function() {
                  t.hideLoading()
                }
              })
            }), d(s, "gotoInfo", function() {
              t.navigateTo({
                url: "./editerInfo"
              })
            }), s)
          };
        e.default = l
      }).call(this, o("543d")["default"])
    },
    8314: function(t, e, o) {},
    f535: function(t, e, o) {
      "use strict";
      o.r(e);
      var s = o("819a"),
        a = o.n(s);
      for (var i in s) "default" !== i && function(t) {
        o.d(e, t, function() {
          return s[t]
        })
      }(i);
      e["default"] = a.a
    }
  },
  [
    ["23a2", "common/runtime", "common/vendor"]
  ]
]);