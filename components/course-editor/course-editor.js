// component/course-editor/course-editor.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹窗内容
    content1: {
      type: String,
      value: '课程名'
    },
    content2: {
      type: String,
      value: '老师 '
    },
    content3: {
      type: String,
      value: '课时'
    },
    content4: {
      type: String,
      value: '时间'
    },
    content5: {
      type: String,
      value: '链接'
    },
    // 弹窗取消按钮文字
    btn_no: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    btn_ok: {
      type: String,
      value: '确定'
    }
    // type:{
    //   type:String,
    //   value:''
    // },
    // itemName:{
    //   type:String,
    //   value:''},
    // user:{
    //   type:String,
    //   value:''},
    //   time:{
    //   type:String,
    //   value:''},
    //   course:{
    //   type:String,
    //   value:'2课时'},
    //   link:{
    //     type:String,
    //     value:''},
    //   affair:{type:String,
    //     value:''},
    //   location:{type:String,
    //     value:''},
    //   status:{type:String,
    //     value:''},
  
  },
 
  /**
   * 组件的初始数据
   */
  data: {    courseFlag: true,
    type:'',itemName:'',user:'',time:'',course:'2课时',link:'',affair:'',location:'',status:''
    }, 
 
  /**
   * 组件的方法列表
   */
  methods: {

	
    // groupClick: function (e){
    //   var group = this.data.items[e.target.dataset.index]
    //   console.log(group)
    //   // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
    //   this.triggerEvent('okEvent', { group}, {})
       
       
    //   this.setData({
    //   isShow: false
      
    //   })
    //   },
    // itemName的输入框
    inputItemName:function(e){
      let curItemName=e.detail.value
      this.setData({
        itemName:curItemName
      })
      console.log(e.detail.value)
    },
    // user的输入框
    inputUser:function(e){
      let curUser=e.detail.value
      this.setData({
        user:curUser
      })
      console.log(e.detail.value)
    },

    // course的输入框
    inputCourse:function(e){
      let curCourse=e.detail.value
      this.setData({
         course:curCourse
      })
      console.log(e.detail.value)
    },
    // time的输入框
    inputTime:function(e){
      let curTime=e.detail.value
      this.setData({
        time:curTime
      })
      console.log(e.detail.value)
    },
  // link的输入框
  inputLink:function(e){
    let curLink=e.detail.value
    this.setData({
      link:curLink
    })
    console.log(e.detail.value)
  },
  // 表单提交
    formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      this.setData({
        allValue:e.detail.value
      })
    },
      //隐藏弹框
    hideCourse: function (e) {
      this.setData({
        courseFlag: !this.data.courseFlag
      })
      // let { index } = e.currentTarget.dataset;
    //   let data = this.data.data;
    //   // 自定义一个事件，并且传值
    //   this.triggerEvent('myevent',{params: data[index]},{})
    },
    //展示弹框+读取数据
    showCourse () {
      var that = this;
      this.setData({
        courseFlag: !this.data.courseFlag
      }) 
      wx.getStorage({
        key: 'currentDate',
        success: function(res) {          
          console.log(res.data)     
          that.setData({         
            type : res.data.type,
            itemName :  res.data.itemName, 
            user :  res.data.user,
            time : res.data.time, 
            course :  res.data.course,
            link :  res.data.link,
            affair :  res.data.affair,
            location :  res.data.location, 
            status :  res.data.status
           })   
        }
      })
    },
    
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _error () {
      //触发取消回调
      this.triggerEvent("error")
    },
    _success (e) {
      //触发成功回调
      var that=this;
      // var objData = e.detail.value;
      // if(objData.type==='class' || objData.type===''){ 
      //      // 同步方式存储表单数据 
      //      wx.setStorageSync('type', objData.type); 
      //      wx.setStorageSync('itemName', objData.itemName); 
      //      wx.setStorageSync('user', objData.user); 
      //      wx.setStorageSync('time', objData.time); 
      //      // 原来的class改成了course
      //      wx.setStorageSync('course', objData.course); 
      //      wx.setStorageSync('link', objData.link); 
      //      wx.setStorageSync('affair', objData.affair); 
      //      wx.setStorageSync('location', objData.location); 
      // }
      //存储数据
      let dataSet = {
        type:that.data.type,
        itemName:that.data.itemName,
        user:that.data.user,
        time:that.data.time,
        course:that.data.course,
        link:that.data.link,
        affair:that.data.affair,
        location:that.data.location,
        status:'unfinishClass'
      }
      console.log(dataSet)
      let table= wx.getStorageSync('schedule')
      let currentRow= wx.getStorageSync('row')
      let currentCol= wx.getStorageSync('col')
      table.tableData.forEach((item)=>{
        if(item.date===currentCol){
          item.dateData[currentRow]=dataSet
        }
      })
      wx.setStorage({
        data: table,
        key: 'schedule',
      })
      this.triggerEvent("success");
    },
    // getCoursedata废弃了
    getCoursedata(){
      var currentDate=wx.getStorage({
        key: 'currentDate',
        success: res => {
        // success: function(res) {   
          var that = this;         
          that.setData({
            type : res.data.type,
            itemName :  res.data.itemName, 
            user :  res.data.user,
            time : res.data.time, 
            course :  res.data.course,
            link :  res.data.link,
            affair :  res.data.affair,
            location :  res.data.location, 
            status :  res.data.status
  
          })
        }
      })
  }
},
  // formSubmit:function(e){ 
  //   console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"} 
    
  //   //获得表单数据 
  //   var objData = e.detail.value; 
    
  //   if(objData.type==='class' || objData.type===''){ 
  //    // 同步方式存储表单数据 
  //    wx.setStorageSync('type', objData.type); 
  //    wx.setStorageSync('itemName', objData.itemName); 
  //    wx.setStorageSync('user', objData.user); 
  //    wx.setStorageSync('time', objData.time); 
  //    // 原来的class改成了course
  //    wx.setStorageSync('course', objData.course); 
  //    wx.setStorageSync('link', objData.link); 
  //    wx.setStorageSync('affair', objData.affair); 
  //    wx.setStorageSync('location', objData.location); 
  //    wx.setStorageSync('status', objData.status); 
  //    //跳转到成功页面 
  //    wx.navigateTo({ 
  //     url: '../../pages/schedule/schedule'
  //    }) 
  //   } 
  //  }
    
  //  //加载完后，处理事件  
  //  // 如果有本地数据，则直接显示
  created() {},
	// 废弃了
  attached:function(options){ 
    //获取本地数据 
    var that = this; 
    var currentDate=wx.getStorage({
      key: 'currentDate',
      success: function(res) {          
                
        that.setData({
          
          type : res.data.type,
          itemName :  res.data.itemName, 
          user :  res.data.user,
          time : res.data.time, 
          course :  res.data.course,
          link :  res.data.link,
          affair :  res.data.affair,
          location :  res.data.location, 
          status :  res.data.status

        })        
      }
    })
}
,
      ready() {}
  // }
   
  //     //  var itemName = res.data.itemName; 
  //     //  var user = res.data.user; 
  //     //   time = res.data.time; 
  //     //   course = res.data.course; 
  //     //   link = res.data.link; 
  //     //   affair = res.data.affair;
  //     //   location = res.data.location; 
  //     //   status = res.data.status; 
      
  //     //   console.log(itemName); 
  //     //   console.log(user); 
  //     //   console.log(time); 
  //     //   console.log(course); 
  //     //   console.log(link); 
  //     //   console.log(affair); 
  //     //   console.log(location); 
  //     //   console.log(status); 
    
  //       // if(type){ 
  //       // this.setData({type: type}); 
  //       // } 
  //     //   if(itemName){ 
  //     //   this.setData({itemName: itemName}); 
  //     //   } 
  //     //   if(user){ 
  //     //   this.setData({user: user}); 
  //     //   } 
  //     //   if(time){ 
  //     //   this.setData({time: time}); 
  //     //   } 
  //     //   if(course){ 
  //     //   this.setData({course: course}); 
  //     //   } 
  //     //   if(link){ 
  //     //   this.setData({link: link}); 
  //     //   } 
  //     //   if(affair){ 
  //     //   this.setData({affair: affair}); 
  //     //   } 
  //     //   if(location){ 
  //     //   this.setData({location: location}); 
  //     //   } 
  //     //   if(status){ 
  //     //   this.setData({status: status}); 
  //     //   } 
        
    
  //   // console.log('111');
  //   // console.log(currentDate);
  //   // console.log('111');
  //   // var type = currentDate.data.type; 
  //   // var itemName = currentDate.data.itemName; 
  //   // var user = currentDate.data.user; 
  //   // var time = currentDate.data.time; 
  //   // var course = currentDate.data.course; 
  //   // var link = currentDate.data.link; 
  //   // var affair = currentDate.data.affair;
  //   // var location = currentDate.data.location; 
  //   // var status = currentDate.data.status; 
  
  //   // console.log(type); 
  //   // console.log(itemName); 
  //   // console.log(user); 
  //   // console.log(time); 
  //   // console.log(course); 
  //   // console.log(link); 
  //   // console.log(affair); 
  //   // console.log(location); 
  //   // console.log(status); 
 
  //   // if(type){ 
  //   //  this.setData({type: type}); 
  //   // } 
  //   // if(itemName){ 
  //   //  this.setData({itemName: itemName}); 
  //   // } 
  //   // if(user){ 
  //   //  this.setData({user: user}); 
  //   // } 
  //   // if(time){ 
  //   //  this.setData({time: time}); 
  //   // } 
  //   // if(course){ 
  //   //  this.setData({course: course}); 
  //   // } 
  //   // if(link){ 
  //   //  this.setData({link: link}); 
  //   // } 
  //   // if(affair){ 
  //   //  this.setData({affair: affair}); 
  //   // } 
  //   // if(location){ 
  //   //  this.setData({location: location}); 
  //   // } 
  //   // if(status){ 
  //   //  this.setData({status: status}); 
  //   // } 
    
  // }
})
