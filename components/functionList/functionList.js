// components/functionList/functionList.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
},
  /**
   * 组件的属性列表
   */
  properties: {
    functionList: {
      type: Boolean,
      value: false
  }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  showCharacter() {
    this.setData({
      functionList: false
    })
  },
  ready: function() { 
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toClass(){
      wx.switchTab({
        url: '/pages/lists/lists'
      })
      this.setData({
        functionList: false
      })
    },
    _openText() {
      //触发打开页面回调
      this.triggerEvent("openText")
  },
    _openCamera() {
    //触发打开页面回调
    this.triggerEvent("openCamera")
  },
  _addCourse(){
    this.triggerEvent("openCourse")
  },
  _addAffair(){
    this.triggerEvent("openAffair")
  },
  _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");   //confirmEvent由调用方声明和定义，在调用方 bind:confirmEvent 来声明，在js中定义函数
  },
  _closeDialog() {
    //触发打开页面回调
    this.triggerEvent("closeDialog")
  },
  }
})
