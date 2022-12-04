<template>
  <div class="box">
    <div class="card">
      <div class="photo">
        <img
          src="../../assets/image/01.jpg"
          alt="" />
      </div>
      <h1>艾斯</h1>
      <h2>“火拳”艾斯</h2>
      <p>波特卡斯·D·艾斯，日本漫画《航海王》及其衍生作品中的角色。萨博与路飞的结义兄弟。</p>
      <a href="#">了解更多</a>
    </div>
    <div class="card">
      <div class="photo">
        <img
          src="../../assets/image/02.jpg"
          alt="" />
      </div>
      <h1>萨博</h1>
      <h2>革命军的二把手</h2>
      <p>萨博，日本漫画《航海王》及其衍生作品中的角色。是路飞与艾斯的结义兄弟。</p>
      <a href="#">了解更多</a>
    </div>
    <div class="card">
      <div class="photo">
        <img
          src="../../assets/image/03.jpg"
          alt="" />
      </div>
      <h1>路飞</h1>
      <h2>草帽小子</h2>
      <p>蒙奇·D·路飞，日本漫画《航海王》及其衍生作品中的男主角。是草帽海贼团的船长。</p>
      <a href="#">了解更多</a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .card {
      /* 相对定位 */
      position: relative;
      width: 300px;
      height: 450px;
      margin: 20px;
      background-color: #758a99;
      border-radius: 20px;
      /* 溢出隐藏 */
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      /* 阴影 */
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
      color: #fff;
      /* 默认大图 */
      .photo {
        /* 绝对定位 */
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0%;
        overflow: hidden;
        /* 动画过渡 */
        transition: 0.5s;
        /* 黑色到透明的渐变背景,可以更好的看清楚名字 */
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, #222);
        }
        img {
          width: 100%;
          height: 100%;
          /* 保持原有尺寸比例，裁切长边 */
          object-fit: cover;
        }
      }

      &:hover {
        /* 鼠标移入变小图 */
        .photo {
          top: 30px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          /* 鼠标移入背景消失 */
          &::before {
            display: none;
          }
        }
        h1 {
          top: 170px;
        }
      }
      h1 {
        position: absolute;
        top: 370px;
        transition: 0.5s;
      }
      h2 {
        margin-top: 220px;
        width: 80%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 20px;
        text-align: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
      }
      p {
        width: 90%;
        text-indent: 32px;
        font-size: 16px;
        margin-bottom: 15px;
        line-height: 30px;
      }
      a {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 8px 32px;
        border-radius: 8px;
        &:hover {
          color: #fff;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
</style>
