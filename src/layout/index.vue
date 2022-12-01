<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside
        class="aside"
        :width="isWidth">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div
            class="header_icon"
            @click="isCollapse">
            <el-icon>
              <DArrowRight v-if="aside.isShrink"></DArrowRight>
              <DArrowLeft v-if="!aside.isShrink"></DArrowLeft>
            </el-icon>
          </div>
          <light-button></light-button>
        </el-header>
        <el-main class="main">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import Aside from './Aside/index.vue'
  import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
  import { useAside } from '@/stores/aside'
  import { computed } from 'vue'
  import LightButton from '@/components/发光按钮/index.vue'
  const aside = useAside()
  const isWidth = computed(() => {
    return aside.isShrink ? '65px' : '200px'
  })
  const isCollapse = () => {
    aside.updatedShrink()
  }
</script>

<style lang="scss" scoped>
  .common-layout {
    width: 100%;
    height: 100%;
    /* 渐变背景 */
    background: linear-gradient(125deg, #2c3e50, #27ae60, #2980b9, #557424, #8e44ad);
    // background: black;
    /* 指定背景图像的大小 */
    background-size: 500%;
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: bgAnimation 15s linear infinite;
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: white;
      font-size: 20px;
      font-weight: bold;
      background: repeating-linear-gradient(to right, #051325, #0c2747);

      &_icon {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 45px;
        cursor: pointer;
      }
    }
    .main {
      width: 96%;
      height: 200px;
      border-radius: 20px;
      background-color: #051325;
      margin: 20px 2%;
    }
    .el-aside {
      transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -moz-transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -o-transition: width 0.5s;
    }
  }
  /* 定义动画 */
  @keyframes bgAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
