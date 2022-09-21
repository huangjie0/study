// custom-tab-bar/index.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

Component({
  observers:{
    'sum':function (val){
      this.setData({
        'list[1].info' : val
      })
    }
  },
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: "sum",
      active:"activeTabBarIndex"
    },
    actions: {
      updateactiveTabBarIndex:"updateactiveTabBarIndex"
    },
  },
  options:{
    styleIsolation:"shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/img/home.png",
        "selectedIconPath": "/img/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/img/message.png",
        "selectedIconPath": "/img/message-active.png",
        "info":2
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/img/contact.png",
        "selectedIconPath": "/img/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateactiveTabBarIndex(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
