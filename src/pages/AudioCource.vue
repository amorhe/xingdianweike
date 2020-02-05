<template>
  <div class="content_main">
    <div class="play_module">
      <img width="100%" height="100%" :src="courseObj.picture" alt="图片">
    </div>
    <div class="video_information">
      <div class="video_title">{{courseObj.name}}</div>
      <div class="video_intro">
        <span v-for="(item,index) in courseObj.labels" :key="index">{{item}} · </span>{{courseObj.sales}}人在学习 · 共{{courseObj.count}}节课</div>
      <div :class="status==0?'video_text':'text_ellipsis video_text'">{{courseObj.synopsis}}</div>
      <div :hidden="status==0" class="cource_intro" @click="seeone">课程详情介绍</div>
    </div>
    <!--      课程内容-->
    <div class="video_content">
      <div class="iit font_bold">课程内容</div>
      <div class="music_main">
        <div :class="status==0?'music_list_now':''">
          <div class="music_list" v-for="(item,index) in courseObj.tCoursewares" :key="index">
            <div>
              <div class="music_title">{{item.name}}</div>
              <div class="music_time">
                <img v-if="item.free!=0" src="../assets/switch.png" alt="图标">
                <span>{{item.coursewareTime}}</span>
              </div>
            </div>
            <img class="music_btn" src="../assets/music_icon.png" alt="图标">
          </div>
        </div>
        <div class="seeall" @click="seeall" :hidden="status==1">查看全部{{courseObj.tCoursewares?courseObj.tCoursewares.length:''}}节课</div>
      </div>
    </div>
    <!--      课程详情-->
    <div class="video_detail">
      <div class="iit font_bold">课程详情</div>
      <div class="video_detail_intro">{{courseObj.content}}</div>
    </div>
    <div class="buy_empty"></div>
    <!--      分享-->
    <img class="share_btn" src="../assets/share_icon.png" alt="图标">
    <!--      购买-->
    <div class="buy_view">
    <button class="buy_button" @click="paymentClick">加入学习 ¥99</button>
  </div>
<!--    <PlayAudio />-->
    <transition name="fade">
      <Payment v-if="isShow" :is-show="isShow" @changeO="changeO"></Payment>
    </transition>
  </div>
</template>

<script>
  import PlayAudio from '@/components/playAudio'
  import Payment from "../components/Payment";
  import {detail} from "../request/api";

  export default {
    name: "VideoCource",
    data(){
      return{
        status: 0,
        isShow: false,
        courseObj: {}
      }
    },
    components:{
      PlayAudio,
      Payment
    },
    created() {
      // this.getDetail(this.$route.query.id);
      this.getDetail(1)
    },
    methods:{
      seeall(){
        this.status = 1;
      },
      seeone(){
        this.status = 0;
      },
    //  购买弹框
      paymentClick(){
        this.isShow = true
      },
      changeO(data){
        this.isShow = data
      },
      getDetail(courseId){
        detail(courseId).then((res) => {
          this.courseObj = res.data.data;
        })
      }
    }
  }
</script>
<style scoped>
  .fade-enter-active, .fade-leave-active{
    /*进入和离开时时间为2s*/
    transition: all 1s;
  }
</style>
<style scoped lang="less">
  video {
    object-fit: fill;
  }
  .content_main {
    .play_module {
      width: 100%;
      height: 420px;
      position: relative;

      .play_button {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -50px;
        margin-top: -50px;
      }
    }

    .video_information {
      padding: 23px 30px 0;
      color: #A1A1AA;

      .video_title {
        font-size: 30px;
        color: #191E32;
        font-weight: bold;
        line-height: 42px;
      }

      .video_intro {
        font-size: 18px;
        margin: 10px 0 20px;
        line-height: 25px;
      }

      .video_text {
        font-size: 24px;
        line-height: 33px;
      }

      .text_ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .cource_intro {
        color: #2D55BF;
        font-size: 24px;
        margin-top: 20px;
      }
    }

    .video_content {
      padding: 56px 30px 0;
      .iit {
        font-size: 40px;
        color: #1B1C31;
        margin-bottom: 20px;
      }

      .music_main {
        margin-top: 25px;
        width:690px;
        background:rgba(255,255,255,1);
        box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
        border-radius:10px;
        padding: 27px 30px;
        box-sizing: border-box;

        .music_list_now {
          max-height: 234px;
          overflow: hidden;
        }

        .music_list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;

          >div {
            display: flex;
            flex-direction: column;
          }

          .music_title {
            font-size: 24px;
            font-weight: bold;
          }

          .music_time {
            display: flex;
            align-items: center;
            color: #A1A1AA;
            font-size: 18px;
            line-height: 25px;
            font-weight: bold;

            >img {
              width: 15px;
              height: 18px;
              margin-right: 10px;
            }
          }

          .music_btn {
            width: 36px;
            height: 36px;
          }
        }

        .seeall {
          text-align: center;
          margin-top: 20px;
          color: #2D55BF;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }

    .video_detail {
      padding: 56px 30px 0;

      .iit {
        font-size: 40px;
        color: #1B1C31;
        margin-bottom: 13px;
      }

      .video_detail_intro {
        font-size: 30px;
        color: #191E32;
        line-height: 42px;
      }
    }

    .buy_view {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 170px;
      padding: 34px 30px;
      box-sizing: border-box;
      background: #FAFAFB;

      .buy_button {
        width: 100%;
        height: 100%;
        background:rgba(240,181,68,1);
        border-radius:50px;
        color: #fff;
        font-size: 30px;
        border: none;
        font-weight: bold;
        outline: none;
      }
    }

    .share_btn {
      position: fixed;
      right: 0;
      bottom: 170px;
      width: 120px;
      height: 120px;
      z-index: 10;
    }
  }
</style>
