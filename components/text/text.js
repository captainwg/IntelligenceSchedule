// pages/character/character.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '文字识别'     // 属性初始值（可选），如果未指定则会根据类型选择一个
  },
  // 弹窗内容
  content: {
      type: String,
      value: ''
  },
  // 弹窗取消按钮文字
  cancelText: {
      type: String,
      value: '取消'
  },
  // 弹窗确认按钮文字
  confirmText: {
      type: String,
      value: '确定'
  },
  // 是否显示Dialog
  text: {
      type: Boolean,
      value: false
  }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:''
      // 弹窗显示控制
      // text: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    inputValue:function(e){
      let curValue=e.detail.value
      this.setData({
        value:curValue
      })
      console.log(this.data.value)
    },
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
  },
  getDataSuccess(){
    this.triggerEvent("confirmEvent"); 
  },
  _confirmEvent() {
    console.log('调用后台中')
    console.log(encodeURI(this.data.value))
    console.log(this.data.value)
    var that = this
    wx.request({
      url: 'http://47.107.64.43:5009/getcourse', 
      data: {
        text: this.data.value
      },
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data){
          let table= wx.getStorageSync('schedule')
          let currentCol= res.data.c_time.split('月')[1].split('日')[0]
          let time= res.data.c_time.split('日')[1]
          let dataSet = {
            type:'class',
            itemName:res.data.c_name,
            user:'',
            time:time,
            course:'1课时',
            link:'',
            affair:'',
            location:res.data.c_place,
            status:'unfinishClass'
          }
          table.tableData.forEach((item)=>{
            if(item.date===currentCol){
              for(let i=0;i<item.dateData.length;i++){
                if(item.dateData[i].time===time){
                  item.dateData[i]=dataSet
                }
              }
            }
          })
          wx.setStorage({
            data: table,
            key: 'schedule',
          })
          console.log('调用成功')
          that.triggerEvent("confirmEvent");
        }
      },
      fail(error){
        console.log(error)
        console.log('调用失败')
      }
    })
      //触发成功回调
      // this.triggerEvent("confirmEvent");   //confirmEvent由调用方声明和定义，在调用方 bind:confirmEvent 来声明，在js中定义函数
  }
  }
})
