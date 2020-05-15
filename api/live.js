Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBindPageLiveInfo = getBindPageLiveInfo, exports.getBindLive = getBindLive, 
exports.getApplyInfo = getApplyInfo, exports.getAnchorInviation = getAnchorInviation, 
exports.applyAnchor = applyAnchor, exports.applyFormAnchor = applyFormAnchor, exports.applyAnchorPay = applyAnchorPay, 
exports.getCatetory = getCatetory, exports.getCatetoryLives = getCatetoryLives, 
exports.waterfallLiveLists = waterfallLiveLists, exports.getLiveDetail = getLiveDetail, 
exports.getChatConfig = getChatConfig, exports.getLiveGoods = getLiveGoods, exports.getCommentsStore = getCommentsStore, 
exports.getCommentsLists = getCommentsLists, exports.getLiveCommentsLists = getLiveCommentsLists, 
exports.updateOnlineStatus = updateOnlineStatus, exports.followLive = followLive, 
exports.liveStart = liveStart, exports.liveEnd = liveEnd, exports.liveEndCount = liveEndCount, 
exports.getAnchorInfo = getAnchorInfo, exports.getAnchorLiveInfo = getAnchorLiveInfo, 
exports.getPushLiveInfo = getPushLiveInfo, exports.getStream = getStream, exports.setUserBlack = setUserBlack, 
exports.setUserShutup = setUserShutup, exports.getShutupLists = getShutupLists, 
exports.getBlackLists = getBlackLists, exports.searchGoods = searchGoods, exports.addLiveGoods = addLiveGoods, 
exports.delLiveGoods = delLiveGoods, exports.exposure = exposure, exports.changTop = changTop, 
exports.getpic = getpic, exports.addLike = addLike, exports.liveOrders = liveOrders, 
  exports.getLiveQrcode = getLiveQrcode, exports.getLivePoster = getLivePoster, exports.getAnchorQrcode = getAnchorQrcode, 
exports.getLiveNum = getLiveNum, exports.anchorCenter = anchorCenter, exports.getAnchorLiveLogs = getAnchorLiveLogs, 
exports.getAnchorCenterGoods = getAnchorCenterGoods, exports.getLivePlayback = getLivePlayback, 
exports.createStreamLogs = createStreamLogs, exports.createLiveNotice = createLiveNotice, 
exports.noticeLiveInfo = noticeLiveInfo, exports.liveSubscribe = liveSubscribe, 
exports.liveUnSubscribe = liveUnSubscribe, exports.getLivePlayerLives = getLivePlayerLives, 
exports.getLiveGifts = getLiveGifts, exports.payGift = payGift, exports.giftRank = giftRank, 
  exports.getPreLiveId = getPreLiveId, exports.getNextLiveId = getNextLiveId, exports.liveYzygGoods = liveYzygGoods, exports.liveZhtcGoods = liveZhtcGoods, exports.getLiveYzyg = getLiveYzyg, exports.delLiveYzyg = delLiveYzyg, exports.addLiveShare = addLiveShare;

var _request = require("./../lib/utils/request.js"), _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getBindPageLiveInfo(e) {
    return _request2.default.get("live/bind-page-live-info/" + e);
}


function getBindLive(e) {
    return _request2.default.get("live/bind-live/" + e);
}

function getApplyInfo() {
    return _request2.default.get("anchor/get-info");
}

function getAnchorInviation() {
    return _request2.default.get("anchor/get-anchor-inviation");
}

function applyAnchor() {
    return _request2.default.post("anchor/apply");
}

function applyFormAnchor(e) {
    return _request2.default.post("anchor/apply-form", e);
}

function applyAnchorPay(e, t) {
    return _request2.default.post("anchor/apply-pay/" + e, t);
}

function getCatetory() {
    return _request2.default.get("category/get-cate-lists", {}, {
        noAuth: !0
    });
}

function getCatetoryLives(e) {
    return _request2.default.get("category/get-cate-lives/" + e.id, e, {
        noAuth: !0
    });
}

function waterfallLiveLists(e) {
    return _request2.default.get("category/waterfall-live-lists", e, {
        noAuth: !0
    });
}

function getLiveDetail(e) {
    return _request2.default.get("live/get-live-info/" + e);
}

function getChatConfig(e) {
    return _request2.default.get("live/get-chat-config/" + e);
}


function getLiveGoods(e, t) {
    return _request2.default.get("goods/get-live-yzyg/" + e, t);
}
function getLiveYzyg(e, t) {
  return _request2.default.get("goods/get-live-yzyg/" + e, t);
}

function getCommentsStore(e, t) {
    return _request2.default.post("comments/store/" + e, t);
}

function getCommentsLists(e) {
    return _request2.default.get("comments/get-lists/" + e);
}

