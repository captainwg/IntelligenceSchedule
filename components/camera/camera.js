// components/camera/camera.js
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
      value: '图片识别'     // 属性初始值（可选），如果未指定则会根据类型选择一个
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
  camera: {
      type: Boolean,
      value: false
  }
  },

  /**
   * 组件的初始数据
   */
  data: {
    src:''
      // 弹窗显示控制
      // camera: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
  },
  _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");   //confirmEvent由调用方声明和定义，在调用方 bind:confirmEvent 来声明，在js中定义函数
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    console.log(ctx)
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        console.log(this.data.src)
        const file = wx.getFileSystemManager()
        const picBase64 = file.readFileSync(res.tempImagePath,"base64")
        // let path='../../images/testPic.jpg'
        // const picBase64 = file.readFileSync(path,"base64")
        console.log(picBase64)
        console.log(res.tempImagePath)
        var that = this
        wx.request({
          // url: 'http://47.107.64.43:5009/getocr', 
          url: 'https://542124141.xyz/classtable/getocr', 

          data: {
            img: picBase64
          },
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            console.log(res.data)
            if(res.data.text.words_result){
              let resultSet = res.data.text.words_result
              resultSet.forEach((item)=>{
                console.log(item)
                let dataSet = {
                  type:'class',
                  itemName:item.text,
                  user:'',
                  time:item.left,
                  course:'1课时',
                  link:'',
                  affair:'',
                  location:'',
                  status:'unfinishClass'
                }
                console.log(dataSet)
                let date = item.top
                let table= wx.getStorageSync('schedule')
                table.tableData.forEach((item)=>{
                  if(item.date===date){
                    for(let i=0;i<item.dateData.length;i++){
                      if(item.dateData[i].time===time){
                        console.log('当前日期：'+date)
                        console.log('当前时间:'+time)
                        item.dateData[i]=dataSet
                      }
                    }
                  }
                })
                wx.setStorage({
                  data: table,
                  key: 'schedule',
                })
              })
            }
            console.log('调用成功')
            that.triggerEvent("confirmEvent");
          },
          fail(error){
            console.log(error)
            console.log('调用失败')
          }
        })
      }
    })
  },
  selectPhoto() {
    var that = this
    let table= wx.getStorageSync('schedule')
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        const file = wx.getFileSystemManager()
        const picBase64 = file.readFileSync(tempFilePaths,"base64")
        wx.request({
          // url: 'http://47.107.64.43:5009/getocr', 
          url: 'https://542124141.xyz/classtable/getocr', 
          data: {
            img: picBase64
          },
          method:'POST',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            console.log(res.data)
            if(res.data.text.words_result){
              let resultSet = res.data.text.words_result
              resultSet.forEach((item)=>{
                console.log(item)
                let dataSet = {
                  type:'class',
                  itemName:item.text,
                  user:'',
                  time:item.left,
                  course:'1课时',
                  link:'',
                  affair:'',
                  location:'',
                  status:'unfinishClass'
                }
                let date = item.top.split('月')[1].split('日')[0]
                let time =item.left
                table.tableData.forEach((tableItem)=>{
                  if(tableItem.date===date){
                    for(let i=0;i<tableItem.dateData.length;i++){
                      if(tableItem.dateData[i].time===time){
                        console.log('当前日期：'+date)
                        console.log('当前时间:'+time)
                        tableItem.dateData[i]=dataSet
                      }
                    }
                  }
                })
              })
              console.log(table)
                wx.setStorage({
                  data: table,
                  key: 'schedule',
                })
            }
            console.log('调用成功')
            that.triggerEvent("confirmEvent");
          },
          fail(error){
            console.log(error)
            console.log('调用失败')
          }
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
  }
})
