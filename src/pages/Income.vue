<template>
  <div>
    <div class="tabView">
      <span :class="activeIndex==0?'active_span':''" @click="tabClick(0)">全部</span>
      <span :class="activeIndex==1?'active_span':''" @click="tabClick(1)">直卖收益</span>
      <span :class="activeIndex==2?'active_span':''" @click="tabClick(2)">团队收益</span>
    </div>
    <div class="incomeList">
      <div v-for="item in 2">
        <div class="tt income_top">
          <span>刘小虎</span>
          <span>+10</span>
        </div>
        <div>直卖·12天零基础学会编程</div>
        <div class="income_time">2020.01.04 19:32:03</div>
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

  .incomeList {
    padding: 0 30px;

    >div {
      margin-top: 38px;
      display: flex;
      flex-direction: column;
      color: #A1A1AA;
      font-size: 24px;

      .income_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .income_time {
        font-size: 18px;
      }
    }
  }
</style>
