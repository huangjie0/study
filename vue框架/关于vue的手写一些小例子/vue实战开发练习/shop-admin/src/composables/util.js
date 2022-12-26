import { ElNotification } from 'element-plus'
//信息提示
export function toast(message,type="success",dangerouslyUseHTMLString = false){
    ElNotification({
        message,
        type,
        duration:3000,
        dangerouslyUseHTMLString
    })
}