function getLiveCommentsLists(e) {
    return _request2.default.get("comments/get-live-lists/" + e);
}

function updateOnlineStatus(e, t) {
    return _request2.default.post("userinfo/online-status/" + e, t);
}

function followLive(e, t) {
    return _request2.default.get("follow/follow/" + e + "/" + t);
}

function liveStart(e) {
    return _request2.default.post("live/live-start", e);
}
function liveYzygGoods(e) {
  console.log(e)
  return _request2.default.get("live/live-yzyggoods", e, {
    noAuth: !0
  });
}
function addLiveShare(e){
  return _request2.default.get("live/addliveshare/" + e);
}
function liveZhtcGoods(e) {
  console.log(e)
  return _request2.default.get("live/live-zhtcgoods", e, {
    noAuth: !0
  });
}

function liveEnd(e) {
    return _request2.default.post("live/live-end", e);
}

function liveEndCount(e) {
    return _request2.default.post("live/live-end-count", e);
}

function getAnchorInfo() {
    return _request2.default.get("anchor/get-anchor-info");
}

function getAnchorLiveInfo() {
    return _request2.default.get("anchor/get-live-info");
}

function getPushLiveInfo() {
    return _request2.default.get("anchor/get-push-info");
}

function getStream(e) {
    return _request2.default.get("live/get-stream/" + e, {}, {
        noAuth: !0
    });
}

function setUserBlack(e, t) {
    return _request2.default.post("anchor/set-user-black/" + e, t);
}

function setUserShutup(e, t) {
    return _request2.default.post("anchor/set-user-shutup/" + e, t);
}

function getShutupLists(e) {
    return _request2.default.get("anchor/get-shutup-lists/" + e);
}

function getBlackLists(e) {
    return _request2.default.get("anchor/get-black-lists/" + e);
}

function searchGoods(e, t) {
    return _request2.default.post("goods/search-goods/" + e, t);
}

function addLiveGoods(e, t) {
    return _request2.default.post("goods/add-live-goods/" + e, t);
}

function delLiveGoods(e, t) {
    return _request2.default.post("goods/del-live-goods/" + e, t);
}
function delLiveYzyg(e, t) {
  return _request2.default.post("goods/del-live-yzyg/" + e, t);
}

function exposure(e, t) {
    return _request2.default.post("goods/exposure/" + e, t);
}

function changTop(e, t) {
    return _request2.default.post("goods/chang-top/" + e, t);
}

function getpic(e) {
    return _request2.default.get("giveup/getpic/" + e, {}, {
        noAuth: !0
    });
}

function addLike(e, t) {
    return _request2.default.post("giveup/store/" + e, t);
}

function liveOrders(e) {
    return _request2.default.get("anchor/get-live-orders/" + e);
}

function getLiveQrcode(e) {
    return _request2.default.get("live/qrccode/" + e);
}
function getLivePoster(e) {
  return _request2.default.get("live/poster/" + e);
}

function getAnchorQrcode() {
    return _request2.default.get("anchor/qrccode");
}

function getLiveNum(e) {
    return _request2.default.get("anchor/get-live-nums/" + e);
}

function anchorCenter(e) {
    return _request2.default.get("anchor/center/" + e);
}

function getAnchorLiveLogs(e) {
    return _request2.default.get("anchor/get-anchor-live-logs/" + e);
}

function getAnchorCenterGoods(e, t) {
    return _request2.default.get("anchor/get-anchor-center-goods/" + e, t);
}

function getLivePlayback(e) {
    return _request2.default.get("live/get-playblack/" + e);
}

function createStreamLogs(e, t) {
    return _request2.default.post("live/create-logs/" + e, t);
}

function createLiveNotice(e) {
    return _request2.default.post("live/create-live-notice", e);
}

function noticeLiveInfo(e) {
    return _request2.default.get("live/notice-live-info/" + e);
}

function liveSubscribe(e) {
    return _request2.default.post("live/live-subscribe/" + e);
}

function liveUnSubscribe(e) {
    return _request2.default.post("live/live-unsubscribe/" + e);
}

function getLivePlayerLives(e) {
    return _request2.default.get("live/get-live-player-lives/" + e);
}

function getLiveGifts(e) {
    return _request2.default.get("live-gift/" + e);
}

function payGift(e, t) {
    return _request2.default.post("live/pay_gift/" + e, t);
}

function giftRank(e, t) {
    return _request2.default.get("live/gift-rank/" + e + "/" + t);
}

function getPreLiveId(e) {
    return _request2.default.get("live/get-pre-live-id/" + e);
}

function getNextLiveId(e) {
    return _request2.default.get("live/get-next-live-id/" + e);
}