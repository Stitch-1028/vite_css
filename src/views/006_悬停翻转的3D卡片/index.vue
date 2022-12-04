<template>
  <div class="container">
    <div class="box">
      <div class="front">
        <div class="icon">
          <img
            src="../../assets/image/01.jpg"
            alt="" />
        </div>
        <span>Apple</span>
      </div>
      <div class="back">
        <span>Apple</span>
        <p>
          苹果公司（Apple Inc.
          ）是美国一家高科技公司。由史蒂夫·乔布斯、斯蒂夫·盖瑞·沃兹尼亚克和罗纳德·杰拉尔德·韦恩（Ron
          Wayne）等人于1976年4月1日创立。
        </p>
      </div>
    </div>
    <div class="box">
      <div class="front">
        <div class="icon">
          <img
            src="../../assets/image/02.jpg"
            alt="" />
        </div>
        <span>Google</span>
      </div>
      <div class="back">
        <span>Google</span>
        <p>
          谷歌公司（Google
          Inc.）成立于1998年9月4日，由拉里·佩奇和谢尔盖·布林共同创建，被公认为全球最大的搜索引擎公司。
        </p>
      </div>
    </div>
    <div class="box">
      <div class="front">
        <div class="icon">
          <img
            src="../../assets/image/03.jpg"
            alt="" />
        </div>
        <span>Microsoft</span>
      </div>
      <div class="back">
        <span>Microsoft</span>
        <p>
          微软（Microsoft）是一家美国跨国科技企业，由比尔·盖茨和保罗·艾伦于1975年4月4日创立。公司总部设立在华盛顿州雷德蒙德（Redmond，邻近西雅图）。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .container {
    /* 弹性布局 允许换行 水平居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .box {
      width: 350px;
      margin: 10px;
      text-align: center;
      /* 相对定位 */
      position: relative;
      /* 开启3D效果 */
      transform-style: preserve-3d;
      /* 设置视距 */
      perspective: 3000px;
      .front {
        background-color: #fff;
        width: 100%;
        height: 220px;
        /* 弹性布局 垂直排列 垂直居中 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* 阴影 */
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        /* 设置过渡 */
        transition: 0.5s ease;
        .icon {
          height: 80px;
          img {
            width: 80px;
            height: 100%;
            /* 渐变背景 */
            background: linear-gradient(220deg, #02dbb0, #007adf);
            /* 以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉 */
            -webkit-background-clip: text;
            /* 将文字透明镂空 */
            -webkit-text-fill-color: transparent;
            font-size: 65px;
            font-weight: 900;
          }
        }
        span {
          /* 渐变背景 */
          background: linear-gradient(220deg, #02dbb0, #007adf);
          /* 以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉 */
          -webkit-background-clip: text;
          /* 将文字透明镂空 */
          -webkit-text-fill-color: transparent;
          font-size: 22px;
          font-weight: 600;
          text-transform: uppercase;
        }
      }
      .back {
        /* 绝对定位 */
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 220px;
        background: linear-gradient(220deg, #02dbb0, #007adf);
        padding: 30px;
        color: #fff;
        /* 默认不透明度为0 */
        opacity: 0;
        /* 默认位置下移并旋转-90度 */
        transform: translateY(110px) rotateX(-90deg);
        /* 设置过渡 */
        transition: 0.5s ease;
        span {
          font-size: 22px;
          font-weight: 600;
          text-transform: uppercase;
        }
        p {
          margin-top: 12px;
          /* 文本两端对齐 */
          text-align: justify;
          line-height: 23px;
        }
      }
      /* 鼠标移入卡片，两个面做出相应变化 */
      &:hover {
        .front {
          opacity: 0;
          transform: translateY(-110px) rotateX(90deg);
        }
        .back {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }
      }
    }
  }
</style>
