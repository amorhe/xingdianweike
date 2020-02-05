<template>
    <div class="content_main">
      <div class="finish_module">
        <button>进入学习</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PayFinish"
    }
</script>

<style scoped lang="less">
  .content_main {

    .finish_module {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 170px;
      background: #F7F8F9;
      display: flex;
      justify-content: center;
      align-items: center;

      >button {
        width:690px;
        height:100px;
        background:rgba(64,110,206,1);
        border-radius:50px;
        color: #fff;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
</style>
