//在这个js专门创建实例对象
import {observable,action} from 'mobx-miniprogram'
export const store = observable({
    numA:1,
    numB:2,
    activeTabBarIndex:0,
    //计算属性
    get sum(){
      return this.numA + this.numB
    },
    //修改里面的值
    updateNum1:action(function(step) {
      this.numA += step
    }),
    updateNum2:action(function(step1) {
      this.numB += step1
    }),
    updateactiveTabBarIndex:action(function (index) {
      this.activeTabBarIndex=index
    })
})