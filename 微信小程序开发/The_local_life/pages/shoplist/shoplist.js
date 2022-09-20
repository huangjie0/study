// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    shoplist:[],
    //默认第一页
    page:1,
    //每页10条数据
    pagesize:10,
    //总数据
    total:0,
    //定义节流阀
    isloading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
     query:options
    })
    this.getshoplist()
  },
  getshoplist(){
    this.setData({
      isloading:true
    })
    //展示loading效果
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method:'GET',
      data:{
        _page:this.data.page,
        _limit:this.data.pagesize
      },
      success:(res)=>{
        this.setData({
          shoplist:[...this.data.shoplist,...res.data],
          total:res.header['X-Total-Count']-0
        })
      },
      complete:()=>{
        //隐藏loading效果
        wx.hideLoading()
        this.setData({
          isloading:false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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
    //重置关键数据
    this.setData({
      page:1,
      shoplist:[],
      total:0
    })
    this.getshoplist()
    //关闭下拉刷新
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.page * this.data.pagesize >= this.data.total){
      return wx.showToast({
        title: '数据加载完毕！',
        icon:'none'
      })
    }
    if(this.data.isloading) return
    this.setData({
      page:this.data.page+1
    })
    this.getshoplist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})