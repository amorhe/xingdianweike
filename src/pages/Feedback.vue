<template>
    <div>
      <div class="input_view">
        <input type="number" placeholder="请输入手机号码">
      </div>
      <textarea id="textarea" cols="30" rows="10" placeholder="请输入反馈内容"></textarea>
      <button class="submit">提交反馈</button>
    </div>
</template>

<script>
    export default {
      name: "Feedback",
      data(){
          return{
            value: ''
          }
      }
    }
</script>
<style scoped lang="less">
  .input_view {
    height: 130px;
    background: #F7F8F9;
    margin-bottom: 30px;

    >input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      padding: 0 30px;
      background: #F7F8F9;
      font-size: 30px;
      caret-color: #2D55BF;
    }
  }
  #textarea {
    width: 100%;
    height: 450px;
    overflow-y: scroll;
    caret-color: #2D55BF;
    font-size: 30px;
    background: #F7F8F9;
    outline: none;
    border: none;
    padding: 44px 30px;
  }
  .submit {
    width:690px;
    height:100px;
    background:rgba(45,85,191,1);
    border-radius:50px;
    color: #fff;
    font-size: 30px;
    position: absolute;
    left: 30px;
    bottom: 30px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
    color: #A1A1AA;
  }
  input::-moz-input-placeholder,textarea::-moz-input-placeholder {
    color: #A1A1AA;
  }
  input::-ms-input-placeholder,textarea::-ms-input-placeholder {
    color: #A1A1AA;
  }
</style>
