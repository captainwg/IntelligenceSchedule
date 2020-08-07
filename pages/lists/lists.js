//lists.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newsList: [
      {
        title: 'JavaScript教程系列', 
        desc: 'javascript是弱类型，基于原型的语言，常用于网页客户端编程，是网页设计最为常用的编程',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/JS.png',
        addshow: false,
      },
      { 
        title: '深度学习-从入门到应用', 
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/SD.png',
        addshow: false,
      },
      {
        title: 'JavaScript教程系列',
        desc: 'javascript是弱类型，基于原型的语言，常用于网页客户端编程，是网页设计最为常用的编程',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/JS.png',
        addshow: false,
      },
      {
        title: '深度学习-从入门到应用',
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/SD.png',
        addshow: false,
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

  methods: {
    select(e) {
      console.log(e)
      this.data.starId = e.currentTarget.dataset.index;
      this.setData({
        starId: this.data.starId
      })
    }
  },

  onLoad: function (options) {
  },

  onChangeShowState: function (e) {
    let index = e.currentTarget.dataset.index
    var that = this;
    //var addshow = that.data.newsList[index].addshow;
    let newsValue = that.data.newsList;
    newsValue[index].addshow = !newsValue[index].addshow;
     that.setData({
      //  newsList[index].addshow :!that.data.newsList[index].addshow
       newsList: newsValue
     });
    // console.log(addshow);
  }, 

  hidePopup(){
    let list =this.data.newsList;
    list.forEach(item => item.addshow = false)
    this.setData({
      newsList: list
    })
  },

  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
})