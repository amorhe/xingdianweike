<template>
    <div class="content_main">
      <div class="content_box">
        <div class="top">
          <span>收益记录</span>
          <img src="../assets/dayuWhite.png" alt="图标">
        </div>
        <div class="middle">
          <span class="count">7283.91</span>
          <span>总收入（元）</span>
        </div>
        <div class="bottom">
          <div>
            <span>83.02</span>
            <span>可提现</span>
          </div>
          <div>
            <span>7200.79</span>
            <span>已提现</span>
          </div>
          <div>
            <span>4920.92</span>
            <span>直卖收益</span>
          </div>
          <div>
            <span>1723.65</span>
            <span>团队收益</span>
          </div>
        </div>
      </div>
      <div class="expert_view">
        <router-link to="/Income">
          <span class="tt">交易明细</span>
          <div>
            <span>本月总收入 2839.91</span>
            <img src="../assets/dayu.png" alt="图标">
          </div>
        </router-link>
        <router-link to="/ExpertInfo">
          <span class="tt">达人资料</span>
          <img src="../assets/dayu.png" alt="图标">
        </router-link>
        <div>
          <span class="tt">达人说明</span>
          <img src="../assets/dayu.png" alt="图标">
        </div>
      </div>
      <button class="withdraw" @click="$router.push('./Withdraw')">提现</button>
    </div>
</template>

<script>
    export default {
        name: "Expert"
    }
</script>

<style scoped lang="less">
  .content_main {
    padding: 30px;

    .content_box {
      width: 690px;
      height: 366px;
      border-radius: 5px;
      background-image: url("../assets/expert_bg.png");
      background-position: 0 0;
      background-size: 100%;
      background-repeat: no-repeat;
      box-sizing: border-box;
      padding: 25px 30px;
      color: #fff;
      font-size: 24px;
      overflow: hidden;
      position: relative;
      margin-bottom: 30px;

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

      .bottom {
        position: absolute;
        left: 0;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        >div {
          display: flex;
          flex-direction: column;
          align-items: center;

          >span:nth-child(1){
            font-size: 30px;
            font-weight: bold;
          }
        }
      }
    }

    .expert_view {
      width:690px;
      height:366px;
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
      border-radius:10px;
      padding: 64px 30px;
      box-sizing: border-box;
      color: #A1A1AA;
      font-size: 24px;

      >div,a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 56px;

        >div {
          display: flex;
          align-items: center;
        }

        img {
          height: 24px;
          margin-left: 30px;
        }
      }
    }

    .withdraw {
      width:690px;
      height:100px;
      background:rgba(243,180,70,1);
      border-radius:50px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      position: absolute;
      left: 30px;
      bottom: 30px;
      border: none;
      outline: none;
    }
  }
</style>
