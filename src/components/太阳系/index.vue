<template>
  <div class="sun" style="--s: #f39c12;--e: #3498db;--m: #1abc9c;">
      <div class="earth">
          <div class="moon"></div>
      </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
/* 太阳 */
.sun{
    /* 绝对定位 */
    position: absolute;
    top:18px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    /* 通过var函数调用自定义属性--s，设置太阳的颜色 */
    background-color: var(--s);
    /* 发光效果 */
    box-shadow: 0 0 10px var(--s),
    0 0 20px var(--s),
    0 0 30px var(--s),
    0 0 40px var(--s);
    /* 执行动画：动画名 时长 线性的 无限次播放 */
    animation: rotate 36.5s linear infinite;
}
/* 太阳外圈（地球轨道） */
.sun::after{
    content: "";
    width: 50px;
    height: 50px;
    /* 绝对定位 居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #fff;
    border-radius: 50%;
    z-index: -1;
}
/* 地球 */
.earth{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--e);
    left: 30px;
    box-shadow: 0 0 10px var(--e),
    0 0 20px var(--e),
    0 0 30px var(--e),
    0 0 40px var(--e);
    animation: rotate 3s linear infinite;
}
/* 地球外圈（月球轨道） */
.earth::after{
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid gray;
    border-radius: 50%;
}
/* 月球 */
.moon{
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--m);
    left: 18px;
    box-shadow: 0 0 5px var(--m),
    0 0 10px var(--m),
    0 0 20px var(--m);
}

/* 定义动画 */
@keyframes rotate {
    to{
        transform: rotateZ(360deg);
    }
}
</style>