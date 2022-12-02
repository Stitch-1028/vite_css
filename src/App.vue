<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { onMounted } from 'vue'
  import { useGetLocalStorage } from '@/plugins/localStorage'
  import { useUserInfo } from '@/stores/user'
  const userInfo = useUserInfo()
  onMounted(() => {
    if (useGetLocalStorage('token', true)) {
      // 直接获取本地账号登录
      const Info = useGetLocalStorage('user')
      userInfo.onSuccess(Info)
    }
  })
</script>

<style scoped></style>
