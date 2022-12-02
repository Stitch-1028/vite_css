// 获取本地缓存
export const useGetLocalStorage = (str) => {
  return JSON.parse(localStorage.getItem(str))
}

// 修改本地缓存
export const useSetLocalStorage = (str, data) => {
  localStorage.setItem(str, JSON.stringify(data))
}
