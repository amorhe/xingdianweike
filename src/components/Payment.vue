<template>
    <div class="payment">
      <div class="bg_view" @touchmove.prevent @click="closePayment"></div>
      <div class="pay_box">
        <div class="pay_top">
          <div>购买课程</div>
          <img class="close_img" @click="closePayment" src="../assets/close.png" alt="图标">
        </div>
        <div class="goods_div">
          <img class="goods_img" src="http://img3.imgtn.bdimg.com/it/u=359807051,55365574&fm=26&gp=0.jpg" alt="图片">
          <div>
            <span class="goods_title">Tableau Desktop可视化高级应用</span>
            <span>“数据结构+业务场景+应用技巧+可视化哇诶u千万请问人情味</span>
            <div class="goods_price">
              <span>¥</span>
              <span class="goods_price_number">99</span>
            </div>
          </div>
        </div>
        <button class="payment_btn">微信立即支付</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Payment",
      props:['isShow'],
      data(){
        return{

        }
      },
      methods:{
        closePayment(){
          this.$emit('changeO',false)
        }
      }
    }
</script>

<style scoped lang="less">
  .payment {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;

    .bg_view {
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,.7);
    }

    .pay_box {
      padding: 50px 30px 30px;
      background: #fff;
      position: fixed;
      left: 0;
      width: 100vw;
      bottom: 0;

      .pay_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 40px;
        margin-bottom: 60px;

        .close_img {
          width: 30px;
          height: 30px;
        }
      }
    }

    .goods_div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 72px;

      .goods_img {
        width: 200px;
        height: 200px;
        margin-right: 30px;
      }

      >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 460px;
        color: #A1A1AA;
        font-size: 24px;

        >span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .goods_title {
          font-size: 30px;
          color: #191E32;
          font-weight: bold;
        }
        .goods_price {
          color: #D33848;
          font-size: 18px;
          font-weight: bold;

          .goods_price_number {
            font-size: 30px;
          }
        }
      }
    }

    .payment_btn {
      width:690px;
      height:100px;
      background:rgba(240,181,68,1);
      border-radius:50px;
      color: #fff;
      font-weight: bold;
      font-size: 30px;
      border: none;
      outline: none;
    }
  }
</style>
