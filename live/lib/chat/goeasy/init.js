var GoEasy = require("../../../resource/js/goeasy/goeasy-1.0.3"), init = function(e, n, t, o) {
    var a = Math.round(4294967296 * Math.random()), i = {
        content: e.nickname + "进入直播间",
        content_type: 99,
        nickname: e.nickname,
        user_id: e.id,
        random: a
    };
    getApp().globalData.goEasy = new GoEasy({
        host: "" + n.host,
        userId: "" + e.id,
        userData: JSON.stringify(e),
        appkey: "" + n.common_key,
        onConnected: function() {
            getApp().globalData.goEasy.publish({
                channel: "" + n.chat_id,
                message: JSON.stringify(i)
            });
        },
        onDisconnected: function() {
            console.log("连接断开！");
        },
        onConnectFailed: function(e) {
            console.log("连接失败或错误！", e);
        }
    }), getApp().globalData.goEasy.subscribe({
        channel: "" + t,
        onMessage: function(e) {
            o.receiveMsgs(e);
        }
    });
}, receiveMsgs = function(e) {
    var n = JSON.parse(e.content), t = {};
    return t.content = n.content, t.nickname = n.nickname, t.random = n.random, t.live_id = e.channel, 
    t.user_id = n.user_id, 4 == n.content_type && (t.avatar = n.avatar, t.gift_id = n.gift_id, 
    t.gift_img = n.gift_img, t.gift_num = n.gift_num), 2 == n.content_type && (t.reward_title = n.reward_title, 
    t.reward_logo = n.reward_logo, t.reward_text = n.reward_text, t.reward_amount = n.reward_amount, 
    t.reward_bottom_text = n.reward_bottom_text), t.content_type = n.content_type, t;
}, sendMsg = function(e, n) {
    getApp().globalData.goEasy.publish({
        channel: "" + n.chat_id,
        message: JSON.stringify(e)
    });
}, logout = function(e) {
    console.log(1111111, e.chat_id), getApp().globalData.goEasy.unsubscribe({
        channel: "" + e.chat_id,
        onSuccess: function(e) {}
    });
}, disconnect = function(e) {
    console.log(1111111, e.chat_id), getApp().globalData.goEasy.disconnect({
        channel: "" + e.chat_id,
        onSuccess: function(e) {
            console.log(111111, "我退出了");
        }
    });
};

module.exports = {
    init: init,
    receiveMsgs: receiveMsgs,
    sendMsg: sendMsg,
    logout: logout
};