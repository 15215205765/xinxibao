Component({
    properties: {
        live: {
            type: Object,
            value: []
        }
    },
    data: {
        showTip: 0
    },
    pageLifetimes: {
        show: function() {},
        hide: function() {},
        resize: function() {}
    },
    methods: {
        goRoom: function(i) {
            1 == this.data.live.live.live_status ? wx.navigateTo({
                url: "/live/pages/live_nostart/index?live_id=" + this.data.live.live.id
            }) : wx.navigateTo({
                url: "/live/pages/live_room2/index?live_id=" + this.data.live.live.id
            });
        }
    }
});