Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getApplyIntro = getApplyIntro, exports.applyPay = applyPay, exports.apply = apply, 
exports.userBindStore = userBindStore;

var _request = require("./../lib/utils/request.js"), _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getApplyIntro(e) {
    return _request2.default.get("plugin/merch/common/apply/intro");
}

function applyPay() {
    return _request2.default.get("plugin/merch/common/apply/pay");
}

function apply(e) {
    return _request2.default.post("plugin/merch/common/apply/submit", e);
}

function userBindStore(e) {
    return _request2.default.post("plugin/merch/store/user/bind", {
        id: e
    });
}