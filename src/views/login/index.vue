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
            placeholder="用户名" />
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
            type="text"
            placeholder="用户名" />
          <input
            type="password"
            placeholder="密码" />
          <button @click="onLogin">登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>欢迎来到<span>宠物之家</span></h2>
        <p>快来领取你的专属<span>宠物</span>吧</p>
        <img
          src="../../assets/image/01.jpg"
          alt="" />
        <p>已有账号</p>
        <button @click="goToLogin"> 去登录 </button>
      </div>
      <div class="con-box right">
        <h2>欢迎来到<span>宠物之家</span></h2>
        <p>快来看看你的可爱<span>宠物</span>吧</p>
        <img
          src="../../assets/image/01.jpg"
          alt="" />
        <p>没有账号？</p>
        <button @click="goToRegister"> 去注册 </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue'
  import { useUserInfo } from '@/stores/user'
  import { useRoute, useRouter } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import { emailCheck } from '@/plugins/reg'
  // 绑定元素
  const form_box = ref(null)
  const register_box = ref(null)
  const login_box = ref(null)
  const userInfo = useUserInfo()
  const route = useRoute()
  const router = useRouter()
  onMounted(() => {
    if (route.query.msg) {
      ElMessage.error(route.query.msg)
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
    const userList = JSON.parse(localStorage.getItem('userInfo'))
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
      userList.map((item) => {
        if (registerForm.email == item.email) {
          ElMessage.error('该邮箱已经被注册！')
          return
        }
      })
    } else {
      // 注册成功 保存用户信息
      if (!userList) {
        localStorage.setItem('userInfo', JSON.stringify([]))
      }
      const newUserList = JSON.parse(localStorage.getItem('userInfo'))
      newUserList.push(registerForm)
      localStorage.setItem('userInfo', JSON.stringify(newUserList))
      // 保存成功 使用户直接登录 不在需要手动登录 TODO...
      /**
       * userInfo.$patch({ isLogin: true })这种也可以修改pinia
       */
      userInfo.onSuccess(registerForm)
      ElMessage.success('嘟嘟噜━(*｀∀´*)ノ亻!')
      router.push('/')
    }
  }

  /**
   * 登录
   */
  const onLogin = () => {}
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
