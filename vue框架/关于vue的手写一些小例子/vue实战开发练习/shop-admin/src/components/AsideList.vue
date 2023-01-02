<template>
  <div class="aside-list" :class="{ 'active': active }">
    <span
      style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;-o-text-overflow: ellipsis;"
    >
      <slot></slot>
    </span>
    <el-button
      style="margin-left: auto; padding: 0 4px"
      text
      type="primary"
      size="small"
      @click="$emit('edit')"
    >
      <el-icon :size="12"><Edit /></el-icon>
    </el-button>
    <el-button text type="primary" size="small" @click="$emit('delete')">
      <el-icon :size="12"><Close /></el-icon>
    </el-button>
  </div>
</template>
<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['edit','delete'])
</script>
<style>
.aside-list {
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  padding: 0 2px;
  font-size: 15px;
  color: #848484;
  cursor: pointer;
  height: 50px;
}
.active {
  background-color: #eefcff;
}
.aside-list:hover {
  background-color: #eefcff;
}
</style>