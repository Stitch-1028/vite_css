<template>
  <div class="box">
    <div class="container">
      <div
        ref="cardOne"
        class="card">
        <div class="content">
          <h2>01</h2>
          <h3>Card One</h3>
          <p>
            Realistic glass card hover effect, realistic glass card hover effect, realistic glass
            card hover effect.
          </p>
          <a @click="onclickA(1)">Read More</a>
        </div>
      </div>
      <div
        ref="cardTwo"
        class="card">
        <div class="content">
          <h2>02</h2>
          <h3>Card Two</h3>
          <p>
            Realistic glass card hover effect, realistic glass card hover effect, realistic glass
            card hover effect.
          </p>
          <a @click="onclickA(2)">Read More</a>
        </div>
      </div>
      <div
        ref="cardThree"
        class="card">
        <div class="content">
          <h2>03</h2>
          <h3>Card Three</h3>
          <p>
            Realistic glass card hover effect, realistic glass card hover effect, realistic glass
            card hover effect, realistic glass card hover effect.
          </p>
          <a @click="onclickA(3)">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VanillaTilt from 'vanilla-tilt'
  import { onMounted, ref } from 'vue'
  const cardOne = ref(null)
  const cardTwo = ref(null)
  const cardThree = ref(null)
  onMounted(() => {
    VanillaTilt.init([cardOne.value, cardTwo.value, cardThree.value], {
      max: 15, //最大倾斜度数
      speed: 400, //倾斜转换的速度
      glare: true, //是否开启眩光效果
      'max-glare': 1 //最大眩光的不透明度
    })
  })
  const onclickA = (e) => {
    console.log(e)
  }
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      z-index: 1;

      .card {
        /* 相对定位 */
        position: relative;
        width: 280px;
        height: 400px;
        margin: 30px;
        /* 阴影 */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.1);
        /* 溢出隐藏 */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        /* 背景模糊 */
        backdrop-filter: blur(5px);

        .content {
          padding: 20px;
          text-align: center;
          /* 默认下移+隐藏 */
          transform: translateY(100px);
          opacity: 0;
          /* 动画过渡 */
          transition: 0.5s;

          h2 {
            position: absolute;
            top: -80px;
            right: 30px;
            font-size: 128px;
            color: rgba(255, 255, 255, 0.05);
            /* pointer-events: none; */
          }

          h3 {
            font-size: 28px;
            color: #fff;
          }

          p {
            font-size: 16px;
            color: #fff;
            font-weight: 300;
            margin: 10px 0 15px 0;
          }
          a {
            position: relative;
            cursor: pointer;
            display: inline-block;
            padding: 8px 20px;
            margin-top: 15px;
            background-color: #fff;
            color: #000;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 500;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        }

        &:hover {
          .content {
            /* 鼠标移入，上移+显示 */
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }
</style>
