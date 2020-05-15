var webim = require("../../../resource/js/chat/webim.js"), webimhandler = require("../../../resource/js/chat/webim_handler.js"), tls = require("../../../resource/js/chat/tls.js"), init = function(e, i, t, n) {
    tls.init({
        sdkappid: i.sdk_appid
    }), this.initIM(e, i, t, n);
}, initIM = function(e, i, t, n) {
    webimhandler.init({
        accountMode: 1,
        accountType: "",
        sdkAppID: i.sdk_appid,
        avChatRoomId: i.chat_id,
        selType: webim.SESSION_TYPE.GROUP,
        selToID: i.chat_id,
        selSess: null
    });
    var o = {
        sdkAppID: i.sdk_appid,
        appIDAt3rd: i.sdk_appid,
        accountType: "",
        identifier: i.identifier,
        identifierNick: e.nickname,
        avatar: e.avatar,
        user_id: e.id,
        userSig: i.usersig,
        live_id: t,
        content_type: 0,
        random: 0
    }, r = (webimhandler.onDestoryGroupNotify, webimhandler.onRevokeGroupNotify, webimhandler.onCustomGroupNotify, 
    {
        onConnNotify: function(e) {
            switch (e.ErrorCode) {
              case webim.CONNECTION_STATUS.ON:
                break;

              case webim.CONNECTION_STATUS.OFF:
                webim.Log.warn("连接已断开，无法收到新消息，请检查下你的网络是否正常");
                break;

              default:
                webim.Log.error("未知连接状态,status=" + e.ErrorCode);
            }
        },
        onBigGroupMsgNotify: function(e) {
            webimhandler.onBigGroupMsgNotify(e, function(e) {
                n.receiveMsgs(e);
            });
        },
        onMsgNotify: webimhandler.onMsgNotify,
        onGroupSystemNotifys: webimhandler.onGroupSystemNotifys,
        onGroupInfoChangeNotify: webimhandler.onGroupInfoChangeNotify
    });
    webimhandler.sdkLogin(o, r, {
        isAccessFormalEnv: !0,
        isLogOn: !1
    }, i.chat_id);
}, receiveMsgs = function(e) {
    var i = e.content, t = i.match(/data\=(.*?)\,\s+desc\=(.*?)\,\s+ext\=(.*)/i);
    if (t) {
        var n = t[3], o = (n = JSON.parse(n)).random, r = n.nickname, a = n.user_id, s = n.live_id, d = {};
        return d.content = t[1], d.nickname = r, d.random = o, d.live_id = s, d.user_id = a, 
        d.content_type = n.content_type, 4 == i.content_type && (d.avatar = i.avatar, d.gift_id = i.gift_id, 
        d.gift_img = i.gift_img, d.gift_num = i.gift_num), 2 == i.content_type && (d.reward_title = i.reward_title, 
        d.reward_logo = i.reward_logo, d.reward_text = i.reward_text, d.reward_amount = i.reward_amount, 
        d.reward_bottom_text = i.reward_bottom_text), d;
    }
}, sendMsg = function(e) {
    webimhandler.onSendMsg(e, function() {});
}, logout = function() {
    webimhandler.logout();
};

module.exports = {
    init: init,
    initIM: initIM,
    receiveMsgs: receiveMsgs,
    sendMsg: sendMsg,
    logout: logout
};