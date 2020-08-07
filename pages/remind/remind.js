//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    reminder: '',
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../timeset/timeset'
    })
  },

  onShow: function(){
    this.setData({
      reminder: app.globalData.selectedValue
    })
  }
 })
