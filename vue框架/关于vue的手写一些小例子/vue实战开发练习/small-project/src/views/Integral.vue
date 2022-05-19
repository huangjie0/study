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
    <div class="shoplist_1">
      <div class="shoplist_2" v-for="item in shopList" :key="item._id">
        <img class="img_3" :src="item.image" />
        <div>
          积分:{{ item.name }} <br/>
          价格:{{ item.price }} <br/>
          商品id号:{{ item._id }} <br/>
          时期:{{ item.createdAt | formatTime }}
        </div>
        <el-button type="primary" @click="exchange(item._id)">兑换</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getshop } from "@/api/shop/index";
import { putshop } from "@/api/shop/index.js";
import moment from "moment";
export default {
  name: "Integral",
  methods: {
    exchange(id) {
      putshop("/shop/exchange", {
        id: id,
      }).then((res) => {
        console.log(res);
        //接下来要做的事.......







      });
    },
  },
  filters: {
    formatTime(v) {
      return moment(v).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  data() {
    return {
      shopList: [],
    };
  },
  created() {
    getshop("/shop/shopList").then((res) => {
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
.mall,
.shoplist {
  font-size: 20px;
  color: rgb(156, 156, 156);
}
.shoplist_1 {
  width: 1300px;
  height: 600px;
  display: flex;
  justify-content: space-between;
}
.shoplist_2{
  width: 400px;
  height: 400px;
}
.img_3{
  width: 400px;
  height: 400px;
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