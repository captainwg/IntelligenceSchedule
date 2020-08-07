//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    show: false, 
    selectData: ['无', '5分钟前', '10分钟前', '15分钟前', '30分钟前', '1小时前'],
    index: 0 
  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show,
    });
  },

  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    
    // let param = { index: Index, show: true}
    // this.setData(param)

    this.setData({
      index: Index,
      show: !this.data.show
    });
    app.globalData.selectedValue = this.data.selectData[Index]

  }
})
