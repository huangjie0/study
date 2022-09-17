function Promise(e){
    this.PromiseState='pending'
    this.promiseResult=null
    this.callback=[];
    // 保存this
    const self = this;
    function resolve(data){
        //判断状态是否被该过的
        if(self.PromiseState !== 'pending') return
        self.PromiseState='fulfilled'
        self.promiseResult=data
        // 修改状态
        // 设置对象结果值
        self.callback.forEach(item=>{
            item.onResolve(data)
        })
    }
    function reject(data){
        if(self.PromiseState!=='pending') return
        self.PromiseState='rejected'
        self.promiseResult=data
        self.callback.forEach(item=>{
            item.onReject(data)
        })
    }
    try{
        e(resolve,reject);
    }catch(e){
        reject(e)
    }
}
Promise.prototype.then=function(onResolve,onReject){
    return new Promise((resolve,reject) => {
        if(this.PromiseState=='fulfilled'){
            try{
                let result = onResolve(this.promiseResult)
                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }else{
                    resolve(result);
                }
            }catch(e){
                reject(e)
            }
        }
        if(this.PromiseState=='rejected'){
            onReject(this.promiseResult)
        }
        if(this.PromiseState=='pending'){
            this.callback.push({
                onResolve:onResolve,
                onReject:onReject
            })
        }
    })
}