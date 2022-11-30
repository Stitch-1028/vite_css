<template>
  <div class="box">
    <ul>
      <li class="item active">
        <img
          :src="five"
          alt=""
          style="width: 100%; height: 100%" />
      </li>
      <li class="item">
        <img
          :src="six"
          alt=""
          style="width: 100%; height: 100%" />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import five from '@/assets/image/05.jpg'
  import six from '@/assets/image/06.jpg'
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    ul {
      margin: 0 auto;
      min-width: 1240px;
      width: 1200px;
      height: 320px;
      overflow: hidden;
      transition: all 1s;

      &:hover {
        li {
          width: 500px;
        }
      }

      li {
        position: relative;
        float: left;
        list-style-type: none;
        width: 500px;
        height: 320px;
        transition: all 1s;
      }
      .active {
        width: 700px;
      }

      li:hover {
        width: 700px;
      }
    }
  }
</style>
