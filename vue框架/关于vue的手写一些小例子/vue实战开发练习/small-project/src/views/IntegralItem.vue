<template>
  <div class="shoplist_1">
    <!-- 将图片模块剥离出来 -->
    <div class="shoplist_2" v-for="item in shopList" :key="item._id">
      <img class="img_3" :src="item.image"/>
      <div>
        积分:{{ item.name }} <br/>
        价格:{{ item.price }} <br/>
        商品id号:{{ item._id }} <br/>
        时期:{{ item.createdAt | formatTime }}
      </div>
      <el-button type="primary" @click="exchange(item._id)">兑换</el-button>
    </div>
  </div>
</template>

<script>
import { localStorageGet, localStorageSet } from "@/common/tool.js";
import { mapMutations } from "vuex";
import { getshop, putshop } from "@/api/shop/index";
import moment from "moment";
export default {
  name: "IntegralItem",
  props: {
    shopList: {
      type: Array,
    },
  },
  filters: {
    formatTime(v) {
      return moment(v).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  methods: {
    ...mapMutations(["saveUser"]),
    exchange(id) {
      putshop("/api/shop/exchange", {id})
        .then((res) => {
          const { _id } = localStorageGet("user");
          //重新向服务器发请求重新获取数据
          getshop("/api/user/userinfo", { id: _id }).then((res) => {
            //先存vuex
            this.saveUser(res.data);
            // 本地的改掉
            localStorageSet("user", res.data);
            this.$message.success("恭喜您兑换成功!");
          });
        })
        .catch((err) => {
          this.$message.error("兑换失败!");
        });
    },
  },
};
</script>

<style lang='less' scoped>
.shoplist_1 {
  width: 1300px;
  height: 600px;
  display: flex;
  justify-content: space-between;
}
.shoplist_2,
.img_3 {
  width: 400px;
  height: 400px;
}
</style>