var app=getApp()
Page({
  data: {
  canIUse: wx.canIUse('button.open-type.getUserInfo')
},

onLoad: function () {     //页面加载监听函数
wx.getUserInfo({
  success: res => {
    console.log(res)    //获取的用户信息还有很多，都在res中，看打印结果
    this.setData({
      userInfo: res.userInfo,
      hasUserInfo: true
    })
  }
})
}
})