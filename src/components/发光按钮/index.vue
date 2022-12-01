<template>
  <a
    class="title"
    :style="style">
    {{ route.meta.theme }}
  </a>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  const route = useRoute()
  const style = ref({
    '--i': 0
  })
  watch(
    () => route.path,
    () => {
      style.value['--i'] = route.meta.number
    }
  )
</script>

<style lang="scss" scoped>
  .title {
    display: block;
    /* 相对定位 */
    position: relative;
    // width: 140px;
    height: 60px;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 60px;
    text-align: center;
    color: plum;
    text-decoration: none;
    font-size: 20px;
    /* 动画过渡 */
    transition: all 0.3s ease-in-out;
    /* 改变各个元素的颜色【划重点】 */
    /* hue-rotate是颜色滤镜，可以加不同的度数来改变颜色，这里我们用了calc自动计算函数，以及var函数来调用我们给每一个a设置的不同自定义属性1~5，然后分别乘以60度，就能够分别得到不同的度数 */
    filter: hue-rotate(calc(var(--i) * 60deg));

    &::before {
      /* 将两个伪元素的相同部分写在一起 */
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid plum;
      /* 动画过渡 最后的0.3s是延迟时间 */
      transition: all 0.3s ease-in-out 0.3s;
    }
    &::after {
      /* 将两个伪元素的相同部分写在一起 */
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid plum;
      /* 动画过渡 最后的0.3s是延迟时间 */
      transition: all 0.3s ease-in-out 0.3s;
    }
    &::before {
      top: 0;
      left: 0;
      /* 删除左边元素的右、下边框 */
      border-right: 0;
      border-bottom: 0;
    }
    &::after {
      bottom: 0;
      right: 0;
      /* 删除右边元素的左、上边框 */
      border-top: 0;
      border-left: 0;
    }
    &:hover {
      background-color: plum;
      color: #000;
      /* 发光效果和倒影 */
      box-shadow: 0 0 50px plum;
      /* below是下倒影 1px是倒影的元素相隔的距离 最后是个渐变颜色 */
      -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.3));
      /* 设置以上属性的延迟时间 */
      transition-delay: 0.4s;
      &::before {
        width: 99%;
        height: 58px;
        transition-delay: 0s;
      }
      &::after {
        width: 99%;
        height: 58px;
        transition-delay: 0s;
      }
    }
  }
</style>
