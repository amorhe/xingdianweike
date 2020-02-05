<template>
  <div class="content_main">
    <div class="person_info">
       <div>
         <span class="font_bold phonenumber">星星不是很远</span>
         <router-link to="/EditorPersonInfo">查看并编辑个人资料</router-link>
       </div>
       <img class="avatar" src="http://img2.imgtn.bdimg.com/it/u=2752281117,4140466299&fm=26&gp=0.jpg" alt="头像">
    </div>
    <div class="list_menu">
      <router-link to="">
        <div>
          <img class="my_icon" src="../assets/my_1.png" alt="图标">
          <span class="menu_txt">订单管理</span>
        </div>
        <img class="icon" src="../assets/dayu.png" alt="图标">
      </router-link>
      <div>
        <div>
          <img class="my_icon" src="../assets/my_2.png" alt="图标">
          <span class="menu_txt">客服</span>
        </div>
        <div>
          <span>每周一至周六 09:00-20:00</span>
          <img class="icon" src="../assets/dayu.png" alt="图标">
        </div>
      </div>
      <router-link to="/Feedback">
        <div>
          <img class="my_icon" src="../assets/my_3.png" alt="图标">
          <span class="menu_txt">意见反馈</span>
        </div>
        <img class="icon" src="../assets/dayu.png" alt="图标">
      </router-link>
      <router-link to="/About">
        <div>
          <img class="my_icon" src="" alt="">
          <span class="menu_txt">关于星点微课</span>
        </div>
        <img class="icon" src="../assets/dayu.png" alt="图标">
      </router-link>
    </div>
    <div class="list_menu">
      <router-link to="/Expert">
        <div>
          <img class="my_icon" src="../assets/my_4.png" alt="图标">
          <span class="menu_txt">星点达人</span>
        </div>
        <div>
          <span>总达人</span>
          <img class="icon" src="../assets/dayu.png" alt="图标">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
      export default {
        name: 'Personal',
        data(){
          return{

          }
        }
      }
</script>

<style scoped lang="less">
  .content_main {
    padding: 82px 30px 0 45px;

    .person_info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;

      >div {
        display: flex;
        flex-direction: column;
        color: #A1A1AA;
        font-size: 24px;

        .phonenumber {
          font-size: 40px;
          color: #191E32;
        }
      }
      .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }

    .list_menu {
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
      border-radius:10px;
      padding: 63px 34px;
      margin-bottom: 30px;

      >div,a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 56px;
        color: #A1A1AA;
        font-size: 24px;

        .menu_txt {
          color: #191E32;
          font-size: 30px;
          font-weight: bold;
        }

        .icon {
          height: 24px;
          margin-left: 30px;
        }
        >div {
          display: flex;
          align-items: center;

          .my_icon {
            height: 32px;
            margin-right: 28px;
          }
        }

      }
    }
  }
</style>
