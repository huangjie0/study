var arr=[
    {id:001,buy_num:1,number:15,select:true,name:'2020宿州国际音乐节',city:'宿州',price:150,time:'2020.01.24',address:'https://img1.baidu.com/it/u=436907149,1086251211&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=775'},
    {id:002,buy_num:1,number:15,select:false,name:'2020南京国际音乐节',city:'南京',price:200,time:'2020.01.24',address:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010e735dbea026a801209e1f17a3f9.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647241660&t=755ae4419bbe140978c844f34114dc70'},
    {id:003,buy_num:5,number:15,select:true,name:'2020澳门国际音乐节',city:'澳门',price:130,time:'2020.01.24',address:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages03%2F20210715%2F0fc7dda433ce4b30ac2bd42050f9b8af.jpeg&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647241552&t=c3738f72fb5a8e6499560ba28577bb4b'},
    {id:004,buy_num:1,number:15,select:true,name:'2020香港国际音乐节',city:'香港',price:125,time:'2020.01.24',address:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.5tu.cn%2Fattachments%2Fimage_files%2Fmonth_1908%2F201907272208394797.jpg&refer=http%3A%2F%2Fimg.5tu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647241660&t=02515e3fd438998e2f11fd7554d8bd65'},
    {id:005,buy_num:1,number:15,select:true,name:'2020芜湖国际音乐节',city:'芜湖',price:136,time:'2020.01.24',address:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F20%2F00%2F5b96151272466.jpg%21%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647241660&t=172cf09834f1e4c6b67fc8d3b794c833'},
    ]
var content = document.querySelector('.content');

bindHtml()
function bindHtml(){
    var totalPrice = 0,totalNum=0,selectNum=0
    arr.forEach(function(item){
        if(item.select==true){
            totalPrice += item.price*item.buy_num
            totalNum += item.buy_num
            selectNum++
        }
    })
    var str = `
    <div class="center_top">
            <input type="checkbox" ${selectNum>=arr.length ? "checked":''} class='selectAll' id="input_1">全选
        </div>
        <ul> 
    `
    arr.forEach(function(item){
        str+=`
        <li>
                <input type="checkbox" ${item.select ? 'checked':''} style="width: 20px;height: 20px;" id="input_2" class='list' data-id="${item.id}">
                <img src="${item.address}" alt="">
                <div>
                    ${item.name}
                </div>
                <div>
                    ￥${(item.price-0).toFixed(2)}
                </div>
                <input type="button" value="-" style="width: 30px;height: 30px;font-size: 15px;"class="sub" data-id="${item.id}">${item.buy_num}
                <input type="button" value="+" style="width: 30px;height: 30px;font-size: 15px;"class="add" data-id="${item.id}">
                <div>
                    ￥${(item.price*item.buy_num).toFixed(2)}
                </div>
                <input type="button" value="删除" style="width: 40px;height: 30px;font-size: 15px;background-color: red;color: white;border: none;cursor: pointer;" class='del' data-id="${item.id}">
            </li>
        `
    })
    str += `
        </ul>
        <di class="center_button">
            <span class="span_1">总购买数量:${totalNum}</span>
            <div class="qjs">去结算</div>
            <div class="qkgwc">清空购物车</div>
            <div class="scxz">删除所有已选中</div>
            <div class="fhlb">返回列表页</div>
            <span class="zjg">总价格</span>
            <span class="qian">￥${totalPrice.toFixed(2)}</span>
        </di
    `
    content.innerHTML=str; 

    content.addEventListener('click',function(e){
        e=e||window.event
        var target = e.target || e.srcElement
        if(target.className==='selectAll'){
            var target_checked = target.checked
            arr.forEach(function(item){
                item.select=target_checked
            })
            bindHtml()
        }
        if(target.className==='list'){
            var id = target.dataset.id-0
            var goods = arr.find(function(item){
                return item.id===id
            })
            goods.select=!goods.select
            bindHtml()
        }
        if(target.className==='sub'){
            var id = target.dataset.id-0
            var goods = arr.find(function(item){
                return item.id===id
            })
            if(goods.buy_num<=1)return
            goods.buy_num--
            bindHtml()
        }
        if(target.className==='add'){
            var id = target.dataset.id-0
            var goods = arr.find(function(item){
                return item.id==id
            })
            if(goods.buy_num>=goods.number)return
            goods.buy_num++
            bindHtml()
        }
        if(target.className==='del'){
            var id =target.dataset.id-0
            arr=arr.filter(function(item){
                return item.id!==id
            })
            bindHtml()
        }
        if(target.className==='qkgwc'){
           arr=[]
           bindHtml()
        }
        if(target.className==='scxz'){
            arr=arr.filter(function(item){
                return item.select===false
            })
            bindHtml()
        }
        if(target.className==='fhlb'){
           window.location.href='https://www.jd.com'
        }
    })
}