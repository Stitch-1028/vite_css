<template>
  <div class="container">
    <div class="box">
      <div class="img-box">
        <img
          src="../../assets/image/01.jpg"
          alt="" />
      </div>
      <div class="img-box">
        <img
          src="../../assets/image/02.jpg"
          alt="" />
      </div>
      <div class="img-box">
        <img
          src="../../assets/image/03.jpg"
          alt="" />
      </div>
      <div class="img-box">
        <img
          src="../../assets/image/04.jpg"
          alt="" />
      </div>
      <div class="img-box">
        <img
          src="../../assets/image/05.jpg"
          alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 1200px;
      height: 550px;
      /* 弹性布局 水平排列 */
      display: flex;
      flex-direction: row;
      /* 设置元素的倒影效果，below是倒影效果在元素下方，15px是元素和倒影的距离，后面的属性是设置倒影渐变 */
      -webkit-box-reflect: below 15px -webkit-linear-gradient(transparent 50%, rgba(255, 255, 255, 0.3));
      .img-box {
        width: 100px;
        height: 550px;
        overflow: hidden;
        /* 动画过渡 */
        transition: 0.3s;
        img {
          width: 100%;
          height: 100%;
          /* 由于这里我的图片都是竖图，而容器是横向的，所以对图片做了以下处理，这里大家根据自己的图片进行调节即可 */
          /* 对图片进行剪切，保留原始比例 */
          object-fit: cover;
          /* object-position 属性一般与 object-fit 一起使用，用来设置元素的位置。 */
          object-position: 50% 20%;
        }
        /* 鼠标移入，图片展开 */
        &:hover {
          width: 800px;

          &:nth-child(1) {
            width: 100px;
          }
        }
        /* 默认最后一张展开 */
        &:nth-child(1) {
          flex: 1;
        }
      }
    }
  }
</style>
