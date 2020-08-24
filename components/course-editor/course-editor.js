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
    type:'',itemName:'',user:'',time:'',course:'1课时',link:'',affair:'',location:'',status:'',
    currentDate:{},
    }, 
 
  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hideCourse: function () {
      this.setData({
        courseFlag: !this.data.courseFlag
      })
    },
    //展示弹框
    showCourse () {
      var that = this; 
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
      this.setData({
        courseFlag: !this.data.courseFlag
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
    _success () {
      //触发成功回调
      this.triggerEvent("success");
    },
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
