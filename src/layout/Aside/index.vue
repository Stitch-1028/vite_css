<template>
  <div class="left_box">
    <div class="left_box_top">
      <Sun></Sun>
    </div>
    <el-menu
      :default-active="routerUrl"
      class="menu"
      :collapse="aside.isShrink"
      background-color="#141414"
      text-color="#ffffff"
      active-text-color="#409EFF"
      :collapse-transition="false"
      router>
      <el-menu-item
        v-for="item in MenuInfo"
        :key="item.id"
        :index="item.path">
        <el-icon><SwitchFilled></SwitchFilled></el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
  import { MenuInfo } from '@/config/index'
  import { SwitchFilled } from '@element-plus/icons-vue'
  import { useAside } from '@/stores/aside'
  import { computed } from 'vue'
  import Sun from '@/components/太阳系/index.vue'
  const aside = useAside()
  const routerUrl = computed(() => {
    if (localStorage.getItem('pathUrl')) {
      return localStorage.getItem('pathUrl')
    } else {
      return '001'
    }
  })
</script>

<style lang="scss" scoped>
  .left_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &_top {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
      z-index: 100;
      background-color: #141414;
      // background-color: skyblue;
      opacity: 0.7;
    }
    .menu {
      width: 100%;
      height: calc(100% - 60px);
      border: none;
      opacity: 0.7;
      transition: all 1s;
    }
  }
</style>
