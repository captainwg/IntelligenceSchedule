//lists.js
//获取应用实例
var app = getApp()

Page({
  data: {
    btnWidth: 125,   //按钮的宽度单位
    startX: "",      //手指触摸开始滑动的位置
    newsList: [
      {
        title: 'JavaScript教程系列', 
        desc: 'javascript是弱类型，基于原型的语言，常用于网页客户端编程，是网页设计最为常用的编程',
        cDate: '2020-09-11',
        cTime: '2',
        cHour: '1',
        cAMT: '200',
        csimg: '../../images/JS.png',
        txtStyle: "", 
      },
      { 
        title: '深度学习-从入门到应用', 
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-09-12',
        cTime: '3',
        cHour: '1',
        cAMT: '340',
        csimg: '../../images/SD.png',
        txtStyle: "", 
      },
      {
        title: 'JavaScript教程系列',
        desc: 'javascript是弱类型，基于原型的语言，常用于网页客户端编程，是网页设计最为常用的编程',
        cDate: '2020-08-22',
        cTime: '2',
        cHour: '1',
        cAMT: '180',
        csimg: '../../images/JS.png',
        txtStyle: "", 
      },
      {
        title: '深度学习-从入门到应用',
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-08-28',
        cTime: '3',
        cHour: '1',
        cAMT: '160',
        csimg: '../../images/SD.png',
        txtStyle: "", 
      },
    ],
    lastid:0,
    toastHidden:true,
    confirmHidden:true,
    isfrist:1,
    loadHidden:true,
    moreHidden:'none',
    msg:'没有更多文章了',
    imgtop:'../../images/course.png',
    select:'选择'
  },

  onLoad: function (options) {
    this.setData({
      // icon: base64.icon20,
      slideButtons: [{
        text: '删除',
        type:'warn',
        extClass: 'delete',
        // src: '/page/weui/cell/icon_love.svg', // icon的路径
      }],
    });
  },

  slideButtonTap(e) {
    console.log('slide button tap', e.detail);
    let query = e.currentTarget.dataset.index
    console.log(query);
    this.data.newsList.splice(query,1);
    this.setData({
      newsList: this.data.newsList
    })
  }
  // onChangeShowState: function (e) {
  //   let index = e.currentTarget.dataset.index
  //   var that = this;
  //   let newsValue = that.data.newsList;
  //   newsValue[index].addshow = !newsValue[index].addshow;
  //    that.setData({
  //      newsList: newsValue
  //    });
  // }, 

  // // hidePopup(){
  // //   let list =this.data.newsList;
  // //   list.forEach(item => item.addshow = false)
  // //   this.setData({
  // //     newsList: list
  // //   })
  // // },


  // touchS: function (e) {
  //   console.log(`touchStart:`, e);
  //   if (e.touches.length == 1) { //触摸屏上只有一个触摸点
  //     this.setData({
  //       //设置触摸起始点水平方向位置
  //       //clientX:距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴
  //       startX: e.touches[0].clientX
  //     });
  //   }
  // },
  // touchM: function (e) {
  //   console.log(`touchMove:`, e);
  //   if (e.touches.length == 1) { // 一个触摸点
  //     //手指移动时水平方向位置
  //     var moveX = e.touches[0].clientX;
  //     //手指起始点位置与移动期间的差值
  //     var disX = this.data.startX - moveX;
  //     //按钮
  //     var btnWidth = this.data.btnWidth;
  //     var txtStyle = "";
  //     if (disX == 0 || disX < 0) {//如果移动距离小于等于0，说明向右滑动，文本层位置不变
  //       txtStyle = "left:0rpx";
  //     } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
  //       txtStyle = "left:-" + disX + "rpx";
  //       if (disX >= btnWidth) {
  //         //控制手指移动距离最大值为删除按钮的宽度
  //         txtStyle = "left:-" + btnWidth + "rpx";
  //       }
  //     }
  //     //获取手指触摸的是哪一项
  //     var index = e.currentTarget.dataset.index;
  //     //设置该项向左偏移的样式,并消除其他项的偏移样式
  //     var list = this.data.newsList;
  //     for (var ix in list) {
  //       ix == index ? list[ix].txtStyle = txtStyle : list[ix].txtStyle = "";
  //     }
  //     //更新列表的状态
  //     this.setData({
  //       newsList: list
  //     });
  //   }
  // },
  // touchE: function (e) {
  //   console.log(`touchEnd:`, e);
  //   if (e.changedTouches.length == 1) { //一个触摸点
  //     //手指移动结束后水平位置
  //     var endX = e.changedTouches[0].clientX;
  //     //触摸开始与结束，手指移动的距离
  //     var disX = this.data.startX - endX;
  //     var btnWidth = this.data.btnWidth;
  //     //如果距离小于删除按钮的1/2，不显示删除按钮
  //     var txtStyle = disX > btnWidth / 2 ? "left:-" + btnWidth + "rpx" : "left:0rpx";
  //     //获取手指触摸的是哪一项
  //     var index = e.currentTarget.dataset.index;
  //     //设置偏移的样式
  //     var list = this.data.newsList;
  //     list[index].txtStyle = txtStyle;
  //     //更新列表的状态
  //     this.setData({
  //       newsList: list
  //     });
  //   }
  // },
  // //获取元素自适应后的实际宽度
  // getEleWidth: function (w) {
  //   var real = 0;
  //   try {
  //     var res = wx.getSystemInfoSync().windowWidth;
  //     var scale = (750 / 2) / (w / 2);//以宽度750px设计稿做宽度的自适应
  //     real = Math.floor(res / scale);
  //     return real;
  //   } catch (e) {
  //     return false;
  //     // Do something when catch error
  //   }
  // },
  // initEleWidth: function () {
  //   var btnWidth = this.getEleWidth(this.data.btnWidth);
  //   this.setData({
  //     btnWidth: btnWidth
  //   });
  // },
  // //点击删除按钮事件
  // delItem: function (e) {
  //   var that = this;
  //   //获取列表中要删除项的下标
  //   var index = e.currentTarget.dataset.index;
  //   var list = that.data.newsList;
  //   wx.showModal({
  //     title: '提示',
  //     content: '是否确认删除',
  //     success(res) {
  //       if (res.confirm) {
  //         //移除列表中下标为index的项
  //         list.splice(index, 1);
  //         //更新列表的状态
  //         that.setData({
  //           newsList: list
  //         });
  //       }
  //     }
  //   })
  // }
})