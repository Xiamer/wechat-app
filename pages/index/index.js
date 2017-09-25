
import { fnBsngetBannerList } from "util/index.js";
//获取应用实例
const app = getApp();

Page({
  data: {
    aBannerListData: [],
    motto: 'Hello World',
    scrollBannerData: []
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    fnBsngetBannerList.apply(this);
  },
  onShow: function() {

  }
})
