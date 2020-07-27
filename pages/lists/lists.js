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
        imgs: [{ id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }],
        starId: 5,
        src1: '../../images/star.png',
        src2: '../../images/grayStar.png',
      },
      { 
        title: '深度学习-从入门到应用', 
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/SD.png',
        imgs: [{ id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }],
        starId: 2,
        src1: '../../images/star.png',
        src2: '../../images/grayStar.png',
      },
      {
        title: 'JavaScript教程系列',
        desc: 'javascript是弱类型，基于原型的语言，常用于网页客户端编程，是网页设计最为常用的编程',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/JS.png',
        imgs: [{ id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }],
        starId: 5,
        src1: '../../images/star.png',
        src2: '../../images/grayStar.png',
      },
      {
        title: '深度学习-从入门到应用',
        desc: '从入门到实战摒弃了枯燥的理论推导,以大量实战应用案例及知识模块等内容帮助机器学习领域的初、中级程序员踏实通过深度学习的技术',
        cDate: '2020-01-22',
        cTime: '20',
        cHour: '3',
        cAMT: '200',
        csimg: '../../images/SD.png',
        imgs: [{ id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }],
        starId: 2,
        src1: '../../images/star.png',
        src2: '../../images/grayStar.png',
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