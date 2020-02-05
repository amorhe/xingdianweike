<template>
    <div class="content_body">
      <input type="text" class="nickname">
      <button class="keepBtn">保存并返回</button>
    </div>
</template>

<script>
    export default {
        name: "Nickname"
    }
</script>

<style scoped lang="less">
  .content_body {
    padding: 70px 0;

    .nickname {
      width: 100vw;
      height: 130px;
      padding: 0 30px;
      box-sizing: border-box;
      background: #F7F8F9;
      font-size: 30px;
      border: none;
      outline: none;
      caret-color: #2D55BF;
    }

    .keepBtn {
      width:690px;
      height:100px;
      background:rgba(45,85,191,1);
      border-radius:50px;
      color: #fff;
      margin: 427px 30px 0;
      font-size: 30px;
      font-weight: bold;
    }
  }
</style>
