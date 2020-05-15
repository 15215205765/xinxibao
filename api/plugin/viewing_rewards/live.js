Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.viewingRewardsPlugintoRoom = viewingRewardsPlugintoRoom, exports.viewingRewardsPlugleaveRoom = viewingRewardsPlugleaveRoom;

var _request = require("./../../../lib/utils/request.js"), _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function viewingRewardsPlugintoRoom(e) {
    return _request2.default.get("plugin/viewing_rewards/live/into/" + e);
}

function viewingRewardsPlugleaveRoom(e) {
    return _request2.default.get("plugin/viewing_rewards/live/leave/" + e);
}