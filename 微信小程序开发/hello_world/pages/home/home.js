// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  syncCount(e){
    this.setData({
      count:e.detail.value
    })
  },
  async getInfo_1(){
    const {data:res} = await wx.p.request({
      method:'GET',
      url:'https://www.escook.cn/api/get',
      data:{
        name:'zs',
        age:20
      }
    })
    console.log(res)
  },
  // 发送get请求
  getInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:'GET',
      data:{
        name:'zs',
        age:20
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  // 发起post请求
  postInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method:'POST',
      data:{
        name:'ls',
        age:20
      },
      success:(res)=>{
        console.log(res.data)
      }
    })
  },
  getChild(){
    let child = this.selectComponent('.child')
    child.setData({
      count:child.properties.count+1
    })
    child.addCount()
  },
  // 通过编程式导航跳转到tab页面
  gotomessage(){
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  // 跳转到非tab页面
  gotoinfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  // 编程式导航跳转到非tab页面
  gotoinfo2(){
    wx.navigateTo({
      url: '/pages/info/info?name=ls&age=20',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
    this.postInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('上拉触底了！')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})