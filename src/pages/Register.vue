<template>
  <div class="login_content">
    <img class="img1" src="../assets/img1.png" alt="图片">
    <img class="img2" src="../assets/img2.png" alt="图片">
    <div class="login_tt">
      <div class="login_txt">登录/注册</div>
      <div>请输入您的手机号</div>
    </div>
    <div class="input_write">
      <input type="tel">
    </div>
    <button class="nextBtn" @click="$router.push('./Vcode')">下一步</button>
  </div>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped lang="less">
  .login_content {
    position: relative;
    padding: 64px 0;
    color: #A1A1AA;
    font-size: 24px;

    .img1 {
      position: absolute;
      right: 0;
      top: 0;
      width: 65px;
      height: 157px;
    }

    .img2 {
      position: absolute;
      left: 0;
      top: 740px;
      width: 150px;
      height: 300px;
    }

    .login_tt {
      padding: 0 30px;
    }
    .login_txt {
      color: #191E32;
      font-size: 40px;
      font-weight: bold;
    }

    .input_write {
      height: 130px;
      background: #F7F8F9;
      margin-top: 26px;
      >input {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 30px;
        outline: none;
        border: none;
        background: #F7F8F9;
        caret-color: #2D55BF;
        font-size: 24px;
      }
    }
    .nextBtn {
      width:690px;
      height:100px;
      background:rgba(45,85,191,1);
      border-radius:50px;
      color: #fff;
      font-size: 30px;
      position: absolute;
      top: 790px;
      left: 30px;
      outline: none;
      border: none;
    }
  }
  input::-webkit-input-placeholder {
    color: #A1A1AA;
  }
  input::-moz-input-placeholder {
    color: #A1A1AA;
  }
  input::-ms-input-placeholder {
    color: #A1A1AA;
  }
</style>
