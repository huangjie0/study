<template>
  <div>
    <div class="mall">商城</div>
    <div class="mall_1">
      <div class="mall_2">
        <div>当前积分</div>
        <div>{{ user.integration }}</div>
      </div>
    </div>
    <div class="shoplist">商品列表</div>
    <div>
      <IntegralItem :shopList='shopList'/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getshop} from "@/api/shop/index";
import IntegralItem from '@/views/IntegralItem'
export default {
  name: "Integral",
  components:{
    IntegralItem
  },
  data() {
    return {
      shopList: [],
    };
  },
  created() {
    getshop("/api/shop/shopList").then((res) => {
      this.shopList = res.data;
    });
  },
  computed: {
    ...mapState({
      user: (state) => {
        return state.user.user;
      },
    }),
  },
};
</script>

<style scoped lang='less'>
@width:400px;
.mall,
.shoplist {
  font-size: 20px;
  color: rgb(156, 156, 156);
}

.mall_1 {
  width: 1300px;
  height: 150px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mall_2 {
  width: 300px;
  height: 150px;
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: white;
}
</style>