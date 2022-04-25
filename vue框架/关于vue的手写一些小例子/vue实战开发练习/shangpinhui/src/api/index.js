//当前这个模块，api接口统一管理
import requests from './request';
import mockRequire from './mockAjax'
//三级联动接口
// /api/product/getBaseCategoryList  get请求   无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
//获取search模块数据
export const reqSearchList = (params)=>requests({url:'/list',method:'post',data:params});
//获取banner数据
export const reqGetbannerList=()=>mockRequire.get('/banner');
//获取floor数据
export const reqGetfloorList=()=>mockRequire.get('/floor');