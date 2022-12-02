<template>
  <div class="box">
    <div class="container">
      <div
        ref="form_box"
        class="form-box">
        <!-- 注册 -->
        <div
          ref="register_box"
          class="register-box hidden">
          <h1>register</h1>
          <input
            v-model="registerForm.userName"
            type="text"
            placeholder="用户名/手机号" />
          <input
            v-model="registerForm.email"
            type="email"
            placeholder="邮箱" />
          <input
            v-model="registerForm.passWord"
            type="password"
            placeholder="密码" />
          <input
            v-model="registerForm.checkPassWord"
            type="password"
            placeholder="确认密码" />
          <button @click="onRegister">注册</button>
        </div>
        <!-- 登录 -->
        <div
          ref="login_box"
          class="login-box">
          <h1>login</h1>
          <input
            v-model="loginForm.userName"
            type="text"
            placeholder="用户名" />
          <input
            v-model="loginForm.passWord"
            type="password"
            placeholder="密码" />
          <button @click="onSubmit">登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>夜之城</span></h2>
        <p>让我们把这儿<span>烧成灰</span>吧</p>
        <img
          src="../../assets/image/01.jpg"
          alt="" />
        <p>已有账号</p>
        <button @click="goToLogin"> 去登录 </button>
      </div>
      <div class="con-box right">
        <h2>欢迎来到<span>夜之城</span></h2>
        <p>让我们把这儿<span>烧成灰</span>吧</p>
        <img
          src="../../assets/image/06.jpg"
          alt="" />
        <p>没有账号？</p>
        <button @click="goToRegister"> 去注册 </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, reactive, ref } from 'vue'
  import { useUserInfo } from '@/stores/user'
  import { useRoute, useRouter } from 'vue-router'
  import { emailCheck } from '@/plugins/reg'
  import { useGetLocalStorage, useSetLocalStorage } from '@/plugins/localStorage'
  // 绑定元素
  const form_box = ref(null)
  const register_box = ref(null)
  const login_box = ref(null)
  const userInfo = useUserInfo()
  const route = useRoute()
  const router = useRouter()
  // 默认邮箱没有重复
  const emailRepeat = ref(false)
  onMounted(() => {
    if (route.query.msg) {
      ElMessage.error(route.query.msg)
    } else {
      const isToken = useGetLocalStorage('token', true)
      if (isToken) {
        tokenLogin()
      }
    }
  })
  /**
   * 注册Form
   */
  const registerForm = reactive({
    userName: '',
    email: '',
    passWord: '',
    checkPassWord: ''
  })
  const loginForm = reactive({
    userName: '',
    passWord: ''
  })
  // 计算属性
  const isPass = computed(() => {
    // 获取已注册的用户数据
    const userList = useGetLocalStorage('userInfos')
    const arr = userList.filter((item) => {
      return item.userName == loginForm.userName && item.passWord == loginForm.passWord
    })
    if (arr.length > 0) {
      return {
        loading: true,
        info: arr[0]
      }
    } else {
      return {
        loading: false,
        info: {}
      }
    }
  })
  // 切换
  const goToRegister = () => {
    form_box.value.style.transform = 'translateX(80%)'
    login_box.value.classList.add('hidden')
    register_box.value.classList.remove('hidden')
  }
  const goToLogin = () => {
    form_box.value.style.transform = 'translateX(0%)'
    register_box.value.classList.add('hidden')
    login_box.value.classList.remove('hidden')
  }
  /**
   * 注册
   */
  const onRegister = () => {
    // 将用户数据保存到本地缓存中
    const userList = useGetLocalStorage('userInfos')
    // 格式校验
    for (const key in registerForm) {
      if (registerForm[key] === '') {
        ElMessage.error('请将信息填写完整！')
        return
      }
    }

    if (!emailCheck.test(registerForm.email)) {
      ElMessage.error('邮箱格式有误！')
      return
    } else if (registerForm.passWord.length < 6) {
      ElMessage.error('密码长度必须超过6位数！')
      return
    } else if (registerForm.passWord !== registerForm.checkPassWord) {
      ElMessage.error('密码不一致，请核对！')
      return
    } else if (userList) {
      // 验证邮箱是否已经被注册
      const repeatList = userList.filter((item) => {
        return registerForm.email == item.email
      })
      if (repeatList.length > 0) {
        emailRepeat.value = true
        ElMessage.error('该邮箱已经被注册！')
        return
      } else {
        emailRepeat.value = false
      }
    }
    if (!emailRepeat.value) {
      // 注册成功 保存用户信息
      if (!userList) {
        useSetLocalStorage('userInfos', [])
      }
      const newUserList = useGetLocalStorage('userInfos')
      // 将注册过的账号保存到本地缓存中
      newUserList.push(registerForm)
      useSetLocalStorage('userInfos', newUserList)
      // 同时保存当前账号保存在本地
      useSetLocalStorage('user', registerForm)
      // 保存成功 使用户直接登录 不在需要手动登录
      /**
       * userInfo.$patch({ isLogin: true })这种也可以修改pinia
       */
      userInfo.onSuccess(registerForm)
      // 已经登录过Token 存入本地
      useSetLocalStorage('token', 'token')
      ElMessage.success('嘟嘟噜━(*｀∀´*)ノ亻!')
      router.push('/')
    }
  }

  /**
   * 登录
   */
  const onSubmit = () => {
    if (isPass.value.loading) {
      onLogin('login')
    } else {
      ElMessage.error('用户名或密码不正确耶~')
    }
  }
  // 登录功能 封装一下 方便自动登录
  const onLogin = (type) => {
    useSetLocalStorage('token', 'token')
    if (type || type == 'login') {
      // 同时保存当前账号保存在本地
      useSetLocalStorage('user', isPass.value.info)
      userInfo.onSuccess(isPass.value.info)
      ElMessage.success('嘟嘟噜━(*｀∀´*)ノ亻!')
      router.push('/')
    } else {
      // 直接获取本地账号登录
      const Info = useGetLocalStorage('user')
      userInfo.onSuccess(Info)
      router.push('/')
    }
  }
  const tokenLogin = () => {
    ElMessageBox.confirm(
      '检测到你曾经来到过夜之城,如果不是脑瘫的话,我想你也不想再登录一次吧',
      'Tips',
      {
        confirmButtonText: '我不是脑瘫',
        cancelButtonText: '爷就是脑瘫',
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            onLogin()
            instance.confirmButtonLoading = false
            done()
          } else {
            done()
          }
        }
      }
    )
      .then(() => {
        ElMessage({
          type: 'success',
          message: '嘟嘟噜━(*｀∀´*)ノ亻!'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'warning',
          message: '好吧好吧 你牛逼~'
        })
      })
  }
