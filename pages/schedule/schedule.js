// pages/schedule/schedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList:['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'],
    dayList:['一','二','三','四','五','六','日'],
    schedule:{
      month:'3',
      tableData:[
        {
          date:'14',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'class',itemName:'语文',user:'李老师',time:'15:00',class:'',link:'',affair:'',location:'',status:'finished'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'15',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'class',itemName:'语文',user:'李老师',time:'11:00',class:'',link:'',affair:'',location:'',status:'unfinishClass'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'16',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'17',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'18',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'affair',itemName:'做饭',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'unfinishAffair'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'19',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'20',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',class:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',class:'',link:'',affair:'',location:'',status:'empty'}
          ]
        }
      ]
    },
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