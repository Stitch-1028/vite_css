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
          <div class="block">
            <el-avatar
              :size="50"
              :src="userIcon"
              @mouseenter="showUserInfo = true"
              @mouseleave="showUserInfo = false">
            </el-avatar>
          </div>
        </el-header>
        <el-main class="main">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>

  <transition name="el-zoom-in-top">
    <!-- <user-info
      :show-user-info="showUserInfo"
      @keep="getInfoShow">
    </user-info> -->
    <user-info v-model:show="showUserInfo"> </user-info>
  </transition>
</template>

<script setup>
  import { ref } from 'vue'
  import userIcon from '@/assets/image/03.jpg'
  import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
  import { useAside } from '@/stores/aside'
  import { computed } from 'vue'
  import Aside from './Aside/index.vue'
  import LightButton from '@/components/发光按钮/index.vue'
  import userInfo from '@/components/用户信息/index.vue'
  const aside = useAside()
  const isWidth = computed(() => {
    return aside.isShrink ? '65px' : '200px'
  })
  const showUserInfo = ref(false)
  const isCollapse = () => {
    aside.updatedShrink()
  }
  // const getInfoShow = (val) => {
  //   showUserInfo.value = val
  // }
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
      justify-content: space-between;
      position: relative;
      color: white;
      font-size: 20px;
      font-weight: bold;
      background: repeating-linear-gradient(to right, #051325, #0c2747);

      &_icon {
        width: 20px;
        height: 20px;
        left: 45px;
        margin-left: 30px;
        cursor: pointer;
      }
      .block {
        margin-right: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
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
