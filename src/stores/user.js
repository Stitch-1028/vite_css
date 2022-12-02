import { defineStore } from 'pinia'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserInfo = defineStore('userInfo', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      isLogin: false,
      userName: '',
      email: '',
      passWord: ''
    }
  },
  getters: {
    userInfo: (state) => {
      return {
        userName: state.userName,
        email: state.email,
        passWord: state.passWord
      }
    }
  },
  actions: {
    // 注册成功或者登录成功
    onSuccess(form) {
      this.isLogin = true
      this.userName = form?.userName
      this.email = form?.email
      this.passWord = form?.passWord
    }
  }
})
