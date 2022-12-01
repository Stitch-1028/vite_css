<template>
  <el-config-provider :locale="zhCn">
    <layout></layout>
  </el-config-provider>
</template>

<script setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import layout from './layout/index.vue'
</script>

<style scoped></style>
