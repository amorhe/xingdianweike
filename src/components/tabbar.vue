<template>
    <div class="tabbar_all">
      <div @click="changeTab(0)">
        <img v-if="tab==0" src="../assets/home_active_icon.png" alt="图标">
        <img v-if="tab!=0" src="../assets/home_icon.png" alt="图标">
        <span :class="tab==0?'active_text':''">首页</span>
      </div>
      <div @click="changeTab(1)">
        <img v-if="tab==1" src="../assets/type_active_icon.png" alt="图标">
        <img v-if="tab!=1" src="../assets/type_icon.png" alt="图标">
        <span :class="tab==1?'active_text':''">分类</span>
      </div>
      <div @click="changeTab(2)">
        <img v-if="tab==2" src="../assets/bookmark_active_icon.png" alt="图标">
        <img v-if="tab!=2" src="../assets/bookmark_icon.png" alt="图标">
        <span :class="tab==2?'active_text':''">学习</span>
      </div>
      <div @click="changeTab(3)">
        <img v-if="tab==3" src="../assets/personal_active_icon.png" alt="图标">
        <img v-if="tab!=3" src="../assets/personal_icon.png" alt="图标">
        <span :class="tab==3?'active_text':''">我的</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "tabbar",
      data() {
        return {
          tab: ''
        }
      },
      created() {
        this.tab = this.$route.meta.index;
      },
      methods:{
        changeTab(e) {
          if(this.tab!==e){
            this.tab = e;
            switch (e) {
              case 0:
                this.$router.replace('./');
                break;
              case 1:
                this.$router.replace('./Type');
                break;
              case 2:
                this.$router.replace('./BookMark');
                break;
              default:
                this.$router.replace('./Personal')
            }
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .tabbar_all {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 120px;
    padding: 0 94px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:rgba(250,250,251,1);
    box-shadow:0 0 20px 0 rgba(0,0,0,0.1);
    cursor: pointer;

    >div {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
      color: #9A9BA3;

      >img {
        width: 36px;
        height: 36px;
        margin-bottom: 6px;
      }

      .active_text {
        color: #1B1C31;
      }
    }
  }
</style>
