<template>
    <div class="content">
      <img class="logo" src="http://img1.imgtn.bdimg.com/it/u=1549587221,1674832088&fm=26&gp=0.jpg" alt="logo">
      <div class="version">版本号v1.0.0</div>
      <div class="book_wrap">
        <a>《星点微课用户协议》</a>
        <span>和</span>
        <a>《星点微课隐私政策》</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped lang="less">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;

    .logo {
      width: 240px;
      height: 240px;
      margin-top: 110px;
    }

    .version {
      font-size: 30px;
      color: #000;
      font-weight: bold;
    }

    .book_wrap {
      margin-bottom: 168px;
      font-size: 24px;
      color: #A1A1AA;

      a {
        color: #2D55BF;
      }
    }
  }
</style>
