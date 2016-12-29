var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    swiperArr: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    console.log('onLoad')
    var that = this;
    wx.request({
        url: 'http://admin.ilovelook.cn/api/banner/list?type=0',
        header: {
          'content-type': 'application/json'
        },
        success: function(res) {
          console.log("111")
          that.setData({
            swiperArr: res.data.banners
          })
          console.log(res.data.banners);
        }
      })
      //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})