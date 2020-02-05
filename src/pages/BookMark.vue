<template>
    <div class="content_main">
      <div class="list_bookmark" v-for="item in 2">
        <img class="cource_img" src="http://img2.imgtn.bdimg.com/it/u=2545705618,3504629714&fm=26&gp=0.jpg" alt="图片">
        <div>
          <div class="cource_title">微信高级产品团队，分享微信朋友圈的werqwr </div>
          <div>上次学习 25:22</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BookMark"
    }
</script>

<style scoped lang="less">
  .content_main {
    padding: 0 30px;

    .list_bookmark {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .cource_img {
        width:120px;
        height:120px;
        border-radius:10px;
        margin-right: 28px;
      }

      >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 542px;
        color: #A1A1AA;
        font-size: 24px;

        .cource_title {
          font-size: 30px;
          font-weight: bold;
          color: #191E32;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
