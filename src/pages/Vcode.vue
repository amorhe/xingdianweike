<template>
  <div class="login_content">
    <img class="img1" src="../assets/img1.png" alt="图片">
    <img class="img2" src="../assets/img2.png" alt="图片">
    <div class="login_tt">
      <div class="login_txt">成为达人</div>
      <div>请输入验证码</div>
    </div>
    <div class="input-captcha-20190115">
      <div class="input-box">
        <label class="simple-input-content" for="simpleInput1">
          <span :class="simpleInput1.length == 0?'highlight':''">{{simpleInput1.slice(0,1)}}</span>
          <span :class="simpleInput1.length == 1?'highlight':''">{{simpleInput1.slice(1,2)}}</span>
          <span :class="simpleInput1.length == 2?'highlight':''">{{simpleInput1.slice(2,3)}}</span>
          <span :class="simpleInput1.length == 3?'highlight':''">{{simpleInput1.slice(3,4)}}</span>
          <span :class="simpleInput1.length == 4?'highlight':''">{{simpleInput1.slice(4,5)}}</span>
          <span :class="simpleInput1.length == 5?'highlight':''">{{simpleInput1.slice(5,6)}}</span>
          <span v-if="simpleInput1.length < 6"></span>
        </label>
        <input id="simpleInput1" v-model.trim="simpleInput1" type="number" @input="oninput">
      </div>
    </div>
    <div class="recode">重新获取验证码</div>
    <div class="remind">
      <router-link to="">《星点微课用户协议》</router-link>
      <span>和</span>
      <router-link to="">《星点微课隐私政策》</router-link>
    </div>
    <button class="nextBtn">完成</button>
  </div>
</template>

<script>
  export default {
    name: "Logo",
    data(){
      return{
        simpleInput1: ''
      }
    },
    methods:{
      oninput(){
        if(this.simpleInput1.length>6){
          this.simpleInput1 = this.simpleInput1.slice(0,6)
        }
      }
    }
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

    .recode {
      color: #2D55BF;
      font-size: 24px;
      font-weight: bold;
      padding: 0 30px;
    }

    .remind {
      color: #A1A1AA;
      font-size: 24px;
      position: absolute;
      top: 732px;
      left: 30px;
      text-align: center;
      width: 690px;

      >a {
        color: #2D55BF;
        font-weight: bold;
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

  .input-captcha-20190115 {
    .input-box {
      border-radius: 8px;
      width: 100%;
      display: inline-block;
      padding: 30px;
      box-sizing: border-box;
      position: relative;
      input {
        vertical-align: middle;
      }
      & + .input-box {
        margin-top: 20px;
      }
      // 六个span时的样式
      .simple-input-content {
        label {
          padding: 20px;
          width: 100%;
          box-sizing: border-box;
        }
        span {
          vertical-align: middle;
          display: inline-block;
          height: 106px;
          width: 106px;
          background: #F7F8F9;
          line-height: 106px;
          text-align: center;
          font-size: 40px;
          color: #191E32;
          font-weight: bold;
        }
        .highlight {
          position: absolute;
          content: '';
          display: inline-block;
          width: 4px;
          height: 40px;
          top: 50%;
          color: #2D55BF;
          transform: translate(50px,-50%);
          animation: blink 1.2s infinite steps(1, start);
        }
      }

      #simpleInput1 {
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        z-index: -1;
        opacity: 0;
        padding: 30px;
        box-sizing: border-box;
      }
      /* 去掉input[type=number]浏览器默认的icon显示 */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button { // chrome
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
      input{ // 火狐
        -moz-appearance:textfield;
      }
    }
  }


  @keyframes blink {
    0%, 100% {
      background-color: #2D55BF;
    }
    50% {
      background-color: transparent;
    }
  }
</style>
