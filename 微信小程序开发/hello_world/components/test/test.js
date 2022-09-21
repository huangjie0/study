// components/test/test.js
Component({
  options:{
    styleIsolation:'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //指定简化方式
    // max:Number
    max:{
      type:Number,
      value:10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo(){
      console.log(this.data)
      console.log(this.properties)
      console.log(this.data===this.properties)
    },
    //点击事件处理函数
    addCount(){
      if(this.data.count >= this.properties.max) return
      this.setData({
        count:this.data.count+1,
        max:this.data.max+1
      })
      this._showCount()
    },
    _showCount(){
      wx.showToast({
        title: 'count是' + this.data.count,
        icon:'none'
      })
    }
  }
})
