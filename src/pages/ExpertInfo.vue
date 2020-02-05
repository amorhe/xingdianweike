<template>
    <div class="content_body">
      <div class="expert_box">
        <div>
          <span class="tt">达人姓名</span>
          <span>刘晓虎</span>
        </div>
        <div>
          <span class="tt">达人手机号</span>
          <span>19877338283</span>
        </div>
        <div>
          <span class="tt">达人微信号码</span>
          <span>19877338283</span>
        </div>
      </div>
      <img class="qrCode" src="http://img0.imgtn.bdimg.com/it/u=1173305424,430017642&fm=11&gp=0.jpg" alt="二维码">
      <div class="tt">邀请更多人成为达人</div>
      <div class="tt">邀请0/20人并升级为高级达人</div>
      <button class="share_btn">分享邀请链接</button>
    </div>
</template>

<script>
    export default {
        name: "ExpertInfo"
    }
</script>

<style scoped lang="less">
  .content_body {
    padding: 30px;
    text-align: center;

    .expert_box {
      width:690px;
      height:367px;
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);
      border-radius:10px;
      font-size: 24px;
      color: #A1A1AA;
      box-sizing: border-box;
      padding: 64px 30px;
      margin-bottom: 70px;

      >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 57px;
      }
    }

    .qrCode {
      width: 480px;
      height: 480px;
      margin: 0 auto 23px;
    }

    .share_btn {
      width:690px;
      height:100px;
      background:rgba(64,110,206,1);
      border-radius:50px;
      color: #fff;
      font-size: 30px;
      font-weight: bold;
      margin-top: 104px;
    }
  }
</style>
