// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info:'hello world',
    imgSrc:'http://www.itheima.com/images/logo.png',
    randomNum:Math.random()*10,
    randomNum1:Math.random().toFixed(2),
    count:0,
    count1:0,
    msg:'你好',
    type:1,
    array:['小明','小红','小兰'],
    userList:[
      {id:1,name:'小虎'},
      {id:2,name:'小张'},
      {id:3,name:'小白'},
      {id:4,name:'小咯'},
    ]
  },
  btnTap2(e){
    this.setData({
      count1:this.data.count1 + e.target.dataset.info
    })
  },
  inputhandler(e){
    console.log(e.detail.value)
  },
  inputhandler_1(e){
    this.setData({
      msg:e.detail.value
    })
  },
  onclick(e){
    console.log(e.currentTarget)
  },
  contchang(){
    this.setData({
      count:this.data.count+1
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
