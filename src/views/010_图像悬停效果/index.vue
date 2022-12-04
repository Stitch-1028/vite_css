<template>
  <div class="containers">
    <div class="container">
      <div class="box">
        <div class="img-box">
          <img
            src="../../assets/image/01.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <div>
            <h2>娜美</h2>
            <p>娜美，日本漫画《航海王》及衍生作品中的女主角，草帽一伙的航海士，人称“小贼猫”。</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img
            src="../../assets/image/02.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <div>
            <h2>乌索普</h2>
            <p>
              乌索普，日本漫画《海贼王》及其衍生作品中的男性角色。草帽一伙狙击手，被称作“GOD·乌索普”。
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img
            src="../../assets/image/03.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <div>
            <h2>乔巴</h2>
            <p>
              托尼托尼·乔巴，日本漫画《航海王》及其衍生作品中的角色。乔巴是草帽一伙的船医，吃了人人果实的驯鹿，可用蓝波球进行八段变形。
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="img-box">
          <img
            src="../../assets/image/04.jpg"
            alt="" />
        </div>
        <div class="text-box">
          <div>
            <h2>弗兰奇</h2>
            <p>
              弗兰奇（原名：卡特·弗兰姆）是日本漫画《航海王》及其衍生作品中的角色。草帽一伙船匠，性格豪放，喜欢唱歌，跳奇怪的舞，下身喜欢只穿一条短裤。身为改造人的弗兰奇，藏着各种兵器。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .containers {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      /* 相对定位 */
      position: relative;
      /* 弹性布局 横向排列 允许换行 */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 1200px;
      min-width: 1240px;
      justify-content: space-between;

      .box {
        position: relative;
        width: 275px;
        height: 275px;
        /* 溢出隐藏 */
        overflow: hidden;
        /* 动画过渡 */
        transition: 0.5s;

        .img-box {
          /* 绝对定位 */
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            /* 保持原有尺寸比例，裁切长边 */
            object-fit: cover;
          }
          /* 渐变遮罩（黑色——透明） 默认隐藏 */
          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(to top, #222, transparent);
            /* mix-blend-mode: multiply; */
            opacity: 0;
            transition: 0.5s;
          }
        }
        .text-box {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          z-index: 2;
          /* 弹性布局 元素位于容器的结尾 */
          display: flex;
          align-items: flex-end;

          h2 {
            color: #fff;
            font-size: 20px;
            margin-bottom: 10px;
            /* 默认移出可视范围 */
            transform: translateY(200px);
            transition: 0.5s;
          }
          p {
            color: #fff;
            font-size: 13px;
            line-height: 20px;
            /* 默认移出可视范围 */
            transform: translateY(200px);
            transition: 0.5s;
          }
        }
      }
      /* 鼠标移入，盒子变大 */
      .box:hover {
        z-index: 1;
        transform: scale(1.25);
        box-shadow: 0 25px 40px rgba(0, 0, 0, 0.5);
        /* 鼠标移入，渐变遮罩显示 */
        .img-box::before {
          opacity: 1;
        }
        .text-box {
          h2 {
            /* 鼠标移入，移入可视范围 */
            transform: translateY(0);
            /* 设置动画延迟 */
            transition-delay: 0.3s;
          }
          p {
            /* 鼠标移入，移入可视范围 */
            transform: translateY(0);
            /* 设置动画延迟 */
            transition-delay: 0.4s;
          }
        }
      }
    }
  }
</style>
