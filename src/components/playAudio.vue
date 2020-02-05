<template>
  <div class="audio_box">
    <div>
      <img class="cource_img" src="http://img0.imgtn.bdimg.com/it/u=1089704776,1747078472&fm=15&gp=0.jpg" alt="图片" :style="state?'animation-play-state:paused':'running'">
      <div class="bg_div"></div>
      <div class="audio_main">
        <div class="audio_title font_bold">第1节 Tableau是什么</div>
        <div class="audio_controls">
          <span class="font_bold">14:12</span>
          <div class="progress_box">
            <Slider v-model="value1" show-tip="never"></Slider>
          </div>
          <span class="font_bold">28:32</span>
        </div>
      </div>
      <img :hidden="!state" @click="playChange" class="menu_btn" src="../assets/play_music_icon.png" alt="图标">
      <img :hidden="state" @click="playChange" class="menu_btn" src="../assets/pause_music_icon.png" alt="图标">
    </div>
  </div>
</template>

<script scoped>
    export default {
      name: "playAudio",
      data(){
          return{
            value1:50,
            state:true
          }
      },
      methods:{
        playChange(){
          this.state = ! this.state
        }
      }
    }
</script>
<style>
  .ivu-slider-button-wrap {
    top: -12px;
  }
  .ivu-slider-bar {
    background: #F0B544;
  }
  .ivu-slider-button {
    width: 20px;
    height: 20px;
    background-color: #F0B544;
    border-color: #F0B544;
  }
</style>
<style scoped lang="less">
  @-webkit-keyframes rotates /* Safari 和 Chrome */
  {
    from {-webkit-transform:rotate(0deg);}

    to {-webkit-transform:rotate(360deg);}
  }
  .audio_box {
    width:750px;
    height:107px;
    background:rgba(250,250,251,1);
    box-shadow:0 0 20px 0 rgba(0,0,0,0.1);
    box-sizing: border-box;
    padding: 0 30px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;

    >div {
      position: relative;
      left: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;

      .cource_img {
        position: absolute;
        left: 0;
        top: -14px;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        -webkit-animation: rotates 3s linear 1s 5 alternate;
        animation: rotates 3s linear infinite;
      }
      .bg_div {
        width: 90px;
        height: 90px;
      }

      .audio_main {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 0 30px;

        .audio_title {
          font-size: 24px;
        }

        .audio_controls {
          display: flex;
          align-items: center;
          color: #A1A1AA;
          font-size: 18px;
          justify-content: space-between;

          .progress_box {
            width: 332px;
            margin: 0 16px;
            display: flex;
            align-items: center;

            >div {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .menu_btn {
        width: 60px;
        height: 60px;
      }
    }
  }
</style>
