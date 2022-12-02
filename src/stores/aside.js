import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useAside = defineStore('aside', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      isShrink: false
    }
  },
  getters: {
    unIsShrink: (state) => !state.isShrink
  },
  actions: {
    updatedShrink() {
      this.isShrink = this.isShrink ? false : true
    }
  }
})
