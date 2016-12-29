var app = getApp()
Page({
	data: {
		motto: 'Hello World'
	},
	//事件处理函数
	bindViewTap: function() {

	},
	onLoad: function() {
		wx.setNavigationBarTitle({
			title: '购物车'
		})
		console.log('onLoad')

	}
})