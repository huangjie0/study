// components/test5/test5.js
const my_behaviors = require('../../behaviors/my_behaviors')
Component({
  behaviors:[my_behaviors],
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    usename:'huangjie'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      this.setData({
        count:this.properties.count+1
      })
      //触发自定义事件
      this.triggerEvent('sync',{value:this.properties.count})
    }
  }
})
