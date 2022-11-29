<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" width="200px">
        <aside></aside>
      </el-aside>
      <el-container>
        <el-header class="header">{{route.meta.theme}}</el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import aside from './Aside/index.vue'
const route = useRoute()
</script>

<style lang="scss" scoped>
.common-layout{
  .header{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background: repeating-linear-gradient(to right, #051325, #0c2747);
  }
  .main{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #051325;
    margin-top: 20px;
  }
}
</style>