//当前这个模块，api接口统一管理
import requests from './request';
//三级联动接口
// /api/product/getBaseCategoryList  get请求   无参数
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
