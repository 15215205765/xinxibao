Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = request;

var _util = require("./util.js"), _util2 = _interopRequireDefault(_util), _autuLogin = require("./autuLogin.js"), _autuLogin2 = _interopRequireDefault(_autuLogin);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var config = require("./../../siteinfo.js");

function request(i, n, o, e) {
    var t = e.noAuth, u = void 0 !== t && t, a = e.noVerify, r = void 0 !== a && a, s = getApp().getDomain() + "addons/shimmer_liveshop/api/" + config.uniacid + "/2", l = {
        "content-type": "application/json"
    };
    return u || _util2.default.checkLogin() ? (getApp().globalData.token && (l["Authori-zation"] = "Bearer " + getApp().globalData.token), 
    new Promise(function(t, u) {
        wx.request({
            url: s + "/" + i,
            method: n || "GET",
            header: l,
            data: o || {},
            success: function(e) {
                r ? t(e.data, e) : 200 == e.data.status ? t(e.data, e) : ("" + e.data.status).includes(4e4) ? (_util2.default.logout(), 
                _util2.default.checkLogin()) : u(e.data.msg || "系统错误");
            },
            fail: function(e) {
                u("请求失败");
            }
        });
    })) : (0, _autuLogin2.default)().then(function(e) {
        return request(i, n, o, {
            noAuth: u,
            noVerify: r
        });
    });
}

[ "options", "get", "post", "put", "head", "delete", "trace", "connect" ].forEach(function(i) {
    request[i] = function(e, t, u) {
        return request(e, i, t, u || {});
    };
});