// 获取本地缓存
export const useGetLocalStorage = (str, isParse = false) => {
  if (isParse) {
    return localStorage.getItem(str)
  } else {
    return JSON.parse(localStorage.getItem(str))
  }
}

// 修改本地缓存
export const useSetLocalStorage = (str, data) => {
  if (typeof data == 'string') {
    localStorage.setItem(str, data)
  } else {
    localStorage.setItem(str, JSON.stringify(data))
  }
}

// 移除特定的缓存
export const useDeleteLocalStorage = (str) => {
  localStorage.removeItem(str)
}
