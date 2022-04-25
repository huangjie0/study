import banner from './banner.json'
import floor from './floor.json'
import Mock from 'mockjs'
Mock.mock('/mock/banner',{
    code:200,
    data:banner
})
Mock.mock('/mock/floor',{
    code:200,
    data:floor
})