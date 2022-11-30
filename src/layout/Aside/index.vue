<template>
  <div class="left_box">
    <div class="left_box_top">
      <Sun></Sun>
    </div>
    <el-menu
    default-active="001"
    class="menu"
    :collapse="aside.isShrink"
    background-color="#141414"
    text-color="#ffffff"
    active-text-color="#409EFF"
    :collapse-transition="false"
    router
    >
      <el-menu-item v-for="(item) in MenuInfo" :key="item.id" :index="item.path">
        <el-icon><ElementPlus /></el-icon>
        <template #title>{{item.title}}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { MenuInfo }from '@/config/index'
import { ElementPlus } from '@element-plus/icons-vue'
import { useAside } from '@/stores/aside'
import Sun from '@/components/太阳系/index.vue'
const aside = useAside()
</script>

<style lang="scss" scoped>
.left_box{
  width: 100%;
  height: 100%;

  &_top{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    z-index: 100;
    background-color: #141414;
    opacity: 0.7;
  }
  .menu{
    width:100%;
    height: calc(100% - 60px);
    border: none;
    opacity: 0.7;
    transition: all 1s;
  }
}
</style>