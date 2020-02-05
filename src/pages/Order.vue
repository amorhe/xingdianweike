<template>
    <div>
      <div class="tabView">
        <span :class="activeIndex==0?'active_span':''" @click="tabClick(0)">全部</span>
        <span :class="activeIndex==1?'active_span':''" @click="tabClick(1)">已完成</span>
        <span :class="activeIndex==2?'active_span':''" @click="tabClick(2)">已取消</span>
      </div>
      <div class="order_list">
        <div>
          <img class="order_img" src="http://img1.imgtn.bdimg.com/it/u=177584662,3641877159&fm=26&gp=0.jpg" alt="图片">
          <div class="order_content">
            <div>
              <span class="title">微信高级产品团队，分饿我去i人气王</span>
              <span class="color1">订单未支付</span>
<!--              <span class="color2">购买成功</span>-->
<!--              <span class="color3">购买失败</span>-->
            </div>
            <div>总价 ¥99</div>
          </div>
        </div>
        <div class="order_subtn">
          <a class="cancel">取消订单</a>
          <a class="confirm">立即支付</a>
<!--          <a class="share">分享课程</a>-->
<!--          <a class="confirm">购买失败</a>-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Order",
      data(){
          return{
            activeIndex: 0
          }
      },
      methods:{
        tabClick(e) {
          this.activeIndex = e;
        }
      }
    }
</script>

<style scoped lang="less">
  .tabView {
    height: 90px;
    color: #191E32;
    font-size: 30px;
    font-weight: bold;
    line-height: 90px;
    box-shadow:0 20px 20px 0 rgba(0,0,0,0.03);
    padding: 0 30px;

    >span {
      margin-right: 28px;
    }

    .active_span {
      color: #F0B544;
      font-size: 40px;
    }
  }

  .order_list {
    width:690px;
    height:240px;
    background:rgba(255,255,255,1);
    box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
    border-radius:10px;
    box-sizing: border-box;
    margin: 30px;


    >div:nth-child(1) {
      padding: 30px 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .order_img {
        width: 120px;
        height: 120px;
        margin-right: 28px;
      }

      .order_content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        >div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 24px;
          color: #A1A1AA;

          .title {
            width: 356px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #191E32;
            font-size: 30px;
            font-weight: bold;
          }
          .color1 {
            color: #F3B446;
          }
          .color2 {
            color: #30C659;
          }
          .color3 {
            color: #D33848;
          }
        }
      }
    }

    .order_subtn {
      display: flex;
      padding: 0 30px;
      justify-content: flex-end;
      >a {
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
