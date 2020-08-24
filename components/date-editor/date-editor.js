// component/date-editor/date-editor.js
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
      value: '活动名'
    },
    content2: {
      type: String,
      value: '人员'
    },
    content3: {
      type: String,
      value: '时间'
    },
    content4: {
      type: String,
      value: '事情'
    },
    content5: {
      type: String,
      value: '地点'
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
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    dateFlag: true,
    type:'',itemName:'',user:'',time:'',course:'1课时',link:'',affair:'',location:'',status:'',
    currentDate:{},
    // currentDate:{}
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    // 弹框中展示数据
    // showData(e){
    //   e.itemName=
    // },

    //隐藏弹框
    hideDate: function () {
      this.setData({
        dateFlag: !this.data.dateFlag
      })
    },
    //展示弹框
    showDate () {
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
      dateFlag: !this.data.dateFlag
    })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _error1 () {
      //触发取消回调
      this.triggerEvent("error1")
    },
    _success1 () {
      //触发成功回调
      this.triggerEvent("success1");
    }
  },


  created() {},
	
  attached:function(options){ 
    //获取本地数据 
    // var that = this; 
    // var currentDate=wx.getStorage({
    //   key: 'currentDate',
    //   success: function(res) {          
    //     console.log('lalala'+res)     
    //     that.setData({
          
    //       type : res.data.type,
    //       itemName :  res.data.itemName, 
    //       user :  res.data.user,
    //       time : res.data.time, 
    //       course :  res.data.course,
    //       link :  res.data.link,
    //       affair :  res.data.affair,
    //       location :  res.data.location, 
    //       status :  res.data.status

    //     })
    //     console.log("type");   
    //     console.log(res.data);    
    //     console.log("type1");    
    //   }
    // })
}
,
      ready() {}
})