<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <div class="top">
      <el-scrollbar>
        <AsideList
          :active="activeId == item.id"
          v-for="item in list"
          :key="item.id"
        >
          {{ item.name }}
        </AsideList>
      </el-scrollbar>
    </div>
    <div class="bottom">
      <el-pagination
        background
        layout="prev,next"
        :total="total"
        @current-change="getData"
        :current-page="currentPage"
        :page-size="limit"
      />
    </div>
  </el-aside>
  <FormDrawer ref="formDrawerRef" @submit="handleSubmit" title="新增">
    <el-form
      :model="form"
      ref="formRef"
      :rules="rules"
      label-width="80px"
      :inline="false"
    >
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="order">
        <el-input-number v-model="form.order" :min="0" :max="1000" />
      </el-form-item>
    </el-form>
  </FormDrawer>
</template>
<script setup>
import AsideList from "@/components/AsideList.vue";
import FormDrawer from "@/components/FormDrawer.vue";
import { ref, reactive } from "vue";
import { getImageClassList, createImageClass } from "@/api/image_class.js";
import { toast } from "@/composables/util.js";
const loading = ref(false);
const list = ref([]);
const activeId = ref(0);
const currentPage = ref(1);
const limit = ref(10);
const total = ref(0);
const form = reactive({
  name: "",
  order: 50,
});
const rules = {
  name: [
    {
      required: true,
      message: "图库分类名称不能为空",
      trigger: "blur",
    },
  ],
};
const formRef = ref(null);

//获取数据方法
function getData(p = null) {
  if (typeof p == 'number'){
    currentPage.value = p;
  }
  loading.value = true;
  getImageClassList(currentPage.value)
    .then((res) => {
      list.value = res.list;
      total.value = res.totalCount;
      let item = list.value[0];
      if (item) {
        activeId.value = item.id;
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
getData();
const formDrawerRef = ref(null);
const handleCreate = () => {
  formDrawerRef.value.open();
};
const handleSubmit = () => {
  // console.log('提交表单');
  formRef.value.validate((valid) => {
    if (!valid) return false;
    formDrawerRef.value.showLoading();
    createImageClass(form)
      .then((res) => {
        toast("新增成功");
        getData(1);
        formDrawerRef.value.close();
      })
      .finally(() => {
        formDrawerRef.value.hideLoading();
      });
  });
};
defineExpose({
  handleCreate,
});
</script>
<style>
.image-aside {
  border-right: 1px solid #eeeeee;
  position: relative;
}
.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}
.image-aside .bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
}
</style>