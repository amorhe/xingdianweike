<template>
    <div class="content_main">
      <div class="content_box">
        <div class="top">
          <span>提现</span>
        </div>
        <div class="middle">
          <span class="count">7283.91</span>
          <span>可提现金额（元）</span>
        </div>
      </div>
      <div class="tt">提现金额</div>
      <input type="number" placeholder="请输入提现金额" class="withdraw_input">
      <div class="withdraw_txt">
        <div class="ll">·目前为人工提现，每次提现事，请联系客服（微信：lil938293）发送：“你好，为要提现”指令，既可快速到账</div>
        <div> ·每次提现金额不少于50元，1个工作日内到账 ·可在「钱包」-「交易明细」中查看提现进度</div>
      </div>
      <button class="withdraw_btn">立即提现</button>
    </div>
</template>

<script>
    export default {
        name: "Withdraw"
    }
</script>

<style scoped lang="less">
  .content_main {
    padding: 30px;

    .content_box {
      width: 690px;
      height: 248px;
      border-radius: 15px;
      background-image: url("../assets/with_bg.png");
      background-position: 0 0;
      background-size: 100%;
      background-repeat: no-repeat;
      box-sizing: border-box;
      padding: 25px 30px;
      color: #fff;
      font-size: 24px;
      overflow: hidden;
      position: relative;
      margin-bottom: 63px;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 30px;
        font-weight: bold;

        >img {
          height: 24px;
        }
      }

      .middle {
        display: flex;
        flex-direction: column;

        .count {
          font-size: 80px;
          font-weight: bold;
        }
      }
    }

    .withdraw_input {
      height: 130px;
      width: 100%;
      background: #F7F8F9;
      padding: 0 30px;
      box-sizing: border-box;
      caret-color: #2D55BF;
      font-size: 24px;
      margin: 5px 0;
    }

    .withdraw_txt {
      font-size: 24px;
      color: #A1A1AA;

      .ll {
        color: #D33848;
      }
    }

    .withdraw_btn {
      margin-top: 134px;
      width:690px;
      height:100px;
      background:rgba(243,180,70,1);
      border-radius:50px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
    }
  }
</style>
