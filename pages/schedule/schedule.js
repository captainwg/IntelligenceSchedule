// pages/schedule/schedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList:['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'],
    month:'7',
    dateList:[
      {day:'一',date:'13'},
      {day:'二',date:'14'},
      {day:'三',date:'15'},
      {day:'四',date:'16'},
      {day:'五',date:'17'},
      {day:'六',date:'18'},
      {day:'日',date:'19'}
      ],
    dayData:[
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'unfinish'},
      {itemName:'吃饭',show:'unstudied'},
      {itemName:'吃饭',show:'overdue'},
      {itemName:'',show:'empty'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'},
      {itemName:'吃饭',show:'studied'}
    ],
    text: false,
    camera:false,
    functionList: false
  },
  showDialog() {
    this.setData({
        functionList: true
    })
  },

  showCharacter() {
    this.setData({
      functionList: false
    })
  },
  _cancelEvent(e) {
    //do something when cancle is clicked
    this.setData({
      text: false,
      camera:false
    })
  },
  _confirmEvent(e) {
    //do something when cancle is clicked
    this.setData({
      text: false,
      camera:false
    })
  },
  _openText(e) {
    this.setData({
      functionList: false,
      text: true
    })
  },

  _openCamera(e) {
    ////do something when sure is clicked
    this.setData({
      functionList: false,
      camera: true
    })
  },
  _closeDialog(e){
    this.setData({
      functionList: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})