<template>
  <div class="wrapper">
    <div class="button">
      <div class="icon">
        <i class="fab fa-facebook"></i>
      </div>
      <a
        href="https://connect.facebook.com"
        target="_blank">
        Facebook
      </a>
    </div>
    <div class="button">
      <div class="icon">
        <i class="fab fa-twitter"></i>
      </div>
      <a
        href="https://connect.facebook.com"
        target="_blank">
        Twitter
      </a>
    </div>
    <div class="button">
      <div class="icon">
        <i class="fab fa-instagram"></i>
      </div>
      <a
        href="www.Instagram.com"
        target="_blank">
        Instagram
      </a>
    </div>
    <div class="button">
      <div class="icon">
        <i class="fab fa-github"></i>
      </div>
      <a
        href="https://github.com"
        target="_blank">
        Github
      </a>
    </div>
    <div class="button">
      <div class="icon">
        <i class="fab fa-weibo"></i>
      </div>
      <a
        href="https://weibo.com"
        target="_blank">
        Weibo
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    .button {
      display: flex;
      height: 60px;
      width: 60px;
      cursor: pointer;
      margin: 0 5px;
      overflow: hidden;
      background-color: #fff;
      border-radius: 50px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-out;

      .icon {
        display: inline-block;
        height: 60px;
        width: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 50%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;

        i {
          font-size: 25px;
          line-height: 60px;
          transition: all 0.3s ease-out;
        }
      }
      &:nth-child(1) {
        .icon {
          background: #426782;
        }
      }
      &:nth-child(2) {
        .icon {
          background: #1da1f2;
        }
      }
      &:nth-child(3) {
        .icon {
          background: #e1306c;
        }
      }
      &:nth-child(4) {
        .icon {
          background: #333;
        }
      }
      &:nth-child(5) {
        .icon {
          background: #df5151;
        }
      }
      &:nth-child(1):hover {
        .icon {
          background: #426782;
        }
        a {
          color: #426782;
        }
      }
      &:nth-child(2):hover {
        .icon {
          background: #1da1f2;
        }
        a {
          color: #1da1f2;
        }
      }
      &:nth-child(3):hover {
        .icon {
          background: #e1306c;
        }
        a {
          color: #e1306c;
        }
      }
      &:nth-child(4):hover {
        .icon {
          background: #333;
        }
        a {
          color: #333;
        }
      }
      &:nth-child(5):hover {
        .icon {
          background: #df5151;
        }
        a {
          color: #df5151;
        }
      }
      a {
        display: none;
        font-size: 20px;
        font-weight: 500;
        line-height: 60px;
        margin-left: 10px;
        transition: all 0.3s ease-out;
      }
    }
    .button:hover {
      width: 200px;
      .icon {
        i {
          color: #fff;
        }
      }
      a {
        display: block;
      }
    }
  }
</style>
