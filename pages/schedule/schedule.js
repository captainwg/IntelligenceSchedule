// pages/schedule/schedule.js
var startX,endX;
var moveFlag=true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 两个设置
    courseFlag: false,
    dateFlag:false,
    timeList:['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00'],
    dayList:['一','二','三','四','五','六','日'],
    schedule:{
      month:'3',
      tableData:[
        {
          date:'14',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'course',itemName:'数学',user:'王老师',time:'15:00',course:'',link:'',affair:'',location:'',status:'finished'},
            {type:'course',itemName:'数学',user:'王老师',time:'16:00',course:'',link:'',affair:'',location:'',status:'finished'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'15',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'class',itemName:'语文',user:'李老师',time:'11:00',course:'',link:'',affair:'',location:'',status:'unfinishClass'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'16',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'17',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'18',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'affair',itemName:'做饭',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'unfinishAffair'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'19',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        },
        {
          date:'20',
          dateData:[
            {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
            {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
          ]
        }
      ]
    },
    text: false,
    camera:false,
    functionList: false,
    currentDate:{},
    // orderInfo:{}
  },
  showDialog() {
    this.setData({
        functionList: true
    })
  },
  onReady: function () {
    //获得组件
    this.edit = this.selectComponent("#course");
    this.edit1 = this.selectComponent("#date");
  },

  showDate(e){
    let row = e.currentTarget.dataset.row
    let col = e.currentTarget.dataset.col
    wx.setStorage({
      data: col,
      key: 'col',
    })
    wx.setStorage({
      data: row,
      key: 'row',
    })
    this.data.schedule.tableData.forEach((item)=>{
      if(item.date===col){
        this.setData({
          currentDate:item.dateData[row],     
        })        
        wx.setStorage({
          data: this.data.currentDate,
          key: 'currentDate',
        })
        this.edit1.showDate()
        console.log(this.data.currentDate)
//传给组件

//存储数据
        wx.setStorage({
          data: this.data.schedule,
          key: 'schedule',
        })
      }
    })
  },

  showCourse(e){
    let row = e.currentTarget.dataset.row
    let col = e.currentTarget.dataset.col
    wx.setStorage({
      data: col,
      key: 'col',
    })
    wx.setStorage({
      data: row,
      key: 'row',
    })
    this.data.schedule.tableData.forEach((item)=>{
      if(item.date===col){
        this.setData({
          currentDate:item.dateData[row],          
        })
        // this.edit.showData(currentDate)
        console.log(this.data.currentDate)
        wx.setStorage({
          data: this.data.currentDate,
          key: 'currentDate',
        })
        this.edit.showCourse()
        // wx.setStorage({
        //           data: this.data.schedule,
        //           key: 'schedule',
        //         })
        // wx.navigateTo({
        //   url:'../../components/course-editor/course-editor?ins='+this.data.ins,
        // })
      }
    })
  },
  // getCurrentDateData(e){
  //   let row = e.currentTarget.dataset.row
  //   let col = e.currentTarget.dataset.col
  //   this.data.schedule.tableData.forEach((item)=>{
  //     if(item.date===col){
  //       this.setData({
  //         currentDate:item.dateData[row]
  //       })
  //       console.log(this.data.currentDate)
  //       wx.setStorage({
  //         data: this.data.schedule,
  //         key: 'schedule',
  //       })
  //     }
  //   })
  // },
  setCurrentDateData(e){
    let row = e.currentTarget.dataset.row
    let col = e.currentTarget.dataset.col
    this.data.schedule.tableData.forEach((item,index)=>{
      if(item.date===col){
        let data = 'schedule.tableData['+index+'].dateData['+row+']'
        this.setData({
          data:this.data.currentDate
        })
        console.log(this.data.currentDate)
      }
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
    let table= wx.getStorageSync('schedule')
    this.setData({
      text: false,
      camera:false,
      schedule:table
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
  _openCourse(e){
    this.setData({
      functionList: false
    })
    let dataSet = {
      type:'',
      itemName:'',
      user:'',
      time:'',
      course:'',
      link:'',
      affair:'',
      location:'',
      status:'unfinishClass'
    }
    wx.setStorage({
      data: dataSet,
      key: 'currentDate',
    })
    this.edit.showCourse();
  },
  _openAffair(e){
    this.setData({
      functionList: false
    })
    let dataSet = {
      type:'',
      itemName:'',
      user:'',
      time:'',
      course:'',
      link:'',
      affair:'',
      location:'',
      status:'unfinishAffair'
    }
    wx.setStorage({
      data: dataSet,
      key: 'currentDate',
    })
    this.edit1.showDate();
  },
  _closeDialog(e){
    this.setData({
      functionList: false
    })
  },
  // 组件course和date的取消和确认
//取消事件
_error() {
  console.log('你点击了取消');
  this.edit.hideCourse();

},
_error1() {
  this.setData({
    dateFlag:false
  })
  console.log('你点击了取消');
  this.edit1.hideDate();
},
//确认事件
_success() {
  let table= wx.getStorageSync('schedule')
  this.setData({
    dateFlag:false,
    schedule:table
  })
  console.log('你点击了确定');
  this.edit.hideCourse();

},
_success1() {
  let table= wx.getStorageSync('schedule')
  this.setData({
    dateFlag:false,
    schedule:table
  })
  console.log('你点击了确定');
  this.edit1.hideDate();
},
/**
 * 左右滑动控制函数
 */
  touchStart:function(e){
    startX=e.touches[0].pageX
    moveFlag=true
  },
  touchMove:function(e){
    endX=e.touches[0].pageX
    if(endX-startX>100){
      console.log("move right")
      this.move2Right()
      moveFlag=false
    }
    if(startX-endX>100){
      console.log("move left")
      this.move2Left()
      moveFlag=false
    }
  },
  touchEnd:function(e){
    moveFlag = true
  },
  move2Right(){
    var that = this
    that.setData({
      schedule:{
        month:'3',
        tableData:[
          {
            date:'14',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'class',itemName:'语文',user:'李老师',time:'15:00',course:'',link:'',affair:'',location:'',status:'finished'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'15',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'class',itemName:'语文',user:'李老师',time:'11:00',course:'',link:'',affair:'',location:'',status:'unfinishClass'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'16',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'17',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'18',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'affair',itemName:'做饭',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'unfinishAffair'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'19',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'20',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          }
        ]
      },
    })
  },
  move2Left(){
    var that = this
    that.setData({
      schedule:{
        month:'3',
        tableData:[
          {
            date:'21',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'class',itemName:'语文',user:'李老师',time:'15:00',course:'',link:'',affair:'',location:'',status:'finished'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'22',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'class',itemName:'语文',user:'李老师',time:'11:00',course:'',link:'',affair:'',location:'',status:'unfinishClass'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'23',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'24',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'25',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'affair',itemName:'做饭',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'unfinishAffair'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'26',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          },
          {
            date:'27',
            dateData:[
              {type:'',itemName:'',user:'',time:'07:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'08:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'09:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'10:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'11:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'12:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'13:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'14:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'15:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'16:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'17:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'18:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'19:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'20:00',course:'',link:'',affair:'',location:'',status:'empty'},
              {type:'',itemName:'',user:'',time:'21:00',course:'',link:'',affair:'',location:'',status:'empty'}
            ]
          }
        ]
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 从缓存读取数据，放入data
  onLoad: function (options) {
    // let value =wx.getStorageSync('schedule')
    // if(value){
    //   this.setData({
    //     schedule:value
    //   });
    //   // wx.clearStorage()
    // }
    wx.setStorage({
      data: this.data.schedule,
      key: 'schedule',
    })
  },
  // onLoad: function () {
  //   var that=this;
  //   wx.getStorage({
  //     key:'orderInfo',
  //     success:function(res){
  //       that.setData({
  //         orderInfo:res.data
  //       })
  //     }



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