</script>

<style lang="scss" scoped>
  .box {
    /* 100%窗口高度 */
    width: 100%;
    height: 100%;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161626;

    &::before {
      content: '';
      /* 绝对定位 */
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#2193b0, #6dd5ed);
      /* 将元素剪切为一个圆形 【30%表示圆的直径】 【right 70%表示圆心】 */
      clip-path: circle(30% at right 70%);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#ee9ca7, #ffdde1);
      /* 将元素剪切为一个圆形 【20%表示圆的直径】 10% 10%表示圆心】 */
      clip-path: circle(20% at 10% 10%);
    }

    .container {
      background-color: #fff;
      width: 650px;
      height: 415px;
      border-radius: 5px;
      /* 阴影 */
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
      /* 相对定位 */
      position: relative;

      .form-box {
        /* 绝对定位 */
        position: absolute;
        top: -10%;
        left: 5%;
        background-color: #d3b7d8;
        width: 320px;
        height: 500px;
        border-radius: 5px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        /* 动画过渡 加速后减速 */
        transition: 0.5s ease-in-out;

        .register-box,
        .login-box {
          /* 弹性布局 垂直排列 */
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .hidden {
          display: none;
          transition: 0.5s;
        }
        button {
          width: 70%;
          margin-top: 35px;
          background-color: #f6f6f6;
          outline: none;
          border-radius: 8px;
          padding: 13px;
          color: #a262ad;
          letter-spacing: 2px;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #a262ad;
          color: #f6f6f6;
          transition: background-color 0.5s ease;
        }
      }
      .con-box {
        width: 50%;
        /* 弹性布局 垂直排列 居中 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* 绝对定位 居中 */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        h2 {
          color: #8e9aaf;
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 3px;
          text-align: center;
          margin-bottom: 4px;
        }
        p {
          font-size: 12px;
          letter-spacing: 2px;
          color: #8e9aaf;
          text-align: center;
        }
        span {
          color: #d3b7d8;
        }
        img {
          width: 150px;
          height: 150px;
          opacity: 0.9;
          margin: 40px 0;
        }
        button {
          margin-top: 3%;
          background-color: #fff;
          color: #a262ad;
          border: 1px solid #d3b7d8;
          padding: 6px 10px;
          border-radius: 5px;
          letter-spacing: 1px;
          outline: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #d3b7d8;
          color: #fff;
        }
      }
      .left {
        left: -2%;
      }
      .right {
        right: -2%;
      }
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 25px;
    /* 大写 */
    text-transform: uppercase;
    color: #fff;
    /* 字间距 */
    letter-spacing: 5px;
  }
  input {
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    /* 下边框样式 */
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;
  }
  input::placeholder {
    color: #fff;
  }
  input:focus {
    color: #a262ad;
    outline: none;
    border-bottom: 1px solid #a262ad80;
    transition: 0.5s;
  }
  input:focus::placeholder {
    opacity: 0;
  }
</style>
<!-- <style scoped></style> -->
