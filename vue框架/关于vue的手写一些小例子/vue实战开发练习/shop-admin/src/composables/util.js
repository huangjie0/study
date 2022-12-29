import { ElNotification, ElMessageBox } from 'element-plus'
import nProgress from 'nprogress'
//信息提示
export function toast(message,type="success",dangerouslyUseHTMLString = false){
    ElNotification({
        message,
        type,
        duration:3000,
        dangerouslyUseHTMLString
    })
}
export function showModal(content="提示内容",type="warning",title=""){
    return ElMessageBox.confirm(
        content,
        title,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type,
        }
      )
}
export function showFullLoading(){
    nProgress.start()
}
export function hideFullLoading(){
    nProgress.done()
}