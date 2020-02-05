<template>
    <div class="content_main">
      <div class="play_module">
<!--        课程只有一个视频-->
        <div v-if="courseObj.tCoursewares.length==1">
          <video width="100%" height="100%" autoplay muted>
            <source src="http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4" />
            您的浏览器不支持 video 标签.
          </video>
          <img class="play_button" src="../assets/play_big.png" alt="图标">
        </div>
        <div v-if="playIng">
          <video width="100%" height="100%" autoplay controls id="video_s">
            <source :src="video_url" />
            您的浏览器不支持 video 标签.
          </video>
<!--          <img v-if="!playIng" @click="pauseClick" class="play_button" src="../assets/play_big.png" alt="图标">-->
        </div>
<!--        课程有多个视频-->
        <img v-if="courseObj.tCoursewares.length>1 &&!playIng" width="100%" height="100%" :src="courseObj.picture" alt="图片">
      </div>
      <div class="video_information">
        <div class="video_title">{{courseObj.name}}</div>
        <div class="video_intro"><span v-for="(item,index) in courseObj.labels" :key="index">{{item}} · </span>{{courseObj.sales}}人在学习 · 共{{courseObj.count}}节课</div>
        <div :class="status==0?'video_text':'text_ellipsis video_text'">{{courseObj.synopsis}}</div>
        <div :hidden="status==0" class="cource_intro" @click="seeone">课程详情介绍</div>
      </div>
<!--      课程内容-->
      <div class="video_content">
        <div class="iit font_bold">课程内容</div>
        <div class="video_list" v-if="status==0">
          <div class="video_li" v-for="(item,index) in courseObj.tCoursewares.slice(0,2)" :key="index">
            <div class="video_box" @click="choosePlay(item.fileUrl)">
              <img class="video_poster" src="http://img4.imgtn.bdimg.com/it/u=1577988464,384707300&fm=26&gp=0.jpg" alt="图片">
              <img class="play_icons" src="../assets/play_big.png" alt="图标">
            </div>
            <div class="video_content_title">{{item.name}}</div>
            <div class="video_content_b">
              <img v-if="item.free!=0" src="../assets/switch.png" alt="图标">
              <span>{{item.coursewareTime}}</span>
            </div>
          </div>
          <div class="video_all" @click="seeall">
            <div class="number">{{courseObj.tCoursewares.length}}</div>
            <div>全部</div>
          </div>
        </div>
        <div class="video_ul" v-for="(item,index) in courseObj.tCoursewares" :key="index" v-if="status==1">
          <div class="video_ol">
            <div class="video_box" @click="choosePlay(item.fileUrl)">
              <img class="video_poster" src="http://img4.imgtn.bdimg.com/it/u=1577988464,384707300&fm=26&gp=0.jpg" alt="图片">
              <img class="play_icons" src="../assets/play_big.png" alt="图标">
            </div>
            <div class="intro_right">
              <div class="intro_title">{{item.name}}</div>
              <div class="intro_time">
                <span>{{item.coursewareTime}}</span>
                <img v-if="item.free!=0" src="../assets/switch.png" alt="图标">
              </div>
            </div>
          </div>
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

      <transition name="fade">
        <Payment v-if="isShow" :is-show="isShow" @changeO="changeO"></Payment>
      </transition>
    </div>
</template>

<script>
    import Payment from "../components/Payment";
    import {detail} from "../request/api";
    export default {
      name: "VideoCource",
      data(){
         return{
           status: 0,
           isShow: false,
           courseObj: {
             tCoursewares:[]
           },
           playIng: false,
           video_url: ''
         }
      },
      components:{
        Payment
      },
      created() {
        this.getDetail(1);
      },
      methods:{
        //查看全部
        seeall(){
          this.status = 1;
        },
        seeone(){
          this.status = 0;
        },
        //购买弹框
        paymentClick(){
          this.isShow = true
        },
        changeO(data){
          this.isShow = data;
        },
        //获取详情
        getDetail(courseId){
          detail(courseId).then((res) => {
            this.courseObj = res.data.data;
          })
        },
        //选择播放课程
        choosePlay(str){
          this.video_url = ''
          this.playIng = true;
          this.video_url = str;
        },
        pauseClick(){
          var vide = document.getElementById('video_s');
          if(vide.paused){
            vide.play();
          }else if(vide.play()){
            vide.pause();
          }
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
  video::-webkit-media-controls {
    overflow: hidden !important;
  }
  video::-webkit-media-controls-enclosure {
    width: calc(100% + 64px);
    margin-left: auto;
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
        font-weight: bold;
      }
    }

    .video_content {
      padding: 56px 30px 0;
      .iit {
        font-size: 40px;
        color: #1B1C31;
        margin-bottom: 20px;
      }

      .video_list {
        display: flex;
        justify-content: space-between;

        .video_li {
          width: 300px;
          display: flex;
          flex-direction: column;

          .video_box {
            height: 168px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;

            .video_poster {
              width: 100%;
              height: 100%;
            }

            .play_icons {
              width: 60px;
              height: 60px;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
          }

          .video_content_title {
            font-size: 24px;
            font-weight: bold;
            width: 300px;
            line-height: 33px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 14px 0 5px;
          }

          .video_content_b {
            color: #A1A1AA;
            font-size: 18px;
            display: flex;
            align-items: center;
            line-height: 18px;
            font-weight: bold;

            >img {
              width: 15px;
              height: 18px;
              margin-right: 10px;
            }
          }
        }

        .video_all {
          width: 70px;
          height: 168px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          background:rgba(247,248,249,1);
          border-radius:10px;
          color: #1B1C31;

          .number {
            font-size: 24px;
          }
        }
      }

      .video_ul {
        margin-bottom: 30px;

        .video_ol {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .video_box {
            width: 300px;
            height: 168px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;

            .video_poster {
              width: 100%;
              height: 100%;
            }

            .play_icons {
              width: 60px;
              height: 60px;
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
          }

          .intro_right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 168px;
            width: 360px;

            .intro_title {
              font-size: 30px;
              font-weight: bold;
              color: #191E32;
              line-height: 42px;
            }

            .intro_time {
              font-size: 24px;
              color: #A1A1AA;
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: bold;

              >img {
                width: 20px;
                height: 24px;
              }
            }
          }
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
