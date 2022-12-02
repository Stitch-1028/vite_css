<template>
  <div
    v-show="$show"
    class="transition-box"
    @mousemove="move"
    @mouseleave="leave">
    <div class="info">
      <div class="item">
        <el-icon :size="20"><Avatar></Avatar></el-icon>
        <p>{{ userInfo.userName }}</p>
      </div>
      <div class="item">
        <el-icon :size="20"><Promotion></Promotion></el-icon>
        <p>{{ userInfo.email }}</p>
      </div>
    </div>
    <div class="btn">
      <div class="item">
        <el-icon :size="23"><SwitchButton></SwitchButton></el-icon>
        <el-button
          style="width: 100px; margin-left: 20px"
          plain
          color="#626aef"
          @click="exit">
          退出
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useUserInfo } from '@/stores/user'
  import { Avatar, Promotion, SwitchButton } from '@element-plus/icons-vue'
  import { useDeleteLocalStorage } from '@/plugins/localStorage'
  import { useRouter } from 'vue-router'
  const userInfo = useUserInfo()
  const router = useRouter()
  const props = defineProps({
    show: {
      type: Boolean,
      default: true
    }
  })
  const $show = computed({
    get() {
      return props.show
    },
    set(val) {
      emit('update:show', val)
    }
  })
  const emit = defineEmits(['update:show'])
  const move = () => {
    $show.value = true
  }
  const leave = () => {
    $show.value = false
  }
  const exit = () => {
    useDeleteLocalStorage('user')
    useDeleteLocalStorage('token')
    router.push({ name: 'Login', query: { msg: '臭弟弟,给爷登录' } })
  }
</script>

<style lang="scss" scoped>
  .transition-box {
    position: absolute;
    width: 200px;
    height: 150px;
    right: 0;
    top: 55px;
    background-color: #141414;
    color: #fff;
    opacity: 0.8;
    border-radius: 20px;
    padding-left: 10px;
    .info {
      width: 100%;
      height: 55%;
      .item {
        margin: 15px auto;
        width: 100%;
        height: 30px;
        display: flex;
        user-select: none;
        p {
          margin-left: 20px;
        }
      }
    }
    .btn {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      .item {
        display: flex;
        width: 100%;
        height: 40px;
      }
    }
  }
</style>
