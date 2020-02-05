<template>
    <div class="content_main">
      <div class="avatar_md">
        <div class="avatar_lf">
          <span class="tt">头像</span>
<!--          <Upload action="https://www.baidu.com" :show-upload-list="false" accept="image/png, image/jpeg">-->
<!--            <span>点击编辑头像</span>-->
<!--          </Upload>-->
          <span @click="uploadAvatar">点击编辑头像</span>
        </div>
        <div class="avatar_rg">
          <img class="avatar_img" src="http://img2.imgtn.bdimg.com/it/u=2752281117,4140466299&fm=26&gp=0.jpg" alt="头像">
          <img class="dayuIcon" src="../assets/dayu.png" alt="图标">
        </div>
      </div>
      <div class="avatar_md">
        <span class="tt">昵称</span>
        <router-link to="/Nickname" class="avatar_rg">
          <span>18258456666</span>
          <img class="dayuIcon" src="../assets/dayu.png" alt="图标">
        </router-link>
      </div>
      <div class="avatar_md">
        <span class="tt">性别</span>
        <div class="avatar_rg" @click="changeSex">
          <span>请选择您的性别</span>
          <img class="dayuIcon" src="../assets/dayu.png" alt="图标">
        </div>
      </div>
      <transition name="fade">
        <div class="sex_div" v-if="tabSex">
          <div class="bg_empty" @click="finishChange" @touchmove.prevent></div>
          <div class="sex_box">
            <div class="sex_top">
              <span>选择性别</span>
              <img src="../assets/close.png" alt="图标" @click="finishChange">
            </div>
            <div class="sex_list tt">
              <span>男士</span>
              <span>女士</span>
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="sex_div" v-if="tabAvatar">
          <div class="bg_empty" @click="finishUpload" @touchmove.prevent></div>
          <div class="sex_box">
            <div class="sex_top">
              <span>修改头像</span>
              <img src="../assets/close.png" alt="图标" @click="finishUpload">
            </div>
            <div class="sex_list tt">
              <span>从手机相册中选择</span>
              <span>拍照</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
    export default {
      name: "EditorPersonInfo",
      data(){
          return{
            tabSex: false,
            tabAvatar: false
          }
      },
      methods:{
        //选择头像
        uploadAvatar(){
          this.tabAvatar = true;
        },
        finishUpload(){
          this.tabAvatar = false;
        },
        //选择性别
        changeSex(){
          this.tabSex = true;
        },
        finishChange(){
          this.tabSex = false;
        }
      }
    }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active{
    /*进入和离开时时间为0.5s*/
    transition: all .5s;
  }
</style>
<style scoped lang="less">
  .content_main {
    padding: 63px 30px 0 45px;

    .avatar_md {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 58px;
      color: #A1A1AA;
      font-size: 24px;

      .avatar_lf {
        display: flex;
        flex-direction: column;

        .hidden {
          opacity: 0;
        }
      }
      .avatar_rg {
        display: flex;
        align-items: center;

        .avatar_img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }

    .sex_div {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      z-index: 100;

      .bg_empty {
        background: rgba(0,0,0,.7);
        width: 100%;
        height: 100%;
      }
      .sex_box {
        position: fixed;
        width: 100vw;
        left: 0;
        bottom: 0;
        padding: 30px 30px 0;
        background: #fff;

        .sex_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 40px;
          font-weight: bold;
          >img {
            width: 30px;
          }
        }

        .sex_list {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 52px 0;
          >span:nth-child(1) {
            margin-bottom: 55px;
          }
        }
      }
    }
  }
</style>
