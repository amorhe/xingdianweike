<template>
    <div>
      <div class="trade_list" v-for="item in 2">
        <div class="trade_count">
          <div class="trade_time">2010.01</div>
          <div>收入 ¥839.92   体现 ¥1903.02</div>
        </div>
        <div class="trade_info">
          <div>
            <div>
              <div class="trade_title">达人售课</div>
              <div>01.04 19:32:03</div>
            </div>
            <div class="trade_title">+11.02</div>
          </div>
          <div>
            <div>
              <div class="trade_title">2019年12月收入提现</div>
              <div>收入 ¥839.92   体现 ¥1903.02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Trade"
    }
</script>

<style scoped lang="less">
  @colorGray: #A1A1AA;
  .trade_list {

   .trade_count {
     height: 130px;
     background: #F7F8F9;
     padding: 0 25px 0 30px;
     color: @colorGray;
     font-size: 24px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     font-weight: bold;

     .trade_time {
       color: #191E32;
       font-size: 30px;
       margin-bottom: 4px;
     }
   }

    .trade_info {
      padding: 74px 25px 74px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-weight: bold;
      color: @colorGray;
      font-size: 24px;
      height: 370px;
      box-sizing: border-box;

      >div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .trade_title {
          font-size: 30px;
          color: #191E32;
        }
      }
    }
  }
</style>
