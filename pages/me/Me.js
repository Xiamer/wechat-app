var app = getApp()
Page({
	data: {
		motto: 'Hello World'
	},
	//事件处理函数
	bindViewTap: function() {

	},
	onLoad: function() {
		console.log('onLoad');
		wx.setNavigationBarTitle({
			title: '个人中心'
		})

	}
})