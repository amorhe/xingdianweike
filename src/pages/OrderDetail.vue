<template>
    <div class="content_main">
      <div class="order_info">
        <span class="order_state">订单未支付</span>
        <span class="order_price">¥99</span>
      </div>
      <span class="order_time">下单时间 2020.01.04 19:32:03</span>
      <div class="order_poster">
        <img class="order_img" src="http://img2.imgtn.bdimg.com/it/u=3074509859,1146280749&fm=26&gp=0.jpg" alt="图片">
        <div>
          <div class="cource_title">12天零基础学会编程</div>
          <div>“数据结构+业务场景+应用技巧+可视化+大wqeqw</div>
        </div>
      </div>
      <div class="order_information">
        <span class="intor">订单信息</span>
        <div>
          <span>订单号</span>
          <span>2020010400303</span>
        </div>
        <div>
          <span>手机号</span>
          <span>18000223212</span>
        </div>
        <div>
          <span>下单时间</span>
          <span>2020.01.04 19:32:03</span>
        </div>
        <div class="noneB">
          <span>支付金额</span>
          <span>¥99</span>
        </div>
      </div>
      <div class="order_position">
        <span class="cancel">取消订单</span>
        <span class="confirm">立即支付</span>
        <!--          <a class="share">分享课程</a>-->
        <!--          <a class="confirm">购买失败</a>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderDetail"
    }
</script>

<style scoped lang="less">
  .content_main {
    padding: 20px 30px;

    .order_info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .order_state {
        font-weight: bold;
        color: #191E32;
        font-size: 40px;
      }

      .order_price {
        color: #D33848;
        font-size: 40px;
        font-weight: bold;
      }
    }

    .order_time {
      color: #A1A1AA;
      font-size: 24px;
      margin-bottom: 24px;
    }

    .order_poster{
      width:690px;
      height:180px;
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
      border-radius:10px;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .order_img {
        width: 120px;
        height: 120px;
        margin-right: 28px;
      }
      >div {
        display: flex;
        flex-direction: column;

        .cource_title {
          font-size: 30px;
          color: #191E32;
          font-weight: bold;
        }

        >div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 482px;
          color: #A1A1AA;
          font-size: 24px;
        }
      }
    }

    .order_information {
      width:690px;
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
      border-radius:10px;
      padding: 24px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      >* {
        margin-bottom: 18px;
      }

      .intor {
        font-size: 30px;
        font-weight: bold;
      }
      .noneB {
        margin-bottom: 0;
      }
      >div {
        display: flex;
        align-items: center;
        font-size: 24px;
        justify-content: space-between;

        >span:nth-child(1){
          color: #A1A1AA;
        }
        >span:nth-child(2){
          width: 508px;
        }
      }
    }

    .order_position {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 110px;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background: #FAFAFB;

      >span {
        width: 120px;
        height: 50px;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        border-radius: 6px;
        margin-left: 10px;
      }
      .cancel {
        border: 1px #D33848 solid;
        color: #D33848;
      }
      .confirm {
        background: #F3B446;
        color: #fff;
      }
      .share {
        border: 1px #191E32 solid;
        color: #191E32;
      }
    }
  }
</style>
