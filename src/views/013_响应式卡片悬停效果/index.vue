<template>
  <div class="box">
    <div class="container">
      <div class="card">
        <div class="img-box">
          <img
            src="../../assets/image/01.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <h2>卡片一</h2>
          <p>
            我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一
          </p>
        </div>
      </div>
      <div class="card">
        <div class="img-box">
          <img
            src="../../assets/image/02.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <h2>卡片二</h2>
          <p>
            我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二
          </p>
        </div>
      </div>
      <div class="card">
        <div class="img-box">
          <img
            src="../../assets/image/03.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <h2>卡片三</h2>
          <p>
            我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三我是内容三
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      /* 相对定位 */
      position: relative;
      /* 弹性布局 */
      display: flex;
      justify-content: center;
      align-items: center;
      /* 允许换行 */
      flex-wrap: wrap;
      padding: 30px;
      .card {
        position: relative;
        max-width: 300px;
        height: 215px;
        background-color: #fff;
        margin: 30px 15px;
        padding: 20px 15px;
        border-radius: 5px;
        /* 阴影 */
        /* box-shadow: 0 5px 200px rgba(255,255,255,0.5); */
        box-shadow: 0 5px 200px rgba(0, 0, 0, 0.5);
        /* 动画过渡 */
        transition: 0.3s ease-in-out;
        .img-box {
          position: relative;
          width: 220px;
          height: 205px;
          border-radius: 5px;
          overflow: hidden;
          top: -60px;
          left: 25px;
          z-index: 1;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          img {
            width: 100%;
          }
        }
        .text-box {
          position: relative;
          margin-top: -140px;
          padding: 10px 15px;
          text-align: center;
          color: #111;
          /* 设置元素不可见 */
          visibility: hidden;
          /* 不透明度为0 */
          opacity: 0;
          transition: 0.3s ease-in-out;
          p {
            text-align: left;
            line-height: 25px;
            margin-top: 10px;
            font-size: 15px;
            color: #555;
          }
        }
        &:hover {
          /* 鼠标移入，卡片伸长 */
          height: 420px;
          .text-box {
            /* 鼠标移入，设置元素可见 */
            visibility: visible;
            opacity: 1;
            margin-top: -40px;
            /* 动画延迟0.2秒 */
            transition-delay: 0.2s;
          }
        }
      }
    }
  }
</style>
