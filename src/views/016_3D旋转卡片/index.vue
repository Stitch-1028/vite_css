<template>
  <div class="container">
    <div class="card">
      <!-- 卡片正面 -->
      <div class="front">
        <img
          src="../../assets/image/01.jpg"
          alt="" />
      </div>
      <!-- 卡片背面 -->
      <div class="back">
        <img
          src="../../assets/image/06.jpg"
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
    .card {
      /* 相对定位 */
      position: relative;
      width: 300px;
      height: 450px;
      /* 圆角 */
      border-radius: 30px;
      /* 鼠标移到元素上光标变为小手 */
      cursor: pointer;
      background-color: #fff;
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
      /* 给父元素加一个3D盒子属性，那么子元素就到背面了，这个属性是加到父元素上，但是影响的是子元素 */
      transform-style: preserve-3d;
      /* 给卡片添加默认动画 */
      animation: rotate-reverse 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
      .front {
        /* 绝对定位 子元素是绝对定位，父元素需要相对定位 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* 弹性布局，让元素垂直陈列 */
        display: flex;
        flex-direction: column;
        /* 现在子元素垂直陈列，那么就是让子元素水平居中 */
        align-items: center;
        /* 平均分配高度给每一个子元素 */
        justify-content: space-around;
        font-size: 20px;
        background-color: #fff;
        border-radius: 30px;
        backface-visibility: hidden;
        img {
          width: 200px;
          height: 200px;
        }
      }
      .back {
        /* 绝对定位 子元素是绝对定位，父元素需要相对定位 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* 弹性布局，让元素垂直陈列 */
        display: flex;
        flex-direction: column;
        /* 现在子元素垂直陈列，那么就是让子元素水平居中 */
        align-items: center;
        /* 平均分配高度给每一个子元素 */
        justify-content: space-around;
        font-size: 20px;
        background-color: #fff;
        border-radius: 30px;
        backface-visibility: hidden;
        /* 因为背面卡片要到后面去，所以我们给背面卡片加一个沿Y轴旋转180度的属性，这里我们可以看到旋转了但是没有到后面去，原因就是父盒子现在不是3D盒子，而是一个2D盒子，所以我们需要让父元素变成3D盒子 */
        transform: rotateY(180deg);
        img {
          width: 200px;
          height: 200px;
        }
      }

      /* 鼠标移入卡片时执行动画 */
      &:hover {
        /* 动画（名称 时长 第三个属性是贝塞尔曲线，我们可以自定义动画的运动轨迹，让动画的运动轨迹有了很多种可能 第四个属性是当我们的动画完成时的状态，一般动画完成之后就回到了0%的状态，默认值是backwards，当我们给的属性值是forwards时那么动画到100%的时候就会停下来，不会回到0%） */
        animation: rotate 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
      }
    }
  }

  /* 下面我们定义一下旋转动画 */
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(180deg);
    }
  }
  @keyframes rotate-reverse {
